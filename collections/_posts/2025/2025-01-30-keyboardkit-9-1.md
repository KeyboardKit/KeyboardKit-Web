---
title:  KeyboardKit 9.1 is out
date:   2025-01-30 08:00:00 +0100
tags:   releases essentials app emojis layout ui

redirect_from: /blog/2025/01/27/keyboardkit-9-1-rc

image-show: 0
image: /assets/versions/9_1.jpg
assets: /assets/blog/25/0130/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.1.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.1.0
---

KeyboardKit 9.1 is out, with many updates! 🚀 Let's take a look the new features, adjustments and bug fixes that this version brings to KeyboardKit and KeyboardKit Pro.

![KeyboardKit header image]({{page.image}})


## Important Migration Changes

This version removes the KeyboardKit 8 migration support! Migrate to the last 9.0 version before upgrading from KeyboardKit 8 to 9.1 or later, to ensure a smooth transition.


## Easier to set up keyboard app information

This version makes it easier to set up a `KeyboardApp` for your app, by removing the need to specify a `bundleId`. It is no longer used internally, so the app doesn't need it anymore.


## Support for keyboard docking

This version makes it possible to dock your keyboard to the leading or trailing edge of the screen, to simplify one handed typing on iPhone.

![A screenshot of a docked KeyboardView]({{page.assets}}screenshot-dock.png){:class="medium"}

To make this work, the `Keyboard.Settings` class has a new, auto-persisted `keyboardDockEdge` setting, that can be set to any horizontal edge to enable docking.

KeyboardKit Pro 9.2 will add a new dock section to the `KeyboardApp.SettingsScreen`, which means that you will not have to write any code to support this feature.


## Add a locale switcher to the spacebar

This version makes it possible to add a locale switcher to the trailing edge of the spacebar. This lets you mimic the iOS 18 multi-locale mode, but with a different behavior.

![A screenshot of a docked KeyboardView]({{page.assets}}screenshot-spacebar.png){:class="medium"}

To make this work, `SpaceLongPressBehavior` has a new `.moveInputCursorWithLocaleSwitcher`, which can be used to use the spacebar to move the input cursor AND switch locale.

KeyboardKit Pro 9.2 will move `spaceLongPressBehavior` from `KeyboardContext` to `Keyboard.Settings`, and convert this to an auto-persisted user setting. 

KeyboardKit Pro 9.2 will also add a new section to the `KeyboardApp.SettingsScreen`, which means that you will not have to write any code to support this feature.


## Emoji keyboard improvements

The KeyboardKit Pro `EmojiKeyboard` has been improved, and now renders even better on different device types. It also uses environment injected styles to greater extent.

From now on, `KeyboardView` will automatically adjust the emoji keyboard style to add an additional row if an input toolbar is added. You no longer have to do this yourself.

Finally, all `Emoji` and `Emoji.Category` values have been localized in Spanish. This will improve emoji searches in Spanish, and make the keyboard display the Spanish titles.


## URL and e-mail keyboard improvements

The iPhone and iPad-specific layout services will now render the `.email` and `.url` keyboard types better, by adjusting the keys and key size for these keyboard types.


## Model improvements

Even though KeyboardKit still uses Swift 5.9, it starts preparing for the future Swift 6 transition by making its data models conform to more protocols, like `Codable` and `Sendable`.


## Conclusion

KeyboardKit 9.1 contains many new features and adjustments that makes KeyboardKit even more capable. For more info, see the [release]({{page.release}}) or [KeyboardKit Pro release]({{page.release-pro}}). 