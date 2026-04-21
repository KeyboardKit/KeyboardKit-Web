---
title:  KeyboardKit 8.4
date:   2024-03-26 08:00:00 +0100
tags:   releases documentation emojis

tweet:  https://x.com/GetKeyboardKit/status/1772634059992076537?s=20
toot:   https://techhub.social/@keyboardkit/112162497672526993

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.4.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.4.0
---

KeyboardKit 8.4 is out. This version uses Swift 5.9, adds support for visionOS, drastically improves the docs, makes many emoji features open-source, introduces modifier-applied styles, and more. 

Upgrading to Swift 5.9 brings new powers, such as the ability to use the latest documentation tools. As a direct result, the KeyboardKit documentation has been much improved.

The documentation will now list components and related features in tab navigators, that same a lot of space. The new grid capabilities provides responsive grids for image galleries, etc.

Supporting visionOS means that the SDK will now build for the platform, but the UI components are not adjusted and may behave strange on this platform.

This version continues the 8.0 initiative to reduce the surface area of the SDK, by moving views into their corresponding namespaces. This work will continue with services in 8.5.

Most views are now styled with view modifiers instead of by injecting a style into the initializer. This is how native views like `Button` and its `buttonStyle` works, and is much more flexible.

More complex views, like the `SystemKeyboard` and `Keyboard.Button` are still using the style provider concept, since it's a lot more flexible. This means that you will most likely be affected by this change.

All in all, this version changes many structural things in the SDK, but it will most likely not affect you. One thing that may affect you, though, is the updated documentation. Hope you'll like it!


## Conclusion

Please see the [release notes]({{page.release}}) for a KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}) for a full list of changes. Don't hesitate to reach out if you have any questions.