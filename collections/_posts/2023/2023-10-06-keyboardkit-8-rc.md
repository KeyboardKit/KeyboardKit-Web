---
title:  KeyboardKit 8 Release Candidate
date:   2023-10-06 08:00:00 +0100
tags:   releases

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.0-rc1
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.0-rc1
---

KeyboardKit 8 RC 1 is out! This is a huge update with lots of improvements. Let's look at what you can expect.

KeyboardKit 8 is all about cleaning up the library to make it more approachable, better structured and easier to use. It removes previously deprecated code, reorganizes types into namespaces, and removes low-value utilities, including types solely used for DocC documentation exposure.

Central types like `SystemKeyboard` are now easier to use. Passing state and services instead of a controller reduces the risk for memory leaks. It also no longer needs you to provide a width, but will take up as much space as it needs. It also makes it a easier to provide customize its views.

These updates will simplify scaling the library and has helped enabling new features like fading the keyboard buttons while moving the cursor with space. There are many quality of life and bug fixes. Accessibility has been drastically improved for Voice Over and the emoji keyboard is redesigned.

Most emoji features, including the emoji keyboard and emoji category information, are now Pro features. The `SystemKeyboard` automatically removes the emoji key if no emoji keyboard is provided in the view builder.

The documentation has been extensively updated to provide more information, discussions, code examples, etc. Please report any inconsistencies found, as much is rewritten.

I hope that you will love this major update to KeyboardKit. 


## Migrating from KeyboardKit 7

KeyboardKit 8.0 includes TEMPORARY deprecations to assist migration from KeyboardKit 7. They will be removed in 8.1. Just follow the deprecations to migrate your 7.x code to 8.0.

Consider upgrading to the last 7.x version of KeyboardKit before moving to 8.0, as it has types and deprecations that are removed in this version.

See the breaking changes section below if you run into any breaking changes. Reach out if you run into problems that are not mentioned here.


## State and services

One important change in this release, is that the library introduces the concept of `state` and `services`, which are used to contain the observable state for a keyboard, as well as its services.

This makes it possible to let us pass in everything that is being used by a keyboard, without having to pass around the controller like before. This will help a lot with avoiding memory leaks.


## System keyboard

The `SystemKeyboard` is MUCH easier to use, and uses the new `state` and `services` concept to let you create a keyboard without using a controller instance or specifying tons of parameters.

It's also MUCH easier to customize, using brand new view builders that provide you with standard views. You can easily customize buttons, toolbar and emoji keyboard.

Since the emoji keyboard is now a Pro feature, the keyboard doesn't add one by default (although Pro does when you register a license). It hides the emoji button if you don't specify a keyboard.


## Style and design

You can now use the rich background style on your buttons as well. This means that you can add image backgrounds to your buttons. The background now supports custom image content modes.

`SystemKeyboard` will now fade out its button labels while you use space to move the input cursor.


## Multi-platform

The `StandardKeyboardActionHandler` no longer uses a `KeyboardInputViewController` and can therefore be used on all platforms.


## Autocomplete

The `LocalAutocompleteProvider` now make some minor local adjustments, such as providing "I" as an autocorrect suggestion to "i" in English.

The `RemoteAutocompleteProvider` is no longer a Gold feature. It's now available to all Pro users.


## ...and much more

KeyboardKit 8.0 is a massive update to KeyboardKit, with many important changes. You will most probably be affected by some of the deprecations, but the library will guide you to adapt to these changes. Make sure to first upgrade to the last KeyboardKit 7 release before upgrading to 8.0 RC1.

Have a look at the [release notes]({{page.release}}) for a full list of what's new and to download the updated documentation for KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}).