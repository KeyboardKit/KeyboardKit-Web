---
title: Autocomplete
description: Autocomplete and autocorrect text
---

Autocomplete is an important part of the typing experience, where word suggestions can be shown as the user types, and autocorrections can automatically correct mistyped words.

## Autocomplete

KeyboardKit can automatically show autocomplete suggestions, autocorrections, next word predictions, emojis, etc. above the keyboard:

<img alt="An autocomplete toolbar" src="{{page.assets}}autocomplete-toolbar.jpg" />

KeyboardKit has autocomplete-related types and views, like the observable `AutocompleteContext`, auto-persisted `AutocompleteSettings`, `AutocompleteService` implementations, etc.


## Services

[KeyboardKit Pro](/pro) unlocks a `StandardAutocompleteService` that can autocomplete and autocorrect text, autocomplete emojis, perform next-word and next-character predictions, and much more.

The standard autocomplete service uses on-device capabilities provided by Apple to support these languages:

{{ site.data.locales-autocomplete | join: ", " }}

This list is provided by Apple's on-device tools, but we have found its capabilities lacking for some languages in this list, and that operating system updates may break previously working langauges.

KeyboardKit Pro also unlocks an experimental [Langlot](/partners) engine that provides fast, accurate on-device predictions.


## Predictions

KeyboardKit Pro unlocks ways to perform next word and next character predictions. Next character prediction is used to power other features, like predictive typing.

Predictive typing assistance will increase the tap area of more probable keys, to reduce the risk for mistakes.