---
title:  iPhone Duo and KeyboardKit
date:   2026-09-20 06:00:00 +0100
tags:   general

assets: /assets/blog/26/0920/
image: /assets/blog/26/0920/image.jpg
image-show: 0

duo: https://www.apple.com/iphone-duo/
---

iPhone Duo is here, and with it a bunch of new concepts and form factors. This post takes a quick look at what it will mean for KeyboardKit.


## iPhone Duo

Since we're fairly certain that you already know most about the [iPhone Duo]({{page.duo}}), we won't go through it in detail, but in short it's a smaller device that compensates for it's shorter height by moving the status bar to the right.

![iPhone Duo Closed]({{page.assets}}/duo-closed.jpg)

The iPhone Duo can then be folded out into twice it's size, which brings it closer to an iPad in size and behavior.

![iPhone Duo Folded]({{page.assets}}/duo-folded.jpg)

Let's look at how the Duo's native keyboard behaves, and compare it to how KeyboardKit behaves on the Duo.


## Closed Keyboard

When the Duo is closed, the keyboard more or less what you'd expect, although a couple of things stand out.

![Native Keyboard]({{page.assets}}/1-native-closed.jpg)

Notice how the keyboard takes up all the horizontal space, but how the globe and dictation keys merge with the keyboard, instead of being separate. Let's compare it with the KeyboardKit keyboard.

![KeyboardKit Keyboard]({{page.assets}}/1-kk-closed.jpg)

In comparison, KeyboardKit looks pretty good, although the keys are a bit too tall. However, it still behaves like on a regular device and doesn't add the globe and dictation keys to the bottom row.


## Folded Keyboard

When the Duo is folded, we can immediately see a huge difference - the keyboard is split around the screen fold!

![Native Keyboard]({{page.assets}}/2-native-folded.jpg)

Apple strongly recommends moving interactive elements away from the fold, and the keyboard is no exception. Also notice that the globe and dictation now live outside the keyboard. Let's compare it with KeyboardKit.

![KeyboardKit Keyboard]({{page.assets}}/2-kk-folded.jpg)

In comparison, KeyboardKit looks odd. Since it still behaves like a regular device, it renders keys with the shorter landscape configuration. It also doesn't split the keyboard in two...but the globe and dictation keys are there.


## Open Keyboard

When the Duo is open, things start behaving like normal again. We now get a solid keyboard, with the globen and dictation keys placed outside the keyboard.

![Native Keyboard]({{page.assets}}/3-native-open.jpg)

However, notice how the keyboard rows are a bit uneven, and have different width. Let's compare it with the old design, which is still used in the KeyboardKit keyboard.

![KeyboardKit Keyboard]({{page.assets}}/3-kk-open.jpg)

In comparison, KeyboardKit looks since behaves like on a regular device, with the shorter key height and smaller fond, and with all rows except the second being even in width.


## Conclusion

The iPhone Duo forces us all to adjust our apps to its new form factors, and KeyboardKit is no different. We will tweak the keyboard layout and sizes to the new configurations, and start looking at a split layout.

This work will begin after the KeyboardKit 11 release, which is scheduled for October 1. After that, we hope to get support out shortly.