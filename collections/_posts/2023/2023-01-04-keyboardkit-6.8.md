---
title:  KeyboardKit 6.8 is out
date:   2023-01-04 08:00:00 +0100
tags:   releases localization layout dictation proxy

pro:    /pro
release-notes: https://github.com/KeyboardKit/KeyboardKit/releases/tag/6.8.0
---

KeyboardKit 6.8 is out, with many new locales and a new pro keyboard layout provider setup. This release adds 5 new locales, which brings the number of supported locales to 60!


## New locales

KeyboardKit 6.8 adds five new locales:

* 🇦🇲 Armenian
* 🏳️ Cherokee
* 🇮🇩 Indonesian
* 🇲🇾 Malay
* 🇺🇿 Uzbek

To get locales like Armenian to work, this version starts to break up the keyboard layout engine in smaller parts, to make it easier to manage locale-specific locales as the number of locales grow.


## Keyboard layout provider changes

The keyboard layout engine currently handles locale-specific changes in various ways for iPhone and iPad. However, this logic has grown messy and increasingly hard to manage over time. 

KeyboardKit 6.8 therefore adds a new pro keyboard layout provider layer to the Pro library. This is currently used by the new Armenian and Cherokee locales, but will eventually have a unique layout provider for each locale, even if the locale uses a standard layout.

`IMPORTANT` Since these new providers require a Pro license, you must now register custom layout providers *after* registering your license, if you want to use a standard provider with Pro providers. The `setupPro` function has therefore been extended with a new configuration action, which will be performed after registering the license, but before setting up the view. Have a look at the demo to see how this is done.


## Dictation replacement changes

Due to the layout engine changes, the dictation replacement is now specified in `KeyboardContext` instead of for each layout provider. This makes the providers cleaner.


## Full document context

The `UITextDocumentProxy` extensions in KeyboardKit Pro, that lets you read the full document context (text) of a document, has been adjusted and stabilized. 

For instance, `FullDocumentContextConfiguration` has adjusted delays to make the operation more stable. Furthermore, `FullDocumentContextResult` contains more information and the read operation will throw an error if there is already an active operation, since this caused a bug.


## Conclusion

KeyboardKit 6.8 is a big release that brings a lot of new features and adjustments to the table. See the [release notes]({{page.release-notes}}) for more details about this release.