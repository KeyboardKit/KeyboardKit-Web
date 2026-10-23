---
title:  "iPhone Duo: How the Keyboard Changed From Beta to Device"
date:   2026-10-23 06:00:00 +0100
tags:   general

assets: /assets/blog/26/1023/
image: /assets/blog/26/1023/image.jpg
image-show: 0

article: /blog/2026/09/20/iphone-duo-and-keyboardkit
article-hinge: /blog/2026/10/14/ios-keyboard-extensions-can-t-detect-the-iphone-duo-fold
article-11-1: /blog/2026/10/20/keyboardkit-11-1-is-out
---

We finally have a physical iPhone Duo to test with, and it turns out that the keyboard doesn't behave like it did in the simulator. The globe and dictation buttons have moved into the keyboard.


## Simulator Behavior

In the iOS 27.1 simulator, the globe and dictation buttons are placed outside the keyboard area, much like how all Face ID iPhones behave.

<div class="grid col3 images">
<img src="{{page.assets}}simulator-duo-closed.jpg" />
<img src="{{page.assets}}simulator-duo-folded.jpg" />
<img src="{{page.assets}}simulator-duo-open.jpg" />
</div>

Since the simulator provides these buttons in all three states, a custom keyboard didn't have to render its own globe and dictation buttons.


## Device Behavior

It turns out that a physical iPhone Duo behaves differently. Instead of rendering the keys outside the keyboard, the globe button is added next to the emoji key, and the dictation button is added next to the space bar.

<div class="grid col2 images">
<img src="{{page.assets}}device-duo-closed-portrait.jpg" />
<img src="{{page.assets}}device-duo-open-portrait.jpg" />
</div>

This is how Touch ID devices have always behaved, where a custom keyboard must add the buttons itself, since there is no space for them below the keyboard. The Duo now does the same in all states.


## Implications

[KeyboardKit 11.1]({{page.article-11-1}}) was recently released, with updated layouts and designs for the iPhone Duo. These changes will however not work, and must be patched.

We will update KeyboardKit to add these buttons on the iPhone Duo, and will verify the behavior on a physical device. If you have any questions, don't hesitate to [reach out]({{site.urls.email}}).
