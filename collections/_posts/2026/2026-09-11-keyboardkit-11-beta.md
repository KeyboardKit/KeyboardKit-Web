---
title:  KeyboardKit 11 Beta
date:   2026-09-11 06:00:00 +0100
tags:   releases essentials autocomplete dictation localization plugins settings

assets: /assets/blog/26/0911/
image: /assets/versions/11_0-b.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/11.0-b.1
---

KeyboardKit 11 Beta is out! This pre-release is a way for you to test the many coming changes in the next major version of KeyboardKit. Give it a try and [let us know what you think]({{site.urls.email}}).

![KeyboardKit header image]({{page.image}})


## Banner Theme

Let's start with the most important question. What theme will we use for the KeyboardKit 11 version lifecycle?

After focusing on Earth for KeyboardKit 10, we have discussed a new theme for the 11 lifecycle. We usually do release ten versions (11.0-11.9), so perhaps something with ten "things"?

We could go with the human hand or foot, but that would only be exciting for the first five versions. After that, things would get repetitive. Surely, we can do better.

KeyboardKit 11 will therefore bring us back to space, but this time closer to home than in KeyboardKit 9. This time, we'll blast through the solar system, starting at our magnificent Sun and ending up at Pluto.

And before we start discussing everything in KeyboardKit 11... yes, we count Pluto as a planet. So should you.


## Major Changes

This version bumps the package to Swift 6.2 and strict concurrency, which means that many UI types are now @MainActor-bound. This makes the library code cleaner and safer to use.

We have tried to limit @MainActor to types that directly need to use the controller or its text document proxy, and have made many more types than before `Sendable`. We're pretty happy with the result.

As part of minimizing these effects on the library, we have moved all proxy logic from the `KeyboardContext` to a new `KeyboardControllerContext`, which is only available on supported platforms.

Strict concurrency is a major change to the library. We have tried to design the changes in a way that will affect you as little as possible, but don't hesitate to let us know if something doesn't sit right with you.

Another big change is the new plugin architecture that allows us to move sensitive or complex code out of the library. 11.0 ships with two plugins - `KeyboardKitDictationPlugin` and `KeyboardKitHostPlugin`.

The new dictation plugin makes it a LOT easier to set up dictation than before. You don't have to copy code for a speech recognizer since the plugin contains both the standard engine, the recognizer and the volume recorder.

Besides this, this release removes all deprecated code, streamlines the library design, and makes things make a lot more sense. We hope that you will like it as much as we do.


## Feature Updates

While many features have been adjusted to the concurrency changes mentioned above, you should still feel at home with the overall structure, which doesn't change all that much.


### 📦 Package

The package now uses Swift 6.2 and strict concurrency, and includes a new `KeyboardKitHostPlugin`, and a `KeyboardKitDictationPlugin`.

### 🌱 Essentials

`KeyboardControllerContext` is a new context type, and all text document proxy logic is moved there from `KeyboardContext`. `KeyboardState` has a new `controllerContext` that lets you access this context.

To separate styles from views (which are main actor), `Keyboard.Background` has been refactored to a plain view, with its style information moved to a new `Keyboard.BackgroundStyle`.

### 💡 Autocomplete

The `AutocompleteService` protocol has been adjusted for the concurrency update, and functions are now async. It also has a new `warmUp()` function that is called early, to avoid first keypress hangs.

The `AutocompleteSuggestionType.unknown` case has been renamed to `.current`, since that name is more correct given how the service returns results.

### 🎤 Dictation

The `KeyboardKitDictationPlugin` is a new plugin that ships with the package. It contains all the code that requires permissions, which means that KeyboardKit library no longer requires any permissions on its own.

The plugin makes it easier than ever to enable dictation. Since it contains a standard engine, a speech recognizer, and a volume recorder, you just have to setup the plugin to get started.

The in-app dictation flow and its `.app` dictation method have been removed, since dictation is now performed in the keyboard. See [the docs]({{site.urls.docs}}) to make sure that your app supports the background audio mode.

### 🧩 Extensions

The native `ProcessInfo` type is extended with a new `isLiquidGlassAvailable` property that makes it easy to detect if Liquid Glass is available.

### 🏠 Host Application

The `KeyboardKitHostApplication` plugin is a new plugin that can be loaded from the package. It makes all calls needed to resolve the host application, which means that KeyboardKit no longer contains any such code.

### 🌐 Localization

All screen localization types now use `LocalizedStringResource` instead of plain strings. This will make it easier for us to localize these screens, and for you to support more locales.

### ⚙️ Settings

To avoid binding the various settings types to `@MainActor`, some types have new initializers that let you pass in values, and `@MainActor`-specific ones with default parameter values, like `DeviceType.current`.


## Breaking Changes

This version removes deprecated code and experiments, makes screens use `LocalizedStringResource`, and moves proxy logic from `KeyboardContext` to the new `KeyboardControllerContext`.

Finally, dictation now assumes that it's launched from the keyboard, started in the main app, and performed in the keyboard. For this to work, your app must [support background audio]({{site.urls.docs}}).


## Release Process

We are aiming to release KeyboardKit 11 on October 1st, after iOS 27, macOS 27, and Xcode 27 have been released, with some extra time to gather developer feedback.


## Feedback

We will continue to release refined betas as we bring KeyboardKit 11 closer to release. Make sure to [reach out]({{site.urls.email}}) if you run into problems, or if you have any feedback or suggestions.


## Conclusion

KeyboardKit 11 is a big update, and while the concurrency updates are the most prominent change, there are a bunch of things in this release that make it the strongest major update so far.

KeyboardKit 11 sets the direction for the year to come. We hope that you'll like it and look forward to another exciting major version year. We have so much planned, and can't wait to share it with you.

For more details, see the [release notes]({{page.release}}) for a full list of changes. Update now to get access to all improvements.