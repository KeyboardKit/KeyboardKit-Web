---
title: Localization
description: KeyboardKit supports 76 locales
hero:
  emoji: 🌐
---

KeyboardKit makes it easy to create multi-language keyboards, and provides many language-specific features.


## Languages

KeyboardKit supports [{{site.locales.count}} languages](/locales), where each supported language defines locale-specific keyboard layouts, secondary callout actions, and localized strings and resources.

KeyboardKit also uses on-device operating system capabilities to provide additional features like [autocomplete](/features/autocomplete) and [dictation](/features/dictation). These features are however not available for all languages. See each article for more information.


## Autocomplete

KeyboardKit uses on-device system capabilities to provide [autocomplete](/features/autocomplete), which also powers autocorrections, predictions, and predictive typing.


## Dictation

KeyboardKit uses on-device system capabilities to implement [dictation](/features/dictation), which can be started in the keyboard, by opening the main app to start an audio bridge, then returning to the keyboard.


## Extensions

KeyboardKit extends ``Foundation.Locale`` with keyboard-specific functionality. For a full list of extensions, see the [online documentation](#documentation).


## Localization

The main `KeyboardView` and other keyboard features like keyboard layouts and callouts are all automatically localized when you change the selected locale. Other views allow you to inject custom localizations.


## Typing Directions

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to do anything to support RTL. Just change the locale and KeyboardKit will automatically adjusts the keyboard.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks localized callouts and layouts for every locale in your license. This lets you generate a fully localized keyboard with no additional code.

KeyboardKit Pro also unlocks additional diacritics and input engines for languages like Czech and Vietnamese.

[Pro]: /pro
