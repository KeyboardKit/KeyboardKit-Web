---
title: Localization
description: KeyboardKit supports 76 locales
hero:
  emoji: 🌐
---

KeyboardKit makes it easy to create multi-language keyboards, and provides many locale-augmented features.


## Locales

KeyboardKit supports [{{site.locales.count}} languages (locales)](/locales).

{{ site.locales.flags }}

Each supported language has keyboard-specific information and capabilities, and localized strings that can be translated with the ``KKL10n`` enum.


## Extensions

KeyboardKit extends ``Foundation.Locale`` with keyboard-specific functionality. For a full list of extensions, see the [online documentation](#documentation).


## Typing Directions

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to do anything to support RTL. Just change the locale and KeyboardKit will automatically adjusts the keyboard.


## View Localization

The main `KeyboardView` and other keyboard features like layouts and callouts are all automatically localized when you change the selected locale with the main `KeyboardContext`.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks localized callouts and layouts for every locale in your license. This lets you generate a fully localized keyboard with no additional code.

You can use the `Keyboard.LocaleSettingsScreen` to let users pick which locales to add to a keyboard.

<img src="{{page.assets}}keyboard-localesettingsscreen.jpg" width=450 />

KeyboardKit Pro also unlocks additional diacritics and input engines for languages like Czech and Vietnamese.

[Pro]: /pro
