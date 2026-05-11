---
title:  KeyboardKit 9.4 is out
date:   2025-04-21 08:00:00 +0100
tags:   releases emojis layout localization

image-show: 0
image: /assets/versions/9_4.jpg
assets: /assets/blog/25/0421/

redirect_from: /blog/2025/04/18/keyboardkit-9-4-beta

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.4.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.4.0
---

KeyboardKit 9.4 is out, with support for Emoji Version 16, 4 new emoji languages, support for Pamiri Shughni, improved English autocorrections, and significant performance improvements.

![KeyboardKit header image]({{page.image}})


## Emoji Version 16

KeyboardKit 9.4 adds support for Emojis 16 and its 8 new emojis: 

# 🫩🫆🪾🫜🫟🪉🪏🇨🇶

These emojis can only be viewed in iOS 18.4, macOS 15.4, tvOS 18.4, watchOS 11.4 and visionOS 2.4, so if you don't see them above, you're on an older version. KeyboardKit will filter them out when it's used on an older platform, so users will not see upsupported emojis in the emoji keyboard.

## Emoji Localization

KeyboardKit 9.4 localizes emojis in French 🇫🇷, Italian 🇮🇹, Portuguese (Brazil) 🇧🇷, and Russian 🇷🇺 to now support 8 languages in total. All other languages will get the English translations.


## Localization 

KeyboardKit 9.4 adds support for Pamiri Shughni (Shughni Tajik), including localized resources and locale-specific keyboard layouts. This brings the number of supported locales to **73**.


## Autocorrect

KeyboardKit 9.4 improves local autocomplete by extending the autocorrect replacement dictionary. For instance, it adds more replacements like `wont` -> `won´t` that aren't covered by the local engine. 

These additions will lead to fewer typing errors in English, since more words are now autocorrected.


## Performance

KeyboardKit 9.4 improves performance by reducing the number of redraws per keypress, which in turn leads to fewer layout calculations. Initial tests show that this drastically improves performance, since fewer redraws lead to a smoother typing experience.


## Conclusion

KeyboardKit 9.4 adds new features, adjustments, and bug fixes. For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 