---
title:  KeyboardKit 7.7
date:   2023-06-05 08:00:00 +0100
tags:   releases actions emojis gestures themes

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.7.0

tweet:  https://twitter.com/GetKeyboardKit/status/1665681764021329921?s=20
toot:   https://techhub.social/@keyboardkit/110491374338522086   
---

KeyboardKit 7.7 is out! This release provides a much better fast-typing experience by introducing a release outside tolerance, tweaks the emoji keyboards and has many other nice features and fixes.


## Fast typing

This version aims to reduce the amount of lost keystrokes by adding a release outside tolerance, to let buttons trigger a release even if the release is outside of the button bounds. This addresses how it's easy to slide with a finger while typing fast and end up with the finger outside the button.


## Space drag

This version also adds a vertical threshold when moving the input cursor with the space key, since dragging the finger too much up and down can result in unexpected movement. If you drag too far up, the input cursor will stop moving until you bring your finger back within the threshold.


## Emoji keyboards

This release tweaks the emoji keyboards to look closer to their native counterparts. There are still a lot of improvements to be made, but this will at least make them look a lot better.


## URL opening

To avoid having to use `UIApplication.shared` to open a URL, which isn't allowed from keyboard extensions, there is a new `KeyboardUrlOpener.shared` that can be used to open URLs.


## Keyboard actions

`KeyboardAction` has new `systemSettings` and `url` action types, that by default open the URL they specify. It also has a new `standardAction` that will be used in the next minor version, to add more action handler capabilities. You will now be able to trigger actions without defining a gesture.


## Themes

`KeyboardTheme` has new `author`, `collectionName` and  `foregroundColor` properties, and is dropping the `styleName` as a breaking change. This version also fixes some style inconsistencies that caused some style to behave strange, since they didn't provide fixed identifiers.

Other than this, `KeyboardThemeLivePreview` will now onlyu render a light mode preview as the default behavior, although you can still ask it to render both.


## Licenses

`License` has new `localizedCalloutActionProviders`, `localizedInputSetProviders` and `localizedKeyboardLayoutProviders` properties that make it easier to access the providers that your KeyboardKit Pro license unlocks.


## Conclusion

KeyboardKit 7.7 is a massive update that adds many new features and fixes many things and minor annoyances. Have a look at the [release notes]({{page.release}}) for a full list of what's new in this release.