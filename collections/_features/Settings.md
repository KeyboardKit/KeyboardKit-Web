---
title: Settings
description: KeyboardKit has auto-persisted settings
hero:
  emoji: ⚙️
---

KeyboardKit lets you use keyboard settings that automatically sync between the main app and its keyboard.


## Keyboard Settings

Each namespace provide its own auto-persisted settings. `KeyboardSettings` provides essential settings, while types like `AutocompleteSettings` and `DictationSettings` provide feature-specific settings.

Each context type has a `settings` property that is used as the main settings value for each feature. You can access these contexts as environment objects, and get and set their values as needed.


## Data Syncing

Many keyboard apps use the main app target to onboard the user, show the keyboard state, and provide a large UI for settings. This means that the app and keyboard must sync setting changes between the two targets.

KeyboardKit therefore has an App Group-synced `keyboardSettings` store that automatically syncs data between the main app and its keyboard. Just set up an App Group, and KeyboardKit takes care of the rest.


## KeyboardKit Pro

KeyboardKit Pro unlocks screen templates that can be used by the main app or within a keyboard:

<div class="grid col2 images">
    <div><img alt="A Home Screen" src="{{page.assets}}app-homescreen.jpg" /></div>
    <div><img alt="A Settings Screen" src="{{page.assets}}keyboard-settingsscreen.jpg" /></div>
    <div><img alt="A Locale Screen" src="{{page.assets}}autocomplete-settingsscreen.jpg" /></div>
    <div><img alt="A Locale Screen" src="{{page.assets}}keyboardtheme-settingsscreen.jpg" /></div>
</div>

These screens can be added with a single line of code. Each screen can be customized and localized.


[Pro]: /pro
