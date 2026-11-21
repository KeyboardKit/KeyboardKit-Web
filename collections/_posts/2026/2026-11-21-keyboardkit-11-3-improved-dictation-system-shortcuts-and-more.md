---
title:  KeyboardKit 11.3 - In-keyboard dictation, shortcuts, and more...
date:   2026-11-21 06:00:00 +0100
tags:   releases actions autocomplete dictation localization previews themes

assets: /assets/blog/26/1121/
image: /assets/versions/11_3.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/11.3.0
post-raycast: /blog/2026/11/20/raycast-has-solved-keyboard-dictation-without-main-app-round-trip
post-gifs: /blog/2026/11/10/keyboardkit-11-2
---

KeyboardKit 11.3 is out! This version adds experimental in-keyboard dictation, system shortcut actions, a new lightweight keyboard preview, redesigned theme settings, simpler localization, and much more.


## 🎤 In-Keyboard Dictation

The last 48 hours have been crazy! As we wrote [yesterday]({{page.post-raycast}}), Raycast has found a way to start dictation directly in a keyboard extension, without the main app round-trip that keyboards have needed until now.

KeyboardKit 11.3 adds this capability to the [dictation](/features/dictation) plugin, with a new `.inKeyboard` engine type that runs directly in the keyboard. Just pass it into `setupKeyboardKit` in your keyboard controller:

```swift
class KeyboardViewController: KeyboardInputViewController {

    override func viewWillSetupKeyboardKit() {
        setupKeyboardKit(
            for: .myApp,
            dictationEngine: pluginDictationEngine(.inKeyboard(for: self))
        )
    }
}
```

The engine records audio with an [embedded web view]({{page.post-raycast}}), then transcribes it with the same speech recognizer as the main app engine, and still provides the same volume data as with the standard engine.

An important thing, however, is that since a keyboard can't request permissions, the main app must still request microphone and speech recognition permissions once, and *both* targets must specify these permissions.

**Important: The in-keyboard engine IS experimental! It relies on a workaround that Apple may disable in any iOS update, or by rejecting keyboard extensions that ask for microphone access. Keep your eyes open if you use it, and have a plan for falling back to the standard engine.**

This version also polishes the dictation experience as a whole. The dictation overlay is more responsive and the volume visualizer has been redesigned to show volume bars from the right, with nice intro animations.


## 💥 System Shortcuts

KeyboardKit 11.3 adds a new `.systemShortcut(_:)` action, which can trigger system shortcuts from the Shortcuts app directly from the keyboard. This lets users connect the keyboard to any workflow they've set up.

```swift
let action = KeyboardAction.systemShortcut(
    .init(
        name: "Translate Text",
        symbolName: "character.bubble",
        input: .clipboard
    )
)
```

A shortcut can take an optional input, like the current clipboard content or a certain text input. There's also a new `URL.systemShortcut(named:input:)` builder, if you want to run a shortcut in other ways.

The `KeyboardActionPicker` can pick and configure shortcut actions, with a new `SystemSymbolPicker` for picking an icon. There's also a new `SystemSymbol` type, with an `.all` list of all public SF Symbols.


## 👁️ Keyboard Previews

KeyboardKit 11.3 adds a new, lightweight `KeyboardPreview` that can render keyboard previews and cache them on disk. This makes it possible to show many keyboard [previews](/features/previews) (e.g. themes) with no performance issues.


## 🎨 Themes

The `KeyboardThemeSettingsScreen` now uses the new preview to show full keyboard previews instead of button previews. The previews load on demand, as they're needed, and also support dark mode.


## 🌐 Localization

KeyboardKit 11.3 makes it a lot easier to [localize](/features/localization) its screens and views, with a new `KeyboardLocalization` that gathers all localized texts in one place. 

This will make it easier for us to localize screens and views to more languages. You can customize localization by appling a custom localization with the new `.keyboardLocalization` view modifier.

This replaces `KeyboardSettingsScreenLocalization` and all similar types, which have been deprecated.


## 💡 Autocomplete

KeyboardKit now ignores tapped current word suggestions for the rest of the session, if the auto-ignore setting is enabled. This means that the autocorrections will no longer be used when users have tapped a word.


## 📝 Text Input

KeyboardKit 11.3 improves the user experience of text input views, like the emoji and [GIF]({{page.post-gifs}})search fields, by using a toast warning when they're tapped without Full Access.


## 🗑️ Deprecations

KeyboardKit 11.3 deprecates `Keyboard.ButtonPreview` & `KeyboardViewPreview` in favor of the new `KeyboardPreview`, as well as all old localization types and modifiers in favor of `KeyboardLocalization`.


## 📕 Conclusion

KeyboardKit 11.3 is a huge release, with experimental in-keyboard dictation, system shortcuts, a new keyboard preview, redesigned theme settings, and simpler localization. We can't wait to hear what you think.

Don't hesitate to [reach out]({{site.urls.email}}) with your feedback, and see the [release notes]({{page.release}}) for a full list of changes.
