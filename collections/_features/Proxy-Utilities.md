---
title: Proxy Utilities

hero:
  title: Text Document Proxy Utilities
  emoji: 📄

description: Make the custom keyboard text document proxy do more
  
---

Custom keyboards use a [text document proxy]({{site.urls.terminology}}) to integrate with the currently active text field. It lets you insert and delete text, get the selected text, move the input cursor, etc.


## Limited Native Capabilities

The native proxy APIs are however *very* limited, which makes it hard to get information about the text and to perform many common keyboard operations. 


## Extensions

KeyboardKit extends the proxy with more features to let you do more, like getting the ``currentWord`` and info like ``isCursorAtNewSentence``, and to  ``deleteBackward(range:)``, ``endSentence(withText:)``, etc.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional text document proxy capabilities, like the ability to read the full document context, instead of the limited text that the native APIs return.


```swift
let proxy = keyboardContext.textDocumentProxy
let result = try await proxy.fullDocumentContext(...)
```

KeyboardKit Pro also makes it possible to replace the main text document proxy with a custom one. This is used by the [text input](/features/text-input) components, to let you type within the keyboard extension.


[Pro]: /pro
