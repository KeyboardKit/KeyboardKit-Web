---
title:  KeyboardKit 8.6
date:   2024-05-18 08:00:00 +0100
tags:   releases essentials actions callouts host layout localization pro

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.6
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.6
---

KeyboardKit 8.6 is out. This is a HUGE update that adds 5 new locales, support for diacritics, makes it easier to identify the host application, improves autocomplete and many layouts, and much more.


## New locales

KeyboardKit 8.6 adds support for French (Canada), Norwegian (Nynorsk), Spanish (Latin America), Spanish (Mexico), and Welsh. This brings the number of supported locales to **68**.


## Diacritics

This new version also brings brand new support for diacritcs, which lets you replace the previously typed character with a diacritic variant.

This new feature is powered by the new `Keyboard.Diacritic`, the new `KeyboardAction.diacritic` and the new `insertDiacritic(_:)` function in `KeyboardController` & `UITextDocumentProxy`.


## Layout updates

This version adjusts some layout inconsistencies for some KeyboardKit Pro locales, and makes all keyboard locales use the new iPad Pro keyboard layout. 


## Autocomplete

This version changes the default autocomplete behavior, by making `KeyboardInputViewController` only use the pre-cursor part of the current word, instead of the full word. 

This is how the native keyboard behaves, so this should make the behavior more consistent when using KeyboardKit-based keyboards.


## Pro improvements

KeyboardKit 8.6 makes KeyboardKit Pro no longer overwrite custom services that are set before registering a license key. This means that you can now apply custom services at any time.

KeyboardKit Pro also reduces load times and memory usage, by lazily resolving localized services when needed, instead of when registering a license key.

KeyboardKit Pro also adds a brand new `HostApplication` that lets you easily identify which of many popular apps that are currently using the keyboard. This is available to all Gold licenses.

To check for the host aplication, you can use the input controller's new `hostApplication` property.


## Misc. improvements

Other than this, the `KeyboardLayout` and `KeyboardLayout.Item` are extended with more functionality, `KeyboardLocale` has new locale-based features, and `Keyboard.ToggleToolbar` supports bindings.


## Conclusion

KeyboardKit 8.6 is another huge release, that adds many new features and improves many things.

Please give the new 8.6 version a try and report if anything seems to be off. Also see the [release notes]({{page.release}}) for a KeyboardKit & [KeyboardKit Pro]({{page.release-pro}}) for more info.