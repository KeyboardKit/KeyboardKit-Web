---
title: Essentials
description: Essential keyboard features
hero:
  emoji: 🌱

keyboard-view: /features/essentials-keyboardview
---

KeyboardKit extends Apple's very imited native keyboard APIs with a lot more features than what is otherwise available.

KeyboardKit lets you create a fully customizable [custom keyboard](/terminology) with a few lines of code, and will automatically set up things like App Group settings sync, locales, dictation, etc.

## Core Features

KeyboardKit has essential features & views, and a [KeyboardView]({{page.keyboard-view}}) that mimics the native keyboard.

<div class="grid col2">
    <span><img src="{{page.assets}}keyboardview-english-callout.jpg" /></span>
    <span><img src="{{page.assets}}keyboardview-swedish-theme.jpg" /></span>
</div>

The KeyboardKit `KeyboardInputViewController` extends the native `UIInputViewController` with more features, and the `KeyboardAppView` can be used to set up the main app with keyboard integrations.

KeyboardKit has separate feature namespaces, like `Keyboard`, `Autocomplete`, `Emojis`, `Feedback`, etc. Each namespace has its own observable state, settings, services, etc.


## Keyboard Engine

The `Keyboard` namespace contains essential keyboard utilities like `State` and `Services`, models like `AutocapitalizationType`, `Diacritic` and `Gesture`, and views like `Button`, `NextKeyboardButton`.

The `Keyboard` namespace is designed to provide you with all the tools needed for the core keyboard engine, while the other namespaces provide specific features on top of this engine.


## Keyboard Gestures

The native iOS keyboard has more gestures than you may think. Keys can be pressed, released, and long pressed, space can be dragged to move the cursor, shift can be double tapped, etc.

KeyboardKit lets you handle complex gestures with very little code and has a drag gesture handlers that can handle various gestures, like using space to move the input cursor.


## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks even more essential features, makes the [KeyboardView]({{page.keyboardview}}) support all [{{site.locales.count}} supported locales](/locales), etc.

<div class="grid col2">
    <span><img src="{{page.assets}}keyboard-settingsscreen.jpg" /></span>
    <span><img src="{{page.assets}}keyboard-localesettingsscreen.jpg" /></span>
</div>

KeyboardKit also provides [additional app utilities](/features/app), that lets you set up a full-blown main app with keyboard status handling, settings screens, etc. Be up and running in minutes, with very little code.

[Pro]: /pro
