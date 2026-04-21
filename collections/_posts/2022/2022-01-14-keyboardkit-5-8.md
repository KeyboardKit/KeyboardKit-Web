---
title:  KeyboardKit 5.8 is out
date:   2022-01-14 12:00:00 +0100
tags:   releases localization input-sets callouts
---

KeyboardKit 5.8 is out! 🚀 It adds support for 9 new locales and renames a bunch of things in preparation for the upcoming 6.0.


## New locales

KeyboardKit 5.8 adds support for 9 new keyboards locales:

* 🇭🇷 Croatian
* 🇧🇪 Dutch (Belgium)
* 🇧🇪 French (Belgium)
* 🇨🇭 French (Switzerland)
* 🇦🇹 German (Austria)
* 🇨🇭 German (Switzerland)
* 🇬🇷 Greek
* 🇭🇺 Hungarian
* 🇸🇮 Slovenian

Implementing support for a Greek keyboard involved a lot of adjustments to the layout engine, since it looks a lot different

With these 9 new locales, KeyboardKit now covers most European languages. 5.8 will add even more locales to make it even more flexible.


## Renamings

Another big change in this version is that many types are renamed to shorter names. For instance:

* `KeyboardInputSetProvider` and all implementations and related properties have been renamed to use InputSetProvider.
* `SecondaryCalloutActionProvider` and all implementations and related properties have been renamed to use CalloutActionProvider.

This makes it less cumbersome to refer to these types, although the names now become a little less specific.