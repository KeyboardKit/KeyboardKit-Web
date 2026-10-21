---
title: Localization
description: KeyboardKit supports 76 locales
hero:
  emoji: 🌐
---

KeyboardKit makes it easy to create multi-language keyboards, and provides many language-specific features.

The main `KeyboardView` and other features like keyboard layouts and callouts are all automatically localized when you change the selected locale.


## Languages

KeyboardKit supports [{{site.locales.count}} languages](/locales), where each supported language defines locale-specific keyboard layouts, secondary callout actions, and localized strings and resources.


## Autocomplete

KeyboardKit uses on-device system capabilities to provide [autocomplete](/features/autocomplete) for some languages, which is also used to power autocorrections, predictions, and predictive typing.


## Dictation

KeyboardKit uses on-device system capabilities to implement [dictation](/features/dictation) for some languages. A dictation session can be started in the keyboard, by opening the main app to initialize dictation, then returning to the keyboard.


## Diacritics

KeyboardKit support [diacritics](/features/essentials), which can be defined with Unicode combination marks or explicit replacement dictionaries. Some languages share diacritics like `.acute`, while languages like Khmer define their own.


## Extensions

KeyboardKit extends ``Foundation.Locale`` with keyboard-specific functionality. For a full list of extensions, see the [online documentation](#documentation).


## Input Engines

KeyboardKit has language-specific input engines for some languages, like `Korean` (Hangul), `Kurdish` (key replacements), and `Vietnamese` (TELEX, VIQR, and VNI).


## Text Directions

KeyboardKit supports LTR (Left-To-Right) and RTL locales. You don't need to do anything to support RTL. Just change the locale and KeyboardKit will automatically adjusts the keyboard.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks localized keyboard layouts and callouts for every locale in your license, which lets you create fully localized keyboards with no additional code. It also unlocks language-specific tools for some locales.

[Pro]: /pro
