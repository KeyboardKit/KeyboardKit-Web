---
title:  iOS 18 breaks the selector-based way of opening URLs
date:   2024-09-11 08:00:00 +0100
tags:   actions navigation

github: https://github.com/KeyboardKit/KeyboardKit/issues/795

tweet:  https://x.com/GetKeyboardKit/status/1833777889508008337
toot:   https://techhub.social/@keyboardkit/113117869193627340
---

iOS 18 causes the selector-based way of opening URLs from a keyboard extension without the main application, to stop working. This post describes how KeyboardKit will fix it.

The `KeyboardInputViewController` has an `openURL` function that uses a selector to open URLs:

```swift
open func openUrl(_ url: URL?) {
    let selector = sel_registerName("openURL:")
    var responder = self as UIResponder?
    while let r = responder, !r.responds(to: selector) {
        responder = r.next
    }
    _ = responder?.perform(selector, with: url)
}
```

This works great in iOS 17, but in iOS 18 you get the following system log:

```
BUG IN CLIENT OF UIKIT: The caller of UIApplication.openURL(_:) needs to migrate to the non-deprecated UIApplication.open(_:options:completionHandler:). Force returning false (NO).
Trying to use openURL:options:completionHandler: doesn't seem to work either, which means that there is currently no way to handle the .url keyboard action.
```

Using `openURL:options:completionHandler:` doesn't work either, which means that there is currently no way to handle the `.url` keyboard action with the controller.

To work around this problem, KeyboardKit 8.8.6 will render `.url` actions as SwiftUI `Link`s, instead of a view with the full range of button gestures.

To work around this problem with earlier versions of KeyboardKit, use regular `Link`s in your UI and customize the  `SystemKeyboard`/`KeyboardView` button  builder to return a `Link` for the button content.

You are most welcome to discuss this in [this GitHub issue]({{page.github}}). Perhaps there is a way to make the selector-based approach work once more?