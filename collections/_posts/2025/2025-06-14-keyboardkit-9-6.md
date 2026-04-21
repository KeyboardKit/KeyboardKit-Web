---
title:  KeyboardKit 9.6 is out
date:   2025-06-14 06:00:00 +0100
tags:   releases styling localization

image-show: 0
image: /assets/versions/9_6.jpg
assets: /assets/blog/25/0614/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.6.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.6.0

bsky: https://bsky.app/profile/keyboardkit.bsky.social/post/3lrkkcayba22q
toot: https://techhub.social/@keyboardkit/114680807171136383
---

KeyboardKit 9.6 is out, with new standard value builders, two new supported locales and some bug fixes and minor tweaks.

![Blog header image]({{page.image}})


## Value Builders

KeyboardKit 9.6 deprecates the old `KeyboardAction` extensions for building standard button styles, and moves these standard value builders to their related type.

This means that instead of `KeyboardAction` having a `standardButtonStyle(for:isPressed:)`, this builder becomes `Keyboard.ButtonStyle.standard(for:action:isPressed)`.

Other types have similar builders. `Color`, `KeyboardFont`, and some keyboard views all have standard builders for a context and action.

This change will make it easier to find the standard value builders, since they will now be provided extensions to the related type, instead of to one of the argument types.


## Localization

KeyboardKit 9.6 adds support for 🇦🇿 Azerbaijani and 🇧🇩 Bengali. This brings the number of locales that the SDK supports to 75.


## Conclusion

KeyboardKit 9.6 is a solid update that adds new standard value builders and support for two more locales. For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 