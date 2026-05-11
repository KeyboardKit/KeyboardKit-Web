---
title:  KeyboardKit 8.9
date:   2024-09-27 08:00:00 +0100
tags:   releases essentials app callouts layout services themes

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.9
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.9

tweet:  https://x.com/GetKeyboardKit/status/1839650653741666446
toot:   https://techhub.social/@keyboardkit/113209639816416641
---

KeyboardKit 8.9 is out! This a massive update that is built with Xcode 16 and that improves how to set up a keyboard extension, renames services, and adds a bunch of new features.


## 🚨 Important information

KeyboardKit 8.9 currently has a lot of deprecations, since the structure is being changed and types are being renamed to make the upcoming 9.0 cleaner.


## 🛠️ Xcode 16

KeyboardKit and KeyboardKit Pro are now built with Xcode 16, using the Swift 6 compiler. While you can still use Xcode 15 with KeyboardKit, KeyboardKit Pro requires Xcode 16.


## 💡 New ways to set up KeyboardKit!

This version lets you use a `KeyboardApp` to set up your keyboard extension, and separates setting up the keyboard from setting up the keyboard view.

You can now call `setup(for:)` or `setupPro(for:completion:)` in `viewDidLoad()` to set up a keyboard extension with a `KeyboardApp`, then use `setupKeyboardView(_:)` to set up a custom view.

This change means that you can set up KeyboardKit and KeyboardKit Pro earlier, and that setting up the view is identical for both SDKs. As a bonus, we can add more to the `KeyboardApp` over time.


## 🧪 Experiments

The two experimental modes for the next keyboard button seem to work well, and are now enabled by default, as a final test before making them permanent in KeyboardKit 9.

If you face any problems with this change, you can set each mode to `.classic` to revert back. Make sure to report what went wrong, so that it can be adjusted in good time before KeyboardKit 9.


## ✨ Features

This version adds a new `Keyboard.NumberPad` component that can be used to render a number pad. The `KeyboardView` will automatically render this when a textfield prefers it.

This version also adds `tryRegisterLocalizedCalloutService` to the `Keyboard.Services` type, to make it easier to register localized callout services, instead of having to cast the current service.

This version also adds `tryRegisterLocalizedLayoutService` to the `Keyboard.Services` type, to make it easier to register localized layout services as well.

This version adds more properties to `KeyboardApp`, to make it possible to set up even more with a single app value, both in the app and in the keyboard.

The `KeyboardView` now applies dynamic tap area sizes that are based on next character prediction, which means that more probable keys get a little larger tap area.


## 👑 KeyboardKit Pro

This version adds a new `KeyboardThemeContext`, which can be used to persist themes. It also adds a `KeyboardApp.ThemeScreen` that can be used as a theme picker.


## ⚡️ Shorthands

There are many new service shorthands, which makes it easier to refer to implementations. For instance, you can now use `.standard(...)` instead of `KeyboardAction.StandardHandler`.


## 🐛 Bug Fixes

This version protect against an undefined key error when using `KeyboardInputViewController` in an app. It also makes sure that replacing some services properly updates other.

This version also fixes a missing callout action for `i` on a Ukrainian keyboard.


## Conclusion

KeyboardKit 8.9 is a *massive* version that prepares the SDK for the upcoming 9.0. Make sure to test it thoroughly and get in touch if you have feedback or run into any problems.

For more information, see the [release notes]({{page.release}}) for KeyboardKit & [KeyboardKit Pro]({{page.release-pro}}).