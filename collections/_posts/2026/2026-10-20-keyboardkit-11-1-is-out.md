---
title:  KeyboardKit 11.1 is out
date:   2026-10-20 06:00:00 +0100
tags:   releases autocomplete callouts emojis layout localization plugins settings

assets: /assets/blog/26/1020/
image: /assets/versions/11_1.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/11.1.0
---

KeyboardKit 11.1 is out! This version adds support for 6 new languages, new layout and design capabilities for the iPhone Duo, support for split keyboard, and much more.

![KeyboardKit 11.1 Release Banner]({{page.image}})


## 🌐 New Languages

KeyboardKit 11.1 adds support for `Khmer`, `Korean`, `Luxembourgish`, `Thai`, `Xhosa`, and `Yoruba`.

Khmer involved extending the diacritic capabilites, while Korean involved implementing a new Hangul engine. 

<div class="grid col2">
    <img src="{{page.assets}}khmer.jpg" alt="A Khmer keyboard" />
    <img src="{{page.assets}}korean.jpg" alt="A Korean keyboard" />
</div>

Thai uses two brand new layouts - `.thai4Row` and `.thai5Row` - and involved extending the action callout to be able to present its many signs in two rows.

<div class="grid col2">
    <img src="{{page.assets}}thai-5row.jpg" alt="A Thai 5-Row keyboard" />
    <img src="{{page.assets}}thai-4row.jpg" alt="A Thai 4-Row keyboard" />
</div>

Adding support for these 6 new locales means that KeyboardKit now supports **{{site.locales.count}}** locales!


## 📱 iPhone Duo Support

KeyboardKit 11.1 can detect iPhone Duo devices, and will adjust the keyboard layout and design to match the native Duo experience, both when the device is closed and open.

<div class="grid col2">
    <img src="{{page.assets}}duo-closed-portrait.jpg" alt="KeyboardKit on a closed Duo in portrait" />
    <img src="{{page.assets}}duo-closed-landscape.jpg" alt="KeyboardKit on a closed Duo in landscape" />
</div>

Supporting iPhone Duo also involved implementing support for split keyboard, which is automatically enabled in the native keyboard when the Duo is folded in landscape. 

As mentioned in an earlier post, keyboard extensions still can't read the hinge state, but we have added support for split keyboard to allow users to manually enable split mode when needed. See more in the next section.

The new `Keyboard.DuoDetector` is used by `KeyboardContext` to set a `isDuoDevice` property, which KeyboardKit uses to apply Duo-specific layouts & styles. You can use this to perform your own customizations.


## ⌨️ Split Keyboard

KeyboardKit 11.1 replaces the previously individual, but mutually exclusive keyboard placements with a single placement, which also adds support for split keyboard to all devices.

<div class="grid col2">
    <img src="{{page.assets}}duo-open-standard.jpg" alt="KeyboardKit on a open Duo in standard mode" />
    <img src="{{page.assets}}duo-open-split.jpg" alt="KeyboardKit on a open Duo in split mode" />
</div>

Large screens like iPad and open iPhone Duo supports split screen in all orientations, while small screens only support it in landscape.

The `KeyboardContext` and `KeyboardSettings` has new placement properties and functions, and there are new placement menus and pickers. The `KeyboardView` also adds a placement menu to the dismiss key.


## 💡 Autocomplete

KeyboardKit 11.1 adds a new, experimental `Langlot` autocomplete engine to the autocomplete plugin. This engine currently supports English, Italian, and Swedish, and requires a separate license key to be used.

`KeyboardInputViewController` and `KeyboardAppView` can now inject an autocomplete engine. The `AutocompleteEngine` protocol is merged with the download protocol to make it easier to define an engine.

There's a new `AutocompleteEngineDownloadMenu`, which will be applied to all supported languages in the `KeyboardLanguageSettingsScreen` if an engine with download support is injected. There is a new engine collection type that can be used to aggregate multiple engines into one.

Finally, there's a new `isLexiconEnabled` setting that can be used to disable system lexicon suggestions. The standard engine also handles lexicon casing better, to avoid strange capitalization bugs.


## 💬 Callouts

Callout actions can now be configured to use multiple rows, which allows the action callout to grow upwards to give room for more actions.

<img src="{{page.assets}}thai-4row.jpg" alt="A Thai 4-Row keyboard" />


## 😀 Emojis

There is a new `EmojiSettingsScreen`, as well as a new `isEmojiSwitcherEnabled` setting that can be used to remove the emoji keyboard switcher from the keyboard.


## ⚙️ Settings

The `KeyboardSettingsScreen` has a new "keyboard placement" picker that replaces the old "one-handed keyboard" picker, since the new keyboard placement concept replaces the old dock edges.

The `KeyboardLocaleSettingsScreen` is cleaned up, and now adds new locales in an "add more languages" sheet, which also suggests languages based on the current locale.


## 🐛 Bug Fixes

This version fixes autocomplete bugs with contact names, text replacement casing, and spaces after the cursor. It also fixes a Vietnamese input problem, and an initial input case flicker.


## Conclusion

KeyboardKit 11.1 is a big release, with new languages, new iPhone Duo support, new keyboard placements, and a new autocomplete engine. We can't wait to hear what you think.

Don't hesitate to [reach out]({{site.urls.email}}) with your feedback, and see the [release notes]({{page.release}}) for a full list of changes.
