---
title: Autocomplete
description: Autocomplete and autocorrect text
hero:
  emoji: 💡
---

Autocomplete is an important part of the typing experience, where word suggestions can be shown as the user types, and autocorrections can automatically correct mistyped words.

## Autocomplete

KeyboardKit has an ``Autocomplete`` namespace that contains autocomplete-related types and views, like the observable `AutocompleteContext`, auto-persisted `AutocompleteSettings`, `AutocompleteService` implementations, etc.

With autocomplete enabled, KeyboardKit will automatically show autocomplete suggestions, autocorrections, next word predictions, emojis, etc. above the keyboard:

<img alt="An autocomplete toolbar" src="{{page.assets}}autocomplete-toolbar.jpg" />


## Autocomplete Services

You must use KeyboardKit Pro to unlock an `AutocompleteService` that can autocomplete the typed text and perform predictions, or implement a custom service from scratch.

The `StandardAutocompleteService` that is unlocked by KeyboardKit Pro will autocomplete typed text, and perform various predictions, like next character prediction.


## Next Word Prediction

KeyboardKit Pro unlocks ways to use Apple Intelligence and 3rd party tools like Claude and OpenAI to perform next word prediction. You can enable OpenAI and Claude with a single line of code.


## Next Character Prediction

KeyboardKit Pro can use autocomplete to perform next character prediction, to predict which keys that are more likely to be pressed next.


## Predictive Typing

KeyboardKit Pro can use next character prediction to enable "Predictive Typing", where the key tap area is increased for more probable keys.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks local autocomplete for many of the [{{site.locales.count}} supported languages](/locales), remote autocomplete capabilities that can integrate with any remote API, etc.






[Pro]: /pro
