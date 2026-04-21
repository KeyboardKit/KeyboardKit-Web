---
title:  KeyboardKit 7.9
date:   2023-08-10 08:00:00 +0100
tags:   releases actions emojis feedback gestures layout themes multi-platform

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.8.0
---

KeyboardKit 7.9 is out! This release prepares the library for the upcoming major version bump, by deprecating a lot of stuff. It also adds a bunch of new features, adjusts things and fixes a couple of minor bugs.

KeyboardKit 8.0 will be a major bump that removes a lot of deprecated types and makes the surface level of the library smaller. This release prepares the library for that upcoming change.

Many types have been deprecated with proper `@available` annotations, while other types that can't be deprecated yet are soft deprecated with a `[DEPRECATED]` comment. `> v8.0: `. These types will either be removed, since the library has been simplified, or moved into container types that aim to make it easier to find things in the library.

Some examples of such container types are the new `Keyboard` and `KeyboardStyle` types, into which many related types are moved. You get deprecation warnings for the old names, that help you migrate to the new names.

Another big change in this version, is that the `InputSetProvider` concept has been deprecated in favor of just using `InputSet`. This removes a lot of complexity and makes it much easier to create layouts and use various input sets together.

Other big changes are that the `KeyboardAppearance` is renamed to `KeyboardStyleProvider`, the `Appearance` namespace is renamed to `Styling` and that the `KeyboardFeedbackHandler` is merged into the `KeyboardActionHandler` to just have a single type.


## New Features

As a result of the input set changes, you can now use custom input sets with all pre-defined layout providers. You also get a bunch of new input sets when you register a pro license.

`Keyboard.ReturnKeyType` has new types, which means that more native types are represented. It also has a new `prefersAutocomplete` property that is used when determining if a keyboard by default should show the autocomplete toolbar.

New multi-platform adjustments make it possible to use `SystemKeyboard` on all platforms. This is handy if you want to e.g. create a macOS-app for designing keyboards, since you can use previews. KeyboardKit Pro also has a new `SystemKeyboardPreview` that works on all platforms.

KeyboardKit Pro also adds a new `Colorful` theme, which brings the total number of pre-defined themes in the KeyboardKit Pro theme engine to 38.


## Adjustments

The emoji keyboard is tweaked to behave closer to the native one than before. It also now overlays the system keyboard with a bottom alignment instead of replacing it. This removes the height and position change that used to happen when switching keyboard types.

To simplify the audio and haptic feedback handling, the feedback handling will be moved from the `KeyboardFeedbackHandler` to the `KeyboardActionHandler`, which now has ways to trigger feedback. The audio and haptic feedback types are now also simplified quite a bit.


## Bug fixes

The emoji keyboard gesture bug, that caused the first gesture to not register, has been fixed. It also fixes so that scrolling works even where there are no emojis.

KeyboardKit will now switch to the preferred keyboard when typing a sentence delimiter followed by a new line, which is the default native behavior.


## Conclusion

KeyboardKit 7.9 is huge update, with many important changes and some nice bug fixes. You will most probably be affected by some of the deprecations, but the library will guide you to adapt to these changes. Make sure to upgrade to this version to be ready for the next major version, where all deprecated types will be removed.

Have a look at the [release notes]({{page.release}}) for a full list of what's new.