---
title:  Xcode 16 breaks rich button gestures in scroll views in iOS 18
date:   2024-09-06 10:00:00 +0100
tags:   gestures

github: https://github.com/KeyboardKit/KeyboardKit/issues/791

tweet:  https://x.com/GetKeyboardKit/status/1832038317761741002
toot:   https://techhub.social/@keyboardkit/113090688970833001
---

Xcode 16 causes a breaking gesture bug, where multi-gesture buttons stop working in scroll views in iOS 18. This affects the emoji keyboard. This post describes how KeyboardKit will fix it.


## Background

Triggering many gestures with a single button is pretty complicated in SwiftUI. KeyboardKit thus has a custom `GestureButton` that can trigger multiple gestures with a single button.

The `GestureButton` supports triggering actions for `press`, `release`, `long press`, `repeat`, `drag start`, `drag changed`, `drag end` and `ended`, which is used to support many keyboard operations.


## How does it work?

The regular `GestureButton` uses a single `DragGesture` to derive all different gestures, but this doesn't work within a `ScrollView` since the drag gesture blocks the scroll gesture.

The `GestureButton` therefore has a second underlying button called `ScrollViewGestureButton`, which implements the gestures in a MUCH more complicated way, in a way that works within a scroll view.

The `ScrollViewGestureButton` uses an intricate combination of styles and gestures to avoid blocking the scroll gesture, while trying to behave as regular keyboard buttons to the greatest extent.


This is how both the `KeyboardView` and KeyboardKit Pro's `EmojiKeyboard` can use the same gestures, although the latter is in a scroll view and the former is not.


## Xcode 16 breaking change

Xcode 16 breaks scroll view support in iOS 18 by making the `ScrollViewGestureButton` stop working. Any multi-gesture button that is added to a scroll view will now block the scroll gesture.

Note that it still works great in Xcode 15, or when building with Xcode 16 and running on iOS 17. It's just the combination of Xcode 16 and iOS 18 that doesn't work.

As such, the emoji keyboard stops working in this case, since the emoji keys block the scroll gesture.


## KeyboardKit 8.8.6 to the rescue

KeyboardKit 8.8.6 rewrites the gesture engine from scratch to work with both Xcode 15, Xcode 16, iOS 17 (and earlier) and iOS 18, and without the need for complex scroll handling in iOS 18.

It will do so by using the same `GestureButton` for both `KeyboardView` and `EmojiKeyboard` in iOS 18, by changing the gesture to be simultaneous instead of exclusive.

To make this possible, the new gestures keep track of state in a different way than before, to ensure that only the actions that should trigger will actually trigger.

The new implementation also moves state to a separate class, which removes the need to annotate every state property with `@State`, which in turn should lead to fewer redraws.

By using the same gestures everywhere, the updated gesture engine will also actually improve the emoji keyboard behavior in iOS 18, where it will handle scrolling much better.

The `GestureButton` still uses the `ScrollViewGestureButton` in iOS 17, since it works without changes.


## Please help by testing this

Since the gesture engine is at the heart of the keyboard, rewriting it is pretty scary. As such, it would be amazing if you could give it a try when the `8.9 Release Candidate` comes out next week.

You are also most welcome to discuss this in [this GitHub issue]({{page.github}}).