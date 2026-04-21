---
title: Essentials
description: Essential keyboard features
hero:
  emoji: 🌱

keyboard-view: /features/essentials-keyboardview
---

KeyboardKit extends Apple's limited keyboard APIs with a lot more features than what is otherwise available.

KeyboardKit lets you create a native, fully customizable [custom keyboard](/terminology) with just a few lines of code, and will automatically set up things like App Group settings sync, locales, dictation, etc.

## Core Features

KeyboardKit has essential models, features and views, and a [KeyboardView]({{page.keyboard-view}}) that mimics the native keyboard.

<div class="grid col2">
    <span><img src="{{page.assets}}keyboardview-english-callout.jpg" /></span>
    <span><img src="{{page.assets}}keyboardview-swedish-theme.jpg" /></span>
</div>

KeyboardKit's `KeyboardInputViewController` extends `UIInputViewController` with more features, and the `KeyboardAppView` can be used to set up a main app target with keyboard-related features.

KeyboardKit has feature-specific namespaces, like `Keyboard`, `Autocomplete`, `Emojis`, `Feedback`, etc. Each namespace has its own observable state, settings, services, etc.

The `Keyboard` namespace defines tons of essential models like `Diacritic`, `KeyboardCase`, `Gesture`, etc., utilities like `State` and `Services`, and views like `Button`, and `NextKeyboardButton`.

The `Keyboard` namespace is designed to provide you with all the tools needed for the core keyboard engine, while the other namespaces provide additional features on top of this engine.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks more capabilities in each feature, and makes the [KeyboardView]({{page.keyboardview}}) support [{{site.locales.count}} locales](/locales).

<div class="grid col2">
    <span><img src="{{page.assets}}keyboard-settingsscreen.jpg" /></span>
    <span><img src="{{page.assets}}keyboard-localesettingsscreen.jpg" /></span>
</div>

KeyboardKit also unlocks [additional app utilities](/features/app), that lets you set up a full-blown main app with keyboard status handling, settings screens, etc. Be up and running in minutes, with very little code.

[Pro]: /pro
