---
title:  Critical extension crashes in iOS 17.1
date:   2023-12-10 08:00:00 +0100
tags:   ios-bugs

tweet:  https://x.com/GetKeyboardKit/status/1736793940324413473?s=20
toot:   https://techhub.social/@keyboardkit/111602494916219080
---

This blog post contains important information about a keyboard extension crash that may occur in production in iOS 17.1 (and perhaps even in iOS 17.0).

Some developers have reported that their keyboard extensions crash on launch in production. The same has been observed for the [KeyboardKit app](/app).

When the crash happens in production, nothing is reported to Xcode. This means that you won't get any indications that your keyboard is crashing for your users. When it happens in Xcode, attaching the debugger to your keyboard extension will not work. The keyboard will crash before being attached.


## Not caused by KeyboardKit

The crash has been thoroughly investigated by completely removing KeyboardKit from the crashing keyboard. The crash still occurred, without KeyboardKit being used by the keyboard.


## Crash behavior

When attaching the Xcode debugger to the keyboard extension before launching it, this was logged to the Xcode console when the crash occured:

```
[u FAED32EA-0D37-40FE-918D-75FACBBF2D30:m ] [com.xxx(2.4.1)] Failed to start plugin; plugin is already activating

[u FAED32EA-0D37-40FE-918D-75FACBBF2D30:m ] [com.xxx(2.4.1)] Failed to start plugin; pkd returned an error: Error Domain=PlugInKit Code=4 "RBSLaunchRequest error trying to launch plugin com.xxx(FAED32EA-0D37-40FE-918D-75FACBBF2D30): Error Domain=RBSRequestErrorDomain Code=5 "Launch failed." UserInfo={NSLocalizedFailureReason=Launch failed., NSUnderlyingError=0x7acdc5ef0 {Error Domain=NSPOSIXErrorDomain Code=111 "Unknown error: 111" UserInfo={NSLocalizedDescription=Launchd job spawn failed}}}" UserInfo={NSLocalizedDescription=RBSLaunchRequest error trying to launch plugin com.xxx(FAED32EA-0D37-40FE-918D-75FACBBF2D30): Error Domain=RBSRequestErrorDomain Code=5 "Launch failed." UserInfo={NSLocalizedFailureReason=Launch failed., NSUnderlyingError=0x7acdc5ef0 {Error Domain=NSPOSIXErrorDomain Code=111 "Unknown error: 111" UserInfo={NSLocalizedDescription=Launchd job spawn failed}}}}

Plugin <id<PKPlugIn>: 0x157f22900; core = <[u FAED32EA-0D37-40FE-918D-75FACBBF2D30] [com.xxx(2.4.1)],[d 6D82DCED-06E7-4422-851A-07682868277E] [/private/var/containers/Bundle/Application/56E42C13-6DDF-4C17-B363-36C0BF5A2AA4/KeyboardKit.app/PlugIns/Keyboard.appex]>, instance = [(null)], state = 3, useCount = 0> must have pid! Extension request will fail

Failed to acquire assertion for plugin: <id<PKPlugIn>: 0x157f22900; core = <[u FAED32EA-0D37-40FE-918D-75FACBBF2D30] [com.xxx(2.4.1)],[d 6D82DCED-06E7-4422-851A-07682868277E] [/private/var/containers/Bundle/Application/56E42C13-6DDF-4C17-B363-36C0BF5A2AA4/KeyboardKit.app/PlugIns/Keyboard.appex]>, instance = [(null)], state = 3, useCount = 0> pid: 0

Unable to acquire process assertion in beginUsing: with plugin identifier: com.xxx, killing plugin

begin extension request <EXExtensionRequest: 0x282359ff0> Request PK UUID: 40E96D77-4481-42BD-BFEC-17A912AC60C3 with item count 0 complete with error: Error Domain=PlugInKit Code=4 "RBSLaunchRequest error trying to launch plugin com.xxx(FAED32EA-0D37-40FE-918D-75FACBBF2D30): Error Domain=RBSRequestErrorDomain Code=5 "Launch failed." UserInfo={NSLocalizedFailureReason=Launch failed., NSUnderlyingError=0x7acdc5ef0 {Error Domain=NSPOSIXErrorDomain Code=111 "Unknown error: 111" UserInfo={NSLocalizedDescription=Launchd job spawn failed}}}" UserInfo={NSLocalizedDescription=RBSLaunchRequest error trying to launch plugin com.xxx(FAED32EA-0D37-40FE-918D-75FACBBF2D30): Error Domain=RBSRequestErrorDomain Code=5 "Launch failed." UserInfo={NSLocalizedFailureReason=Launch failed., NSUnderlyingError=0x7acdc5ef0 {Error Domain=NSPOSIXErrorDomain Code=111 "Unknown error: 111" UserInfo={NSLocalizedDescription=Launchd job spawn failed}}}}

PlugInKit error in beginUsing: with plugin identifier: com.xxx, killing plugin

CAReportingClient.mm:532 Attempted to remove a reporter not created by this client { careporter_id=66 894 115 635 204 }
```

In the log messages above, `com.xxx` is the bundle ID of the keyboard.

The reason for the crash seems to be that the system fails to start the plugin (extension) altogether, not that the keyboard extension crashes.

When investigating the crash, the keyboard extension could sometimes be launched once, but any subsequent launches or deploys from Xcode would then cause it to crash again. 

When the keyboard was crashing from Xcode, installing it from App Store or TestFlight would make it work. However, if an App Store or TestFlight build would crash, the app had to be reinstalled. 

When the keyboard was crashing, toggling Full Access would sometimes make the next launch work, but any subsequent launches or deploys from Xcode would then cause it to crash again.


## Conclusion

After many hours of trying to find an explanation to this crash, both test devices were updated to iOS 17.2. After that, the crash completely went away on both devices.

It seems like the reason for this crash is that iOS 17.1 (not confirmed on iOS 17.0) for some reason fails to launch keyboard extensions multiple times in a row.

If this observation is correct, and the crash will happen on launch, there is unfortunately little you can do to work around the problem.

One alternative is to add a critical error message to your main app and ask users that are on iOS 17.1 (and maybe even 17.0) to update their device to iOS 17.2.