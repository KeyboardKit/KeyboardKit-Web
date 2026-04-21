---
title:  KeyboardKit 9.3 is out
date:   2025-03-09 08:00:00 +0100
tags:   releases emojis layout localization settings

image-show: 0
image: /assets/versions/9_3.jpg
assets: /assets/blog/25/0309/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.3.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.3.0
---

KeyboardKit 9.3 is out! This minor update adds support for Vietnamese TELEX, VIQR and VNI, makes many locales support Dvorak layouts, and adds support for emoji colon search.

![KeyboardKit header image]({{page.image}})


## Vietnamese (Beta)

KeyboardKit 9.3 adds support for Vietnamese TELEX, VIQR and VNI, with each supporting QWERTY, QWERTZ & AZERTY. This builds on new diacritics and a new `KeyboardInput.Vietnamese` namespace.

![A screenshot of Vietnamese layouts]({{page.assets}}vietnamese.jpg)

Since this is in beta, please give it a try and [report any bugs you find](https://github.com/KeyboardKit/KeyboardKit/issues/894) or improvements to be made.


## Dvorak

This version adds Dvorak support to all locales that support QWERTY, QWERTZ, AZERTY & Colemak.

![A screenshot of Dvorak layout on iPhone]({{page.assets}}dvorak.jpg){:class="medium"}

Dvorak is supported by: Catalan, Croatian, Dutch, Dutch (Belgium), English (All), Estonian, Filipino, Hungarian, Indonesian, Irish, Italian, Latvian, Malay, Polish, Portuguese, Portuguese (Brazil), Romanian, Serbian (Latin), Slovenian, Swahili, Uzbek, Welsh


## Emoji Autocomplete

KeyboardKit Pro 9.3 adds support for emoji colon search, which integrates with local autocomplete:

![A screenshot of emoji colon search]({{page.assets}}emojis.jpg){:class="medium"}

Starting a word with colon will provide you with emoji search results in the autocomplete toolbar. This feature can be toggled on and off with the autocomplete settings.


## Action Callout Improvements

This version improves the action callout by requiring less swiping and making the callout items less wide when too many are shown to fit the screen when using the button frame width.

The callout also handles swipe gestures on RTL devices properly, which was not the case before.


## Easier Setup

This version makes KeyboardKit and KeyboardKit Pro use the same setup function signature, which helps avoiding setup bugs when upgrading from KeyboardKit to KeyboardKit Pro.

Instead of KeyboardKit's `setup(for:)` and KeyboardKit Pro's `setupPro(for:completion:)`, both have a `setup(for:completion:)` with a slightly different completion signature.


## Race Condition Bug Fix

This version fixes a race condition that could cause a keyboard extension's keyboard settings to be initializer before the App Group syncing was initialized.



## Conclusion

KeyboardKit 9.3 adds support for Vietnamese (TELEX, VIQR, and VNI), Dvorak layout, and new emoji autocomplete support. For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 