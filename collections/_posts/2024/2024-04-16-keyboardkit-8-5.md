---
title:  KeyboardKit 8.5
date:   2024-04-16 08:00:00 +0100
tags:   releases actions callouts emojis feedback layout views

assets: /assets/blog/24/0416/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.5.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.5.0
---

KeyboardKit 8.5 is out. This is a big update, that renames and moves many types into namespaces, adds many new features and makes many small adjustments and improvements.


## Renamed and moved types

KeyboardKit 8.5 moves more types into their related namespaces, to make the SDK surface smaller and easier to overview. It also renames many types to be more intuitive.

Since this release involves many renamings, the `Deprecations` section in the release notes only lists deprecated types, not renamed ones.

This version adds deprecation types to help you migrate to the new type names, so you should not run into any breaking changes when migrating from earlier versions.


## Renamed and new namespaces

The `KeyboardState` namespace has been renamed to `KeyboardStatus`, since it was often confused with `Keyboard.KeyboardState`. 

The `Keyboard.KeyboardState` and `Keyboard.KeyboardServices` types have also been renamed to the shorter `Keyboard.State` and `Keyboard.Services`.

There are new namespaces too. For instance, `KeyboardApp` has app-related types, `KeyboardFeedback` has feedback-related types, and `KeyboardSettings` has settings-related types.


## New audio & haptic feedback capabilities

KeyboardKit 8.5 makes it easier to register custom audio & haptic feedback, in a way that requires less or no customizations in the action handler. 

You can now just register custom feedback for any gesture on any action, and it will be triggered by the standard action handler. 

You can also play URL-based sound effects from audio files, using the new `customUrl` audio feedback type.


## UI Changes

The `KeyboardStatus.Label` now uses its style to change the enabled and disabled icons as well. This makes it even easier to customize this view. It has new view modifiers that make styling even easier.

KeyboardKit 8.5 also adjusts the input and action callout curves to look more native, which makes your keyboard look a lot more native than before by default:

![A screenshot of the new callout curve design]({{page.assets}}actioncalloutcurve.png)

The `KeyboardStyle.StandardProvider` now uses a light backspace key font weight, instead of regular.


## KeyboardKit Pro Changes

KeyboardKit Pro 8.5 adds many additional features and changes, that make it easier than ever to build next level keyboards for all supported locales.

### Emoji Changes

To make it even safer to use KeyboardKit Pro's emoji features, the `EmojiKeyboard` sub-components are now throwing as well, instead of rendering empty content if they fail to load.

### New home screen template

KeyboardKit Pro adds a new `KeyboardApp.HomeScreen` view, which can be used as a template for the main app home screen.

### Keyboard status section

KeyboardKit Pro adds a new `KeyboardStatus.Section` view, which can be used to display all relevant statuses for a keyboard.

### Input toolbar

KeyboardKit Pro adds support for easily adding an input toolbar above the system keyboard. For instance, here's a `.numeric` toolbar added above the default iPad Pro system keyboard:

![A screenshot of the new input toolbar]({{page.assets}}inputtoolbar-ipadpro.png)

You can use the new `.keyboardInputToolbarDisplayMode` view modifier to enable the toolbar. While it has no effect in the open-source library, you can still use this information in a custom view.

The toolbar comes with a default `numbers` display mode, but can be used with any character set.

### iPad Pro used in more places

KeyboardKit Pro makes these locales use the iPad Pro layout: `Catalan`, `Czech`, `Danish`, `Faroese`, `Finnish`, `Georgian`, `German`, `German (Austria)`, `German (Switzerland)`, `Greek`, `Hawaiian`, `Icelandic`, `Inari Sámi`, `Macedonian`, `Maltese`, `Mongolian`, `Northern Sámi`, `Norwegian`, `Russian`, `Serbian`, `Slovak`, `Turkish`, `Ukrainian`.


## Conclusion

KeyboardKit 8.5 is a huge release, that makes many architectural changes, renames many types and add many since long requested features.

Please see the [release notes]({{page.release}}) for a KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}) for a full list of changes. Don't hesitate to reach out if you have any questions.