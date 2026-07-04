---
title:  Custom Keyboards are Overlapped by Keyboard Toolbar 
date:   2026-07-04 06:00:00 +0100
tags:   apple-bugs

assets: /assets/blog/26/0704/
image: /assets/blog/26/0704/image.jpg
image-show: 0

issue: https://github.com/KeyboardKit/KeyboardKit/issues/1055
feedback: https://feedbackassistant.apple.com
---

We have noticed that iOS will overlay any custom keyboard with the host application's keyboard toolbar, when switching back to an already initialized custom keyboard. This happens in all custom keyboards.

## The Problem

When selecting an already initialized custom keyboard after using another keyboard, the host application will render its keyboard toolbar inside the frame of the custom keyboard.

This happens in all custom keyboards, including KeyboardKit-based ones as well as in Grammarly and Gboard:

![Grammarly keyboard]({{page.assets}}grammarly.png)

![Gboard keyboard]({{page.assets}}gboard.png)

This does not happen when launching a custom keyboard for the first time. It only happens when first initializing a keyboard, then switching to another keyboard, then switching back to the already initialized keyboard.


## Steps to Reproduce

You can easily reproduce this bug by following the steps below:

- Use an app that has keyboard toolbar controls, e.g. Apple Notes
- Select a custom keyboard, e.g. Grammarly or Gboard
- Switch to another keyboard
- Switch back to the same keyboard

You should now see the keyboard toolbar controls overlay the custom keyboard, at least in iOS 26.5. If you can't reproduce it, please let us know, so that we can pinpoint when this started happening.


## Workaround Attempts

We tried adding a button to redraw the keyboard when this happens, but it didn't help. It seems like the toolbar is always merged with the keyboard once the keyboard is presented after initialization.


## Next Steps

We hope that iOS 27 will fix this problem, and will track any progress in [this issue]({{page.issue}}). If you report this to Apple
using the [Feedback Assistant]({{page.feedback-assistant}}), you can mention our report `FB23560337` for additional details.