---
title:  Text input crashes in iOS 17
date:   2023-11-13 12:00:00 +0100
tags:   ios-bugs

article: /blog/2023/11/13/how-to-type-within-a-keyboard-extension
---

This article discusses a crash that can occur whenever a text input in a custom keyboard extension receives focus in iOS 17.

While typing into a text field within an iOS keyboard extension should be straightforward, it's quite tricky since you have to bypass the standard text document proxy to send the text to the input.

[This article]({{page.article}}) explains how you can implement this, and how [KeyboardKit Pro](/pro) can solve it for you with its convenient `KeyboardTextField` and `KeyboardTextView` components.


## Text input crash in iOS 17

While the views work great, developers started reporting that they crash when they receive focus in iOS 17. Since they were extensively tested before KeyboardKit 8 was released, this was concerning.

After some investigation, it turns out that this happens to *all* text inputs, even if you just add a plain SwiftUI `TextField` to your keyboard extension. When the input is focused, the keyboard crashes.

Let's dig into this problem to find out what's causing it.


## Input crash behavior

The crash turned out to be random, but deterministic. It can or can not happen, but the behavior doesn't change for a device or simulator. It works for some, and crashes for some.

Since the crash doesn't reveal any information, trial and error remained. It turned out that replacing the intricate `TextView` and `TextField` code with this still caused the extension to crash:

```swift
public struct KeyboardTextField: View {
    
    public init(
        _ placeholder: String = "",
        text: Binding<String>
    ) {
        self.placeholder = placeholder
        self.text = text
    }
    
    private let placeholder: String
    private let text: Binding<String>
    
    public var body: some View {
        TextField("", text: .constant(""))
    }
}
```

The crash actually remained even when the code above was replaced with just a simple `TextField`.


## The reason for the crash

Since some devices do work, the problem must be caused by some device-specific state...and sure enough, turns out that **the crash only happens when Full Access is disabled**.

If you experience this problem and enables Full Access in System Settings, the crash stops. You can actually see that some keyboards, like Bitmoji, doesn't allow text input when Full Access is disabled.


## KeyboardKit patch

To account for this, KeyboardKit Pro 8.0.2 will adjust the `KeyboardTextView` and `KeyboardTextView` to require Full Access.