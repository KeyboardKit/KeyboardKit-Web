---
title:  KeyboardKit 7.8
date:   2023-06-30 08:00:00 +0100
tags:   releases actions emojis gestures layout themes

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.8.0
---

KeyboardKit 7.8 is out! This release adds more action, style and theme features and fixes a couple of minor bugs and annoyances.


## Action handler improvements

The `KeyboardActionHandler` has a new `handle(_:)` function that lets you trigger the default action of a keyboard action without providing a gesture. This makes it easier to trigger actions.

The standard action handler also handles space drag better, where previous versions could start at an incorrect position, and the drag could move the input cursor in between the raw unicode values of combined emojis.


## Improved keyboard backgrounds

`KeyboardBackgroundStyle` has many new properties and builder functions, which removes the need (and usage) of the previously required `KeyboardBackgroundType`, which is now deprecated.


## Improved keyboard button styles

`KeyboardButtonStyle` now has separate border and shadow properties, which makes it easier to override a single parameter.


## Improved layout configurations

The standard `KeyboardLayoutConfiguration` configurations are now mutable, to let you affect the global defaults without a custom appearance. 

The height of each configuration is also extracted to separate properties, which makes it possible to easily check what height to use to match the keyboard keys.


## Toggle toolbar

The `ToggleToolbar` that was previously part of KeyboardKit Pro is now part of the core library. It can be used to create toolbars that toggle between two content views, using a toggle button.


## Theme changes

The KeyboardKit Pro theme engine has been improved. The `KeyboardThemeAppearance` is for instance open to inheritance and `KeyboardTheme` has new properties and capabilities.


## Conclusion

KeyboardKit 7.8 is a smaller, but important update that adds many new features and fixes a few bugs and minor annoyances. Have a look at the [release notes]({{page.release}}) for a full list of what's new.