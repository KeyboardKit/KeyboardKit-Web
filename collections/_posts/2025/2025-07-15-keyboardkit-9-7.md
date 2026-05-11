---
title:  KeyboardKit 9.7 is out
date:   2025-07-14 06:00:00 +0100
tags:   releases styling localization

image-show: 0
image: /assets/versions/9_7.jpg
assets: /assets/blog/25/0715/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.7.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.7.0

bsky: https://bsky.app/profile/keyboardkit.bsky.social/post/3ltzts76i7c2r
toot: https://techhub.social/@keyboardkit/114859371001025256
---

KeyboardKit 9.7 is out! This version reverts some previous keyboard action deprecations, adds new emoji features, and fixes some bugs.

![Blog header image]({{page.image}})


## Reverted Deprecations

After some developer feedback, this update reverts some deprecations and moves standard value builders back to the `KeyboardAction` type.

The last versions move standard value builders from `KeyboardAction` to each value type. So instead of `KeyboardAction.standardButtonStyle(for:)` the standard `Keyboard.ButtonStyle` builder was moved to `Keyboard.ButtonStyle` and renamed to `standard(for:context:)`.

The idea with this was to attach standard value builders to each value type, to make them easier to find and to enable shorthands, where you could just return `.standard(...)` for each type. 

However, this made it a lot harder to work with keyboard styling, since the varioys parts that make up a complete `Keyboard.ButtonStyle` got scattered throughout the library. By moving the builders back to `KeyboardAction`, value builders are grouped together, which makes it easier to handle style customizations.


## Emoji Utilities

KeyboardKit 9.7 adds new `EmojiContext` and `EmojiSettings` types, which are used by the standard action handler to register tapped emojis, and the `EmojiKeyboard` to display the last used skin tone.

![Emoji Keyboard]({{page.assets}}emoji-keyboard.jpg)


## Autocomplete Toolbar Improvements

KeyboardKit 9.7 improves the `Autocomplete.ToolbarItem` ny automatically wrapping it in a scroll view if it's too long to fit the item's bounding area.

![Autocomplete Toolbar]({{page.assets}}autocomplete-toolbar.jpg)

The scroll view will add a gradient mask to fade the edges and indigate that the text can be scrolled.


## Conclusion

KeyboardKit 9.7 simplifies action style customizations, adds new emoji capabilities, and improves the emoji keyboard and autocomplete toolbar. 

For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 