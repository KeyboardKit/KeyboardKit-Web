---
title:  KeyboardKit 7.5
date:   2023-05-01 08:00:00 +0100
tags:   releases dictation styling themes

tweet:  https://twitter.com/GetKeyboardKit/status/1653131006298169376?s=20
toot:   https://techhub.social/@keyboardkit/110295262500485857

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.5.0
---

KeyboardKit 7.5 is out! It improves the dictation and theme engines and makes them easier to use. It also greatly improves the way KeyboardKit handles locales. It now correctly changes the primary language, which affects text direction, spellchecking and more.


## Important information about this update

This version adds a mandatory `id` to `KeyboardTheme`, which makes it possible to refer to themes by reference, which is required for features like favoriting and selection. While it's not mandatory to specify an id when creating a theme, it is a mandatory property, which may cause some side-effects if you've been persisting custom themes.

If you have persisted custom themes in your app, the addition of this ID will cause decoding to fail. Please reach out if this affects you, and failure handling will be added to handle any missing IDs.


## Dictation improvements

KeyboardKit 7.5 makes dictation a lot easier to use than before. The keyboard controller now has dictation handling, which the standard action handler will now use to correctly handle the dictation action, which was currently not doing anything.

All you have to do to get dictation to work now, is to configure the required app group and deep link, then setup the keyboard's dictation context with your app-specific configuration, add the dictation view modifier to the app's root view. If you then add a dictation button anywhere within your keyboard, it will automatically perform dictation when it's tapped.


## Theme improvements

KeyboardKit 7.5 adds identification capabilities to the theme model. Since themes allow for being combined, tweaked etc. all pre-defiend themes and their style variations come with fixed IDs as well as new functions to copy themes and styles in a way that generate new, unique IDs.


## Locale improvements

KeyboardKit 7.5 drastically improves how locales are handled. When you now select a new locale, it will change the primary language of the keyboard extension, which wasn't done before. This will automatically affect things like text direction, spellchecking etc. so this is a small change that will result in noticable improvements in your keyboards.


## Conclusion

KeyboardKit 7.5 improves dictation, themes and locale handling. There are also many smaller additions, improvements and bug fixes. For a complete list of changes, see the [release notes]({{page.release}}) and please share any feedback you may have.