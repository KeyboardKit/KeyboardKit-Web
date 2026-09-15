---
title:  Autocomplete changes in iOS 27
date:   2026-09-15 07:00:00 +0100
tags:   autocomplete apple-bugs

assets: /assets/blog/26/0915/
image: /assets/blog/26/0915/image-autocomplete.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/11.0-b.1
---

iOS 27 is finally out, and it affects the tool we use to implement autocomplete in KeyboardKit. The tool supports 5 brand new locales, improves 2 locales, changes many others...and sadly breaks 3 locales.


## Background

KeyboardKit's autocomplete engine is built on top of Apple's on-device technologies, which means that the set of languages that it can autocomplete is determined by the OS, not by KeyboardKit. 

When Apple adds or removes languages from the on-device tools, KeyboardKit's autocomplete changes with it. This is mostly a good thing, since KeyboardKit evolves with the platform, but it also means that things can break.

iOS 27 makes a few such changes, both good and bad, that affects KeyboardKit without any changes on our end.


## New Locales

iOS 27 adds support for the following locales:

* 🇵🇭 `en_PH` - English (Philippines)
* 🇯🇵 `ja_JP` - Japanese
* 🇰🇷 `ko_KR` - Korean
* 🇨🇳 `zh_Hans` - Chinese (Simplified)
* 🇹🇼 `zh_Hant` - Chinese (Traditional)

Japanese, Korean, and Chinese are big additions, since these are some of the most requested languages that we are yet to support. While autocomplete is not the same as a full input support, it's a big step forward.


## Improved Locales

iOS 27 improves autocomplete for the following locales:

* 🇧🇬 `bg` - Bulgarian
* 🇮🇱 `he_IL` - Hebrew (Israel)

While these locales were supported before, we find suggestions & corrections to be noticeably better in iOS 27.


## Broken Locales

Unfortunately, iOS 27 breaks autocomplete for the following locales:

* 🇬🇷 `el` - Greek
* 🇭🇺 `hu` - Hungarian
* 🇮🇸 `is` - Icelandic

These languages still work in iOS 26 and earlier, but no longer returns any suggestions in iOS 27. Since this is a system change, there's nothing KeyboardKit can do to restore the support, other than to report it to Apple.

If your keyboard targets any of these languages, you may want to verify how your keyboard behaves in iOS 27, and consider a remote autocomplete service or a custom `AutocompleteService` as a fallback.


## Conclusion

Since KeyboardKit's local autocomplete relies on the system text checker, the language support keeps changing with each new iOS version. This means things will improve over time, but that things may also break.

If you notice any other changes in iOS 27, or have any feedback on the [KeyboardKit 11 beta]({{page.release}}), please [reach out]({{site.urls.email}}).
