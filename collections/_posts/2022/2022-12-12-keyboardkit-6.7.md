---
title:  KeyboardKit 6.7 is out
date:   2022-12-12 08:00:00 +0100
tags:   releases emojis views

pro:    /pro

release-notes: https://github.com/KeyboardKit/KeyboardKit/releases/tag/6.7.0
---

KeyboardKit 6.7 is out, with a bunch of new emoji capabilities as well as various adjustments.


## New emoji capabilities

KeyboardKit 6.7 lays the foundation for localizing emojis. This will be a community effort, since it involves 50+ different languages. The library docs have information on how to contribute.

With the new localization capabilities, KeyboardKit can now provide localized names for all emojis. This is used by the new emoji search capabilities, which will match emojis both on localized name and unicode identifier. This will make it possible to later add a search bar to the emoji keyboards.

While working on these features, it turned out that most flag emojis had invalid unicode names. This has been fixed with a unicode name override, which will be used by the localizations as well.


## Improved view handling

The internal `KeyboardRootView` used to apply an explicit ID to the keyboard. This ID is no longer needed and has been removed, which also fixed the bug that requires us to observe the keyboard context in order for a `SystemKeyboard` to refresh.


## Conclusion

KeyboardKit 6.7 builds upon many news introduced in 6.6, and fixes some long-lived bugs. Other than that, see the [release notes]({{page.release-notes}}) for more details about this release.