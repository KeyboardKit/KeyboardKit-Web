---
title:  KeyboardKit 10.9 fixes a thread hang in iOS 27
date:   2026-10-01 06:00:00 +0100
tags:   releases

assets: /assets/blog/26/1001/
image: /assets/blog/26/1001/image.jpg
image-show: 0
---

KeyboardKit 10.9.6 and 10.9.7 fixes an elusive thread hang in iOS 27. Make sure to upgrade to this version if you plan on staying on KeyboardKit 10 for a while.

## The problem

We have started getting bug reports from users of the [KeyboardKit app](/app), that the main app and keyboard could freeze randomly.

We had massive problems reproducing this freeze, and everyone we asked to download and test the app did so without any problems.

After receiving a bug report that the issue also manifested itself in the demo app, on iPad 13", we could narrow down the scope and reproduce the bug. Turns out that a layout change caused an infinite loop.


## The reason

The reason for the freeze was the library augmenting a keyboard layout by adding an additional input toolbar. 

When augmenting the layout, the library did so with a default layout configuration. This creates a temporary, observable state that is only used to read settings.

This used to work, but in iOS 27 this seems to have changed behavior, and now causes the observable state to update, which causes the keyboard to redraw, which causes the layout to once again be augmented.


## The solution

After locating this problem, we could easily sove it by removing the default configuration parameter value. We will remove these default context parameter values and require an explicit configuration to be passed in.

The fix has been out in production for a few days, and all app users have now reported that they can use the app without any hangs.


## Conclusion

KeyboardKit 10.9.6 fixes this problem, but was accidentally built with Xcode 27. If you are still on Xcode 26, the 10.9.7 patch update is rebuilt with Xcode 26.6.