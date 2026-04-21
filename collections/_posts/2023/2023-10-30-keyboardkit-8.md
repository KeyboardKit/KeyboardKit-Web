---
title:  KeyboardKit 8
date:   2023-10-30 08:00:00 +0100
tags:   releases

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.0.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.0.0
---

KeyboardKit 8 is finally out! This is a huge update with lots of changes and improvements. Let's take a look at what you can expect.

KeyboardKit 8 cleans up the library to make it better structured and easier to use. It reorganizes types into namespaces and removes low-value utilities, such as types used solely for DocC exposure.

The `SystemKeyboard` is now easier to use. Passing state and services instead of a controller will reduce the risk for memory leaks. It no longer needs a width and makes it a easier to customize its views.

These updates have helped enabling new features like fading the keyboard buttons while moving the cursor. There are many quality of life and bug fixes, and accessibility has been drastically improved.

The `EmojiKeyboard` has been redesigned to look even more like the native keyboard. Future updates will add support for scrolling between categories and emoji search.

The documentation has been extensively updated to provide more information, code examples, etc. Please report any inconsistencies found, as much is rewritten.


## Migrating from KeyboardKit 7

KeyboardKit 8.0 includes temporary deprecations to assist migration from KeyboardKit 7. They will be removed in 8.1, so make sure to first upgrade to KeyboardKit 8.0 when upgrading from 7.0.

If you are on an earlier version of KeyboardKit 7.x, consider upgrading to the last 7.9.6 version before moving to 8.0, as it has types and deprecations that are removed in this version.

The temporary deprecations aim to provide an upgrade experience without breaking changes, or at least as few as possible. See the breaking changes section below if you run into problems. 

Please reach out if you run into problems that are not mentioned here, so that we can upgrade the post and the library's migration support.


## State and services

One important change in this release, is the concept of `state` and `services`. The keyboard controller now wraps its observable state and services in these new properties, to make things easier.

Having these properties makes it easier to find out what the controller can do, and makes it easier to pass around state and services without the controller. This will help avoiding memory leaks.


## System keyboard

The `SystemKeyboard` is MUCH easier to use, and uses the new `state` and `services` concept to let you create a keyboard without a controller instance or specifying tons of parameters.

The keyboard is also MUCH easier to customize now, using brand new view builders that provide you with standard views. You can easily customize buttons, toolbar and emoji keyboard.

Since `EmojiKeyboard` is now a Pro feature (more info below), the keyboard will no longer add an emoji keyboard switcher, unless it actually has an emoji keyboard registered.




## Style and design

The button style has been adjusted to let you use background styles on buttons as well. This means that you can now use image backgrounds for buttons. 

The background style now supports image content modes. This means that you can tell a keyboard component to scale, strech, or resize its background image.

`SystemKeyboard` will now fade out its button labels while you use space to move the input cursor.


## Multi-platform

The `StandardKeyboardActionHandler` no longer uses a `KeyboardInputViewController` and can therefore be used on all platforms.


## Autocomplete

The `LocalAutocompleteProvider` now make some minor local adjustments, such as providing "I" as an autocorrect suggestion to "i" in English.


## Pro feature changes

As part of this release, some features have been moved to KeyboardKit 8.0, including `EmojiKeyboard`, emoji categories, and text routing.

KeyboardKit Pro 8 also moves over to a [brand new subscription]({{site.urls.gumroad}}) that supports a 7 day FREE TRIAL, a monthly plan for all tiers, and one single product for all tiers.


## ...and much more

KeyboardKit 8.0 is the biggest upgrade to KeyboardKit yet and will hopefully prove to be an important change when looking back on it a few years from now.

You will most likely be affected by some of the many changes, but the library should help you update with minimum hassle. Make sure to first upgrade to KeyboardKit 7.9 before upgrading to 8.0.

Please reach out if you run into problems that are not mentioned here, so that we can upgrade the post and the library's migration support.

See the [release notes]({{page.release}}) for a complete changelog and see the updated documentation for KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}).

We hope that you will love using KeyboardKit 8!