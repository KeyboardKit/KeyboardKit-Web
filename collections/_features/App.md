---
title: App Utilities
description: Powerful app models and templates 
hero:
  emoji: 📱
---

KeyboardKit provides main app utilities to let you build a great main app for your custom keyboard.

With its full screen estate and unlimited capabilites, the main app is a perfect place to onboard your users, provide keyboard settings, and to perform certain operations like dictation.


## Keyboard App

KeyboardKit has a ``KeyboardApp`` struct that is also a namespace for app-related types and views. You can create an app-specific ``KeyboardApp`` value to define your app's ``licenseKey``, ``appGroupId``, etc.

```swift
extension KeyboardApp {

    static var keyboardKitDemo: KeyboardApp {
        .init(
            name: "KeyboardKit",
            licenseKey: "your-key-here",                // Sets up KeyboardKit Pro!
            appGroupId: "group.com.keyboardkit.demo",   // Sets up App Group data sync
            locales: .keyboardKitSupported,             // Sets up the enabled locales
            autocomplete: .init(                        // Sets up custom autocomplete  
                nextWordPredictionRequest: .claude(...) // Sets up AI-based prediction
            ),
            deepLinks: .init(app: "kkdemo://", ...)     // Defines how to open the app
        )
    }
}
```

You can then use the value to set up your main app and keyboard extension to use the same config.


## 👑 KeyboardKit Pro

KeyboardKit Pro unlocks a ``HomeScreen`` template that can be used as the main app root view, as well as a `Keyboard.SettingsScreen`, `Keyboard.LocaleSettingsScreen`, etc.:

<div class="grid">
    <span><img src="{{page.assets}}app-homescreen.jpg" /></span>
    <span><img src="{{page.assets}}app-settings.jpg" /></span>
</div>

Most features have their own settings screens that can be used in the main app and the keyboard:

<div class="grid">
    <span><img src="{{page.assets}}autocomplete-settingsscreen.jpg" /></span>
    <span><img src="{{page.assets}}fonts-settingsscreen.jpg" /></span>
</div>

These screens can be customized and localized to great extent, using convenient view modifiers.


[Pro]: /pro
