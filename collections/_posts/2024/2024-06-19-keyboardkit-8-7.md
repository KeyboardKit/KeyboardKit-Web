---
title:  KeyboardKit 8.7
date:   2024-06-19 08:00:00 +0100
tags:   releases essentials autocomplete dictation feedback layout settings pro

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.7.0
---

KeyboardKit 8.7 is out. This is a **massive** update that improves autocomplete, adds next character prediction & persistent settings, improves the design and layout handling, and much, much more.


## Improved Autocomplete

KeyboardKit 8.7 greatly improves the autocomplete behavior and makes it possible to register your own custom autocorrections for all keyboard locales.

First of all, `AutocompleteProvider` is renamed to `AutocompleteService` to better reflect the increased set of responsibilities that this type will get.

The `Autocomplete.LocalService` now returns proper unknown statuses, which the action handler will then use to ask the service to learn all unknown suggestions that the user applies.

You can toggle this on and off with the new `isAutoLearnEnabled` property in `AutocompleteContext`.

The `AutocompleteContext` also has a new `suggestionsDisplayCount` property that is used to cap the number of suggestions that are returned by the `suggestions` property.

The `AutocompleteContext` also has a new `autocorrectDictionary` property that can be used to define custom autocorrections for all supported locales, to work around any limitations you find.

These new way to learn unknown suggestions and customize autocorrect will hopefully solve many frustrations involved with autocomplete, where the provider will behave better over time.


## Improved Autocomplete Disabling

The `KeyboardInputViewController` will now check more places before performing autocomplete. The `KeyboardContext` `prefersAutocomplete` will now be used as well, as will the native keyboard type.

This change means that autocomplete will for instance be properly disabled when you enter URLs and email addresses, which aligns well with the native keyboard behavior.


## Next Character Prediction

The `AutocompleteService` protocol has a brand new `nextCharacterPrediction` function, which is now implemented by the KeyboardKit Pro `LocalService`.

Next character prediction lets you get percentage-based probabilities for which characters keys that are most likely to be tapped next by the user. 

Next character prediction can be used to implement dynamic tap areas, where the input key tap areas can vary based on the probability that a key may be tapped next.

Dynamic tap areas will be implemented in a future version of KeyboardKit.


## New Settings Types

This version adds new, observable `AutocompleteSettings`, `DictationSettings`, `FeedbackSettings`, and `Keyboard.Settings` types, which can be used to manage various settings.

`KeyboardSettings` is now an observable class with general settings. `KeyboardInputViewController` also has a new `settings` property, like it has for `services` and `state`.

Unlike the context classes, these settings types will persist changes, and can sync changes between the main app and the keyboard. KeyboardKit will sync any settings changes to its contexts.


## Sentence Configurations

`KeyboardBehavior` has a new `endSentenceText` property, which can customize how sentences should be ended. This makes it easy to configure the library for other locales, like Simplified Chinese.


## Native Keyboard Types

This version fixes a bug, where the native keyboard type was synced before becoming available. This version improves this, and also renders a correct layout for the `URL` and `webSearch` types.


## Native Font Support

The `KeyboardStyle.StandardProvider` and `Keyboard.ButtonStyle` now both supports specifying native `Fonts`, instead of just the `KeyboardFont`.

This makes it possible to more easily define a custom font for your designs, using the native APIs.


## Host Application Improvement

The KeyboardKit Pro `KeyboardHostApplication` type is extended with more applications, and has a new `url` property that can be used to open each app.

This makes it even easier to interact with many well-known apps, like LinkedIn, WhatsApp, etc.


## Conclusion

KeyboardKit 8.7 is another huge release, that adds many new features and improves many things. Please give it a try and let us know what you think.

For more details, see the [release notes]({{page.release}}).