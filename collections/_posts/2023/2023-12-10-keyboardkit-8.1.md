---
title:  KeyboardKit 8.1
date:   2023-12-10 08:00:00 +0100
tags:   releases autocomplete localization 

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.1.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.1.0

tweet:  https://x.com/GetKeyboardKit/status/1733940281404182620?s=20
toot:   https://techhub.social/@keyboardkit/111557907679669752
---

KeyboardKit 8.1 is out, with some autocomplete and localization improvements. Pro users will also be able to choose language at setup, instead of being bound to the license. Let's take a look.


## Removed migration support

KeyboardKit 8.1 removes the the temporary migration guides that were added to help migrating to KeyboardKit 8 from KeyboardKit 7, as previously communicated.

This brings the public API to its intended state, with a much smaller surface area that is much easier to overview, compared to the pretty large one in KeyboardKit 7.


## Autocomplete improvements

KeyboardKit 8.1 adds a much requested feature, and now lets you disable autocorrect. Just set the new `isAutocorrectDisabled` property in `AutocompleteContext` to `false`, to disable autocorrect while keeping autocomplete enabled. The context can disable autocomplete as well.

This version also makes `SystemKeyboard` support the native `autocorrectionDisabled` view modifier, to automatically disable autocorrect if that modifier is applied.


## Localization improvements

KeyboardKit 8.1 makes it easier to add and replace any localized services in the standard layout and callout action providers, using the new `registerLocalizedProvider` function. This is powered by new `LocaleDictionary` capabilities that make it possible to adjust the nested dictionary.


## 👑 Pro adjustments

KeyboardKit Pro 8.1 lets Pro users specify locales when calling `setupPro` or registering a license key, instead of having to decide this when purchasing the license. This is a huge improvement, that lets customers change locales without having to adjust their license.

Since locales are now specified with code instead of when purchasing a license, the text field will be removed from the Gumroad purchase screen. Existing customers will default to their purchase info, but can override it with this new way of specifying locales.

Locales can be changed at any time in debug mode, and once for each new version that's submitted to the App Store. The number of locales will be capped to the license tier, which doesn't change.


## Conclusion

KeyboardKit 8.1 adds some since long requested features and makes it a lot easier for Pro users to change their locales, in case they change their mind after signing up for license.

Please see the [release notes]({{page.release}}) for a KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}) for a full list of changes and don't hesitate to reach out if you have any questions.