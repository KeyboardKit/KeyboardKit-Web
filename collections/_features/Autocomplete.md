---
title: Autocomplete
description: Autocomplete and autocorrect text
---

Autocomplete is an important part of the typing experience, where word suggestions can be shown as the user types, and autocorrections can automatically correct mistyped words.

## Autocomplete

KeyboardKit has autocomplete-related types and views, like the observable `AutocompleteContext`, auto-persisted `AutocompleteSettings`, `AutocompleteService` implementations, etc.

With autocomplete enabled, KeyboardKit will automatically show autocomplete suggestions, autocorrections, next word predictions, emojis, etc. above the keyboard:

<img alt="An autocomplete toolbar" src="{{page.assets}}autocomplete-toolbar.jpg" />


## Autocomplete Services

[KeyboardKit Pro](/pro) unlocks a `StandardAutocompleteService` that can autocomplete and autocorrect text, autocomplete emojis, perform next-word and next-character predictions, and much more.

The standard autocomplete service uses on-device capabilities provided by Apple to support these languages:

{{ site.data.locales-autocomplete | join: ", " }}

This list is provided by Apple's on-device tools, but we have found its capabilities lacking for some languages in this list, and that operating system updates may break previously working langauges.

To support more languages, you can subclass and customize `StandardAutocompleteService`, implement `AutocompleteService` from scratch, or use `KeyboardKitAutocompletePlugin` for more functionality.


## Next Word Prediction

KeyboardKit Pro unlocks ways to use Apple Intelligence and 3rd party tools like Claude and OpenAI to perform next word prediction. You can enable OpenAI and Claude with a single line of code.


## Next Character Prediction

KeyboardKit Pro unlocks ways to perform next character prediction, to predict which keys that are more likely to be pressed next. This is used to power other features, like predictive typing.


## Predictive Typing

KeyboardKit Pro can use next character prediction to provide "Predictive Typing" assistance, where the key tap area will be increased for more probable keys.