---
title:  KeyboardKit 9.0
date:   2024-12-02 08:00:00 +0100
tags:   releases

redirect_from: 
    - /blog/2024/11/08/keyboardkit-9-rc1
    - /blog/2024/11/12/keyboardkit-9-rc2
    - /blog/2024/11/20/keyboardkit-9-rc4
    - /blog/2024/11/21/keyboardkit-9-rc5

image: /assets/versions/9.jpg

tweet: https://x.com/keyboardkitsdk/status/1863516766111994035
toot:  https://techhub.social/@keyboardkit/113582539521352423

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.0.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.0.0
---

KeyboardKit 9.0 is finally out! 🚀 Let's take a look at all the new things that make KeyboardKit better than ever, and how to best upgrade from KeyboardKit 8 to KeyboardKit 9.


## TLDR;

Let's sum up the most important changes, in case you find this post too long:

KeyboardKit 9 targets `iOS 15`, `macOS 12`, `tvOS 15`, `watchOS 8`, and `visionOS 1`, removes lots of deprecated code, and simplifies many parts of the library.

KeyboardKit now supports both floating and collapsing a keyboard on iPad, and the keyboard type is decoupled from the case. Autocomplete lets you use 3rd party AI tools (Claude & OpenAI are first out) for next word prediction. Callouts are easier to use and look better than before. Dictation is a lot easier to use. Emoji is better localized and the emoji keyboard supports search & scrolling through categories. Haptic feedback is lighter when typing. Localization adds support for 🇦🇺 English (Australia) and 🇨🇦 English (Canada), bringing the number of supported locales up to `70`. There's so much in this release that even the TLDR; became too long to read.

Futhermore, KeyboardKit Pro now only requires a bundle ID for the main app, and can be used with as many keyboard extensions as you like within that app. Yearly Gold and Custom licenses can also use license files to avoid having to upgrade KeyboardKit version to upgrade their license.

Besides all the new features, KeyboardKit has been cleaned up to make things it a lot easier to use.


## KeyboardKit 9 Migration Guide

Follow these steps to migrate from KeyboardKit 8 to KeyboardKit 9:

- First upgrade to the last `8.9.6` version and fix all deprecation warnings.
- When you have fixed all warnings, upgrade to KeyboardKit `9.0.0`.
- Fix any migration deprecations to conform to its many architectural changes.
- When you have fixed all warnings, you can start using KeyboardKit 9. 
- You can now setup SPM to use the latest major version number, i.e. the latest `9.x.x` version. 

The legacy migrations will be removed in `9.1.0`, so always upgrade to `9.0.0` first, when migrating from KeyboardKit 8, before upgrading to the latest `9.x.x` version.



## KeyboardKit 9

KeyboardKit 9 targets `iOS 15`, `macOS 12`, `tvOS 15`, `watchOS 8`, and `visionOS 1`, removes deprecated code, and simplifies many parts of the library.


### 👑 Pro

KeyboardKit Pro can now be activated with a license file, which means that you will no longer have to upgrade KeyboardKit version to upgrade your license.

License files will be provided to all yearly Gold & Enterprise customers that prefer to use a license file instead of a binary encoded license key.


### 🧪 Experiments

The next keyboard button experiments have been made permanent, which should fix random bugs.

### ⌨️ Essentials

The `KeyboardContext` has a new `isKeyboardCollapsed` property that can collapse the keyboard, a new `keyboardCase` that decouples the keyboard type and case, and a new `isKeyboardFloating` property.

The `KeyboardView` now supports being used as a floating keyboard on iPad, which will render it as a phone keyboard. It also has a `collapsedView` that's displayed when the keyboard is collapsed.

### ⚙️ Services

The service name changes and refactoring was a great adjustment, but went a little too far. As such, we take a step back and add the service type to the name. The shorthands stay the same.

The new name for e.g. `KeyboardLayout.StandardService` is now `KeyboardLayout.StandardLayoutService`.

### 📱 App

The `KeyboardApp` can now define a custom next word prediction request, which makes KeyboardKit Pro automatically inject it into the autocomplete service.

The `KeyboardApp.SettingsScreen` now lets you customize each section with custom content, to make it easier to add more app-specific settings to your app.

### 💡 Autocomplete

The `AutocompleteService` now returns a `Autocomplete.ServiceResult` instead of a list of suggestions.

The `Autocomplete.Toolbar` now uses view builders to let you customize its content. The default views have been polished to look more native.

The `KeyboardInputController` now disables autocorrect instead of autocomplete if its keyboard type doesn't prefer autocomplete. The reason is that custom keyboards must have a top callout padding.

The `LocalAutocompleteService` lets you specify a next word prediction request, to let you integrate with 3rd party AI tools. First out is support for Claude and OpenAI.

### 🗯️ Callouts

The `Callouts` namespace has been renamed to `KeyboardCallout` and simplified to only use a single style and a single context. A single style is used by the `KeyboardStyleService` and `KeyboardTheme` too.

The `.calloutStyle` view modifier can thus be applied to `KeyboardView` now, to make it either use the service style or the environment one. This makes styling callouts even easier than before.

### 🎤 Dictation

The `Dictation` namespace is simplified to only use a single service that can handle all dictation. The new `DictationService` doesn't need a configuration. It uses keyboard state to set up its behavior.

### 😀 Emojis

Emoji localization has been drastically improved for English, and now supports Swedish localization.

The `.emojiKeyboardStyle` modifier takes a style builder instead of a style, to allow root level styling. This lets you apply the memory optimized style from the root view, if you need it.

The standard emoji styles no longer take an input toolbar display mode. You can instead use a new `.augmented(for:)` function if you need to adjust the style.

The `EmojiKeyboard` has been rebuilt from scratch, and now behaves more like the native keyboard, by scrolling through all categories. It also (finally) supports Emoji search.

### 🧩 Extensions

The `String` `.lastSentence` property now includes the last sentence, even if it's not ended.

### ⌨️ External Keyboard

The `ExternalKeyboardContext` has moved to the open-source library and added to `Keyboard.State`.

### 🔉 Feedback

The `Feedback` namespace has been renamed to `KeyboardFeedback`, and simplified quite a bit. The haptic feedback is also adjusted to be lighter when typing.

The `FeedbackContext` no longer has enabled configs, since its `settings` can now toggle feedback.

### 🏠 Host

The `Host` informaton has been moved to KeyboardKit Pro.

The `KeyboardHostApplication` struct has more information and even more pre-defined apps, and can now be opened with a `KeyboardActionHandler` and a SwiftUI `OpenURLAction`.

### 🇸🇪 Localization

This version adds support for 🇦🇺 English (Australia) and 🇨🇦 English (Canada), bringing the number of supported locales up to `70`.

The `KeyboardLocale` has been replaced with using the native `Locale` everywhere. This removes a lot of fiddling when handling locales in your keyboard.

### 🔣 Layout

An `InputSet` can now be created with device variations, and be device-specific resolved at runtime. While the old type was destructive, the new type keeps all original state.

The `KeyboardLayout` type is now a `struct` instead of a `class`, to better represent the value type it's meant to be. This change may require you to change from `let` to `var` when you modify a layout.

### 🎛️ Settings

Persistent settings have moved from the various contexts to nested `settings` types, to separate the context properties from settings.

### 🩺 Status

The `KeyboardStatusInspector` is now internal to avoid using it incorrectly. Use `KeyboardStatusContext` instead, which manages status information in a better way. 

### 📝 Text Input

The `KeyboardContext` is now responsible for the `textInputProxy`. The controller refers to this proxy, but the context owns it.

The KeyboardKit Pro input text components can therefore be setup with a `KeyboardContext`, and no longer need a controller instance.

### 🍭 Themes

The `KeyboardStyle.ThemeBasedStyleService` can now be created with a theme context, which makes it auto-update when the theme is changed.

### 🚨 Breaking Changes

There are breaking changes in this version, but most are handled by migration deprecations that will be removed in 9.1. Make sure to address any migration deprecation warnings you receive.

Some things that are not covered by migration deprecations are:

* All previously deprecated code has been removed.
* All previously mutable styles and configs are now computed.
* The dictation changes can't be migrated since a new service replaces the old ones.
* The `Autocomplete.Suggestion` additional info are now limited to string-based data.
* The `Autocomplete.LocalService` now requires a keyboard context for contextual info.
* The `KeyboardLayout` is now a struct, and must now be a `var` for you to customize it.
* The `KeyboardStyleService` and callout style view modifiers now only use the base style.
* The `StandardSpeechRecognizer` has been refactored, and must be updated for you to use it.

A problem that you may run into, is that the `KeyboardInputViewController` `setupKeyboardView(_ view: @autoclosure @escaping () -> Content)` is renamed to `setupKeyboardView(with:)` to remove the DocC ambiguity with the controller-based function. If you use this variant, just add an `with:` parameter.


## Conclusion

KeyboardKit 9 is a huge step forward, and makes using KeyboardKit easier than ever before. Many since long requested features are finally in place, and more will come in subsequent minor updates.

To give KeyboardKit 9 a try, use the `9.0.0` tag. For more info, see the [release]({{page.release}}) or [KeyboardKit Pro release]({{page.release-pro}}). Don't hesistate to reach out if you find bugs or have feedback.