---
title:  KeyboardKit dSYMs are now available
date:   2025-10-19 06:00:00 +0000
tags:   releases dSYM

assets: /assets/blog/25/1019/
image:  /assets/blog/25/1019/image.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/10.0.4
---

KeyboardKit now includes dSYMs as part of the release. Let's see how you can add these dSYMs to your app to improve the crash reports for crashes that originate from the KeyboardKit SDK. 


## What are dSYMs and why do we need them?

Before we look at how to add dSYMs to your app, let's begin with the question "what are dSYMs?".

`dSYM` stands for `debug symbol file`, which acts as a "translation guide" between compiled machine code and its original source code. 

When KeyboardKit is compiled for release, the compiler optimizes the code by stripping out human-readable information like function names, variable names, and line numbers, replacing them with memory addresses. This makes the code smaller and faster, but it also means that when a crash occurs, the crash report shows hexadecimal addresses like `0xabc123...` instead of meaningful info.

This is where dSYMs become essential. They connect those obscure memory addresses back to the original source code locations. When you upload dSYMs to App Store Connect alongside your app, Apple can automatically "symbolicate" crash reports, which converts those memory addresses into readable stack traces that show exactly in which function and on which lines the crash occurred. 

Without dSYMs, debugging production crashes is nearly impossible. With them, you get actionable crash reports that pinpoint exactly where things went wrong.


## Uploading apps without dSYMs

If you upload an app that uses KeyboardKit without including the dSYMs, Xcode will show a warning modal to tell you that the dSYMs are missing:

![A screenshot of the Xcode dSYMs missing alert modal]({{page.assets}}xcode-upload-warning.png){:class="plain"}

Without dSYMs, any crashes that originate from the SDK will be unsymbolicated. This will cause the crash report to omit any information that can be used to fix the crash.

![A screenshot of an Xcode crash report with unsymbolicated crash symbols]({{page.assets}}xcode-unsymbolicated-crash-report.png){:class="plain"}

The crash report above tells us that `KeyboardKit` has crashed during `[NSString initWithUTF8String]`, but we can't see anything more. To get more information, we need the dSYMs.


## KeyboardKit dSYMs

Since KeyboardKit 10.0.4, the [KeyboardKit repository]({{site.urls.github}}) will publish a zip file with the dSYMs for each new release, and list it alongside the framework zip file on the [release page]({{page.release}}).

To include the dSYMs when you upload new versions of your app to App Store Connect, archive the app for release in Xcode, to be taken to this list of archives:

![A screenshot of the Xcode archives modal]({{page.assets}}xcode-archives.png){:class="plain"}

Right-click the archive that you want to add dSYMs to and choose `Show in Finder`, then right-click the archive in Finder and choose `Show Package Contents`, then add the dSYMs to the dSYMs folder:

![A screenshot of Finder and an added dSYMs file]({{page.assets}}finder-dsyms.png){:class="plain"}

If you now return to Xcode and press "Distribute App", you will now get a green checkmark instead of the dSYMs warning. This means that the dSYMs were properly uploaded together with your app.

![A screenshot of the Xcode successful upload modal]({{page.assets}}xcode-upload-success.png){:class="plain"}

This means that future crash reports that originate from KeyboardKit will be properly symbolicated.


## Conclusion

Including the dSYMs of any closed-source SDKs your app depends on is very important, to be able to get proper crash reports for crashes that originate from the SDK. 

While Xcode requires that you include additional dSYMs as part of uploading your app to App Store Connect, other crash reporting tools like Crashlytics allow you to upload dSYMs later.