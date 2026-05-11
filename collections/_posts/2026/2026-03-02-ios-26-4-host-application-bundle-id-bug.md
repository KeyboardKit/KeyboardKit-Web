---
title:  iOS 26.4 Host Application Bug
date:   2026-03-02 06:00:00 +0100
tags:   apple-bugs

assets: /assets/blog/26/0302
image: /assets/blog/26/0302/image.jpg
image-show: 0

bsky:  https://bsky.app/profile/keyboardkit.bsky.social/post/3mhgzjbadzs2h
toot:  https://techhub.social/@keyboardkit/116237941215364902

issue: https://github.com/KeyboardKit/KeyboardKit/issues/1014
---

A change has been discovered in the iOS 26.4 betas and RC, that causes the host application bundle ID to become empty. This causes different problems for different versions of KeyboardKit.


## The Issue

In the iOS 26.4 betas and RC, the `hostApplicationBundleId` value is empty. This affects a keyboard's ability to identify in which app it's currently used.

When the host application bundle ID becomes empty, keyboards may not be able to:

- Provide app-specific customizations or behaviors.
- Implement context-aware features that depend on knowing the host app.
- Navigate back to the keyboard from the main application, during dictation.

Many keyboard developers, including those not using KeyboardKit, have reported encountering this problem, which is caused by private APIs being changing in iOS.


## What We Know

The issue has is documented tracked in the KeyboardKit GitHub repository. For more information, discussions, and updates on this issue, please visit [this bug report]({{page.issue}}).


## KeyboardKit Implications

This iOS 26.4 change will affect KeyboardKit in different ways, based on which version you're using.

* KeyboardKit 10.2.1 and earlier uses Objective-C to parse the host application information. This approach *crashes* when the bundle information is missing.

* KeyboardKit 10.2.2 and later uses Swift to parse the host application information. This is more robust and will not crash, but the bundle identifier will be *empty*.

It's very important that you promptly upgrade to KeyboardKit 10.2.2 or later to avoid this crash.


## Workarounds and Next Steps

While we look at alternatives, or until Apple issues a fix, developers experiencing this issue should:

- Upgrade to KeyboardKit 10.2.2 or later.
- Implement graceful fallbacks when the bundle ID is empty.
- Avoid relying on the host application for critical functionality.
- Monitor the [GitHub issue]({{page.issue}}) for more information and updates.

We'll continue monitoring the situation and will update you as more information becomes available or when Apple releases a fix. Please share any findings in this issue.


## Reporting your problems to Apple

We urge the community to report this problem to Apple, using the [Feedback Assistant](https://feedbackassistant.apple.com). If you do, consider referring them to our feedback with the `FB22247647` ID.

### Our bug report

This is a copy of the bug report that we have reported to Apple, using the Feedback Assistant:

**OBS!** We're fully aware that this bug report refers to private APIs, which you take no responsibility for and strongly discourages people to use. However, being able to identify a custom keyboard's host application is critical for custom keyboard developers, to be able to tailor the UX and features to fit the currently active app, and to be able to smoothly navigate back to the keyboard from the main app. This feedback shares what has stopped working, with the hopes that you can reverse the removal, or replace it with a proper, public API.

**PROBLEM:**
We have started noticing crashes in iOS 26.4, that are caused by a private API that has been used by keyboard extensions to resolve the bundle ID of the host application that is currently using the keyboard. The reason for the crash is that the last steps of resolving the bundle ID has started returning `nil` in 26.4. This caused a crash in apps that used old Objective-C ways to try to parse the nil value. 

**FIXING THE CRASH:** 
The attached code below uses a newer approach, which uses Swift to parse the string. This code doesn't crash, but it still returns `nil` as bundle ID.

**IMPLICATIONS:** 
When the host application bundle ID becomes `nil`, developers are no longer able to identify the host application. This causes severe problems for keyboard developers that tailor the keyboard functionality to the host application, or need the host application ID for critical features. While we understand that you may want to remove or change private APIs over time, this particular change will strongly affect all custom keyboards and lead to a much worse user experience. Some keyboards will be severely crippled by not being able to access the host application bundle ID.

**SUGGESTION:**
Due to the severe implications of this change, we ask you to reverse the removal that causes this to return NIL, or replace it with a proper, public API to let custom keyboard developers identify the host application in a safe manner. You can require Full Access and limit the capability to the `UIInputController`. 