---
title:  KeyboardKit 10.9 Developer Preview
date:   2026-08-25 06:00:00 +0100
tags:   releases essentials autocomplete dictation host-app

assets: /assets/blog/26/0825/
image: /assets/versions/10_9-dp1.jpg
image-show: 0

post:   /blog/2026/03/02/ios-26-4-host-application-bundle-id-bug
release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/10.9.0-dp.1
---

KeyboardKit 10.9 Developer Preview 1 is out! This pre-release is way for you to test the many coming features and changes while they are being evaluated.

![KeyboardKit header image]({{page.image}})

KeyboardKit 10.9 adds a new way of identifying the host application. It also deprecates old dictation methods that will be removed in KeyboardKit 11, adds bug fixes & adjustments to the keyboard button view, adds new toolbar views, and applies the primary language on each launch to fix external hardware keyboard-related bugs.


## 🌱 Essentials

The `Keyboard.ButtonGestures` and its underlying `GestureButton` view have been rebuilt for improved performance. This also fixes a bug where a repeat action could get stuck if the view was removed while pressed.

There's a new `Keyboard.ToolbarItem` that can trigger an action, and a `Keyboard.ToolbarToggle` that can toggle a binding. Both can be added to a keyboard toolbar with consistent styling.

The `KeyboardInputViewController` has a new `setPrimaryLanguage(from:)` function, and now sets the primary language in `viewWillAppear` to fix external keyboard key binding issues.


## 💡 Autocomplete

The `AutocompleteToolbarScrollMode` enu, has a more convenient name for the `.scrollable` case, and also supports setting a max width for its items.


## 🎤 Dictation

This release soft-deprecates the in-app dictation method to guide you towards migrating to the in-keyboard dictation method, which will be the default method in KeyboardKit 11.


## 🏠 Host Application

We have finally found a new way of identifying the keyboard host application! This  will once more enable you to navigate back to the keyboard, and will replace the one that [stopped working in iOS 26.4]({{page.post}}).

The `KeyboardInputViewController` has new asynchronous `resolveHostApplication` functions that use an underlying resolver to resolve the host application, which can then be synced to the context as needed.

We will wait for Apple to review an app that contains these new tools before releasing 10.9. In the meantime, we'd love for you to try it out, and let us know how it's working. 


## Conclusion

KeyboardKit 10.9 will be the last minor 10.x release before moving to KeyboardKit 11. We want it to be a stable version for the ones who stay on 10.x, so please give this a proper try and let us know what you think.

For more details, see the [release notes]({{page.release}}) for a full list of changes. Update now to get access to all improvements.
