---
title:  How to type into a text input within a keyboard extension
date:   2023-11-13 09:00:00 +0100
tags:   text-input
---

This article discusses how to type into a text input within a keyboard extension.

When creating a keyboard extension for iOS, you may have had to add a `TextView` or `TextField` to let users type into a text field *within* the keyboard, for instance:

```swift
struct MyKeyboardView: View {

    @State 
    private var text = ""

    var body: some View {
        VStack {
            TextField("Search...", text: $text)
            // Keyboard here
        }
    }
}
```

However, you will then have noticed that while you can *add* a text input to your keyboard, the text you type will still end up in the main app, not the text input.


## Why does this happen?

The reason for this strange behavior, is that although you *focus* on the text input in the keyboard, the *text document proxy* will still refer to the main app, not the text input.

Since the keyboard extension will by default send text to its text document proxy, the focused text input will be ignored in favor of the text document proxy, which still receives the typed text.


## How can you fix this?

To solve this, you will have to replace the `textDocumentProxy` with a custom proxy that routes text to the currently focused text field, instead of to the main app.

This is quite challenging, since you must implement the proxy protocols, and also make sure that the text field takes over the proxy when it receives focus, and hands it back when it loses focus.

KeyboardKit's `KeyboardInputViewController` has a `textInputProxy` property that you can use to route text to another proxy. `textDocumentProxy` will return it if it's set.

However, implementing the proxy protocol and the registration is still quite challenging, which is why [KeyboardKit Pro](/pro) provides ways to do this in a much easier way.


## KeyboardKit Pro text routing

To make it easier to add text inputs to a keyboard, KeyboardKit Pro has a `KeyboardTextField` and a `KeyboardTextView` that automatically register themselves as the active proxy while they have focus.

This means that this will work just as you expect that it should:

```swift
struct MyKeyboardView: View {

    @State 
    private var text = ""

    var body: some View {
        VStack {
            KeyboardTextField("Search...", text: $text)
            // Keyboard here
        }
    }
}
```

This drastically simplifies managing text input within a keyboard extension. Just add any of these views to your keyboard extension, and they will receive text input while they have focus.


## Try it out

Text routing is part of [KeyboardKit Pro Silver](/pro). You can sign up for a 7 day FREE TRIAL if you want to test it in your keyboard.