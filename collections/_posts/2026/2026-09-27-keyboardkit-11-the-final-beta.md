---
title:  KeyboardKit 11 - The Final Beta
date:   2026-09-27 06:00:00 +0100
tags:   releases essentials autocomplete dictation host-app localization plugins settings

assets: /assets/blog/26/0911/
image: /assets/versions/11_0-b.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/11.0-b.3
---

KeyboardKit 11 Beta 3 is out! This is the last beta before the scheduled October 1 release of KeyboardKit 11, and introduces support for 111 languages. Give it a try and [let us know what you think]({{site.urls.email}}).

![KeyboardKit header image]({{page.image}})


**Important** - KeyboardKit 11 Beta 3 is built with Xcode 27. Use Beta 2 if you're on Xcode 26. The KeyboardKit 11 release will be built with Xcode 26, for maximum compatibility.


## Banner Theme

Let's start with the most important question. What theme will we use for the KeyboardKit 11 version lifecycle?

After KeyboardKit 10's focus on Earth, we have discussed a new theme for KeyboardKit 11. We usually release ten versions (11.0-11.9), so perhaps something with ten "things"? We could go with the human hand or foot, but that would only be exciting for the first five versions (joke). Surely, we can do better.

KeyboardKit 11 will therefore take us back to space, but this time closer to home than KeyboardKit 9. This time, we'll blast through the solar system, starting at our magnificent Sun and ending up at Pluto. And before we start discussing everything in KeyboardKit 11... yes, we count Pluto as a planet. So should you.


## Major Changes

KeyboardKit 11 uses Swift 6.2 and strict concurrency. This made it possible to remove a lot of dispatch queues and `MainActor.run` code, which makes the library more stable. This work also involved making more types `MainActor`, while aiming to keep most of the library unchanged. The `KeyboardContext` proxy logic is thus moved to a new main actor-bound `KeyboardControllerContext`, to keep the core context versatile.

KeyboardKit 11 almost doubles the number of supported languages, bringing the total to `111`. This was made possible by the improved diacritics engine, which now supports combination marks. We have also improved the layout engine and harmonized many layouts, to keep them consistent across configuration changes, and fixed a bunch of incorrect swipe down actions on iPad.

KeyboardKit 11 also adds a new plugin architecture, which lets us move sensitive things like permissions and system API usage, out of the core library. The plugin model is an exciting addition to KeyboardKit that will let us add more capabilities and integrations outside of the core SDK, and making any use of features that require permissions or special APIs an intentional developer choice.

Finally, this version removes deprecated code, ends all experiments, and uses `LocalizedStringResource` for UI components localization.


## Plugins

Another big change is the new plugin architecture that allows us to move sensitive or complex code out of the library, as well as 3rd party integrations. 

KeyboardKit 11 ships with two plugins - `KeyboardKitDictationPlugin` and `KeyboardKitHostPlugin` - as well as a `KeyboardKitAutocompletePlugin` placeholder that will ship in an upcoming version.


## Feature Updates

While many features have been adjusted to the concurrency changes mentioned above, you should still feel at home with the overall structure, which doesn't change all that much.


### 📦 Package

KeyboardKit 11 uses Swift 6.2 and strict concurrency, and defines brand new plugin products.

* The package now uses Swift 6.2 and strict concurrency.
* The package defines new `KeyboardKit...Plugin` products.
* Many types are now `Sendable`, and those that need it `@MainActor`.
* dSyms are now included in the package - no need for a separate download.

### 🌱 Essentials

KeyboardKit 11 cleans up large parts of the library, and removes parts that were previously soft-deprecated.

* `Keyboard.Background` and `Keyboard.BackgroundStyle` are now separated.
* `KeyboardContext` has a new `localePresentationCase` that defaults to capitalized.
* `KeyboardControllerContext` is a new context type for controller-specific state.
* `KeyboardInputViewController` has a new `setPreferredKeyboardCase()` function.
* `KeyboardInputViewController`'s setup function can now inject autocomplete engines.
* `KeyboardInputViewController`'s setup function can now inject a host application resolver.
* `KeyboardState` has a new `controllerContext` property of type `KeyboardControllerContext`.

### 🧩 Extensions

KeyboardKit 11 adds a bunch of new extensions, and cleans up old ones that are no longer used by the library.

* `ProcessInfo` has a new `isLiquidGlassAvailable` extension.

### 💡 Autocomplete

The new `KeyboardKitAutocompletePlugin` is currently empty, but will be used to define additional autocomplete engines in future KeyboardKit versions.

* `KeyboardKitAutocompletePlugin` is a new plugin package.
* `AutocompleteContext` no longer uses dispatch queues to update itself.
* `AutocompleteContext`'s `isLoading` has been removed.
* `AutocompleteContext` has a new `controllerThrottleInterval` property.
* `AutocompleteEngine` is now public and adjusted to align with the plugin.
* `AutocompleteEngineWithDownloadSupport` is a new protocol.
* `AutocompleteService` moves some logic to the engine protocol.
* `AutocompleteService` has a new `supportedLocales` property.
* `AutocompleteService` has a new `warmUp()` function.
* `AutocompleteService.autocomplete(_:updating:)` is now async throws.
* `AutocompleteSettings`' `isAutoLearnEnabled` has been removed.
* `AutocompleteSettingsScreen` has been cleaned up and polished.
* `AutocompleteSuggestion` now defines a new `.deleteBackwardsCount`.
* `AutocompleteSuggestion`'s `.isUnknown` is renamed to `isCurrent`.
* `AutocompleteSuggestionSource` is a new enum with known sources.
* `StandardAutocompleteService` warms up its engine to avoid a launch hangs.
* `StandardAutocompleteService` now honors the new delete backwards count.
* `KeyboardInputViewController` will use the new context throttle to throttle autocomplete operations.

### 🎤 Dictation

The new `KeyboardKitDictationPlugin` makes it a LOT easier to set up dictation. You don't have to copy any code since the plugin contains everything, and must only add `Info.plist` permissions if you use it.

* `KeyboardKitDictationPlugin` is a new plugin package.
* `KeyboardKit` has ways to inject a dictation engine.
* `DictationEngine` defines a standard implementation in the plugin.
* `DictationMethod` is removed, since dictation now uses a single method.
* `DictationVolumeRecorder` and `DictationSpeechRecognizer` are now in the plugin.

### 🏠 Host Application

The new `KeyboardKitHostPlugin` contains all host application bundle ID logic, including all sensitive system API usages. This means that the system API usage is not completely opt-in for developers.

* `KeyboardKitHostApplication` is a new plugin package.
* `KeyboardKit` has ways to inject a host application resolver.

### 🌐 Localization

KeyboardKit 11 view localization now uses `LocalizedStringResource` instead of `String`. This makes it easier to localize these parts, and will let us localize these components in more locales in later versions.

* All screen localization types now use `LocalizedStringResource`.

### ⚙️ Settings

KeyboardKit 11 has rewritten the settings store to work better with Swift concurrency.

* `KeyboardSettings` uses a new thread-safe store resolver.
* `KeyboardSettings` now requires a `deviceType` when created.
* `KeyboardSettings` has new `resetStore(for:)` and `resetStore(forAppGroup:)` functions.

### 🐛 Bug Fixes

* `KeyboardAction` adjusts the presentation for multi-char currencies like "kr".
* `KeyboardInputViewController` now performs a new autocomplete when the locale changes.

### 🚨 Breaking Changes

* All deprecated code has been removed.
* `DictationMethod` has been removed.
* `DictationSpeechRecognizer` has been removed.
* `DictationVolumeRecorder` has been removed.
* `GestureButtonScrollState` has been removed.
* `KeyboardApp`'s `.keyboardSettingsKeyPrefix` has been removed.
* `KeyboardContext` moves proxy logic to controller context.
* `KeyboardContext` moves Liquid Glass logic to `ProcessInfo`.
* `KeyboardContext`'s `.autocapitalizationTypeOverride` has been.
* `KeyboardExperiment` has no active experiments.
* `KeyboardExperimentContext` has been removed.
* `KeyboardExperimentSettings` has been removed.
* `KeyboardHostApplicationProvider` has been removed.
* `KeyboardInputViewController` lifecycle functions have been reduced.
* `KeyboardInputViewController` now syncs to its contexts, not the other way.
* `KeyboardSettings.store` and `.storeKeyPrefix` are no longer mutable values.
* `KeyboardInputViewController`'s `.originalTextDocumentProxy` is now fully internal.


## Release Process

We are aiming to release KeyboardKit 11 on October 1st, after iOS 27, macOS 27, and Xcode 27 have been released, with some extra time to gather developer feedback.


## Feedback

We will continue to release refined betas as we bring KeyboardKit 11 closer to release. Make sure to [reach out]({{site.urls.email}}) if you run into problems, or if you have any feedback or suggestions.


## Conclusion

KeyboardKit 11 is a big update, and while the concurrency updates are the most prominent change, there are a bunch of things in this release that make it the strongest major update so far.

KeyboardKit 11 sets the direction for the year to come. We hope that you'll like it and look forward to another exciting major version year. We have so much planned, and can't wait to share it with you.

For more details, see the [release notes]({{page.release}}) for a full list of changes. Update now to get access to all improvements.