---
title:  KeyboardKit Pro can now get all text from the proxy
date:   2022-10-05 06:00:00 +0100
tags:   releases pro proxy

image:  /assets/headers/pro.jpg

article: https://keyboardkit.github.io/KeyboardKitPro/documentation/keyboardkitpro/pro-document-proxy-extensions
---

KeyboardKit Pro 6.4.2 has been extended with new text document proxy extensions that let you read all text from the proxy.

![KeyboardKit Pro icon header]({{page.image}})

As you may have noticed, `UITextDocumentProxy`'s `documentContextBefore/AfterInput` don't return *all* content before and after the text input cursor, just the content that is closest to the text cursor. Any new paragraph may stop the proxy from fetching more content, which makes it hard to do more complex operations, like proof-reading a document.

KeyboardKit Pro has therefore been extended with brand new proxy extensions that let you access all text from the proxy. You can get the `fullDocumentContext()` as well as the full context before and after the input cursor. Calling these functions will cause the input cursor to move through the entire text, after which it will return to its original position.

The online documentation has a new [article]({{page.article}}) that explains the extensions in more details together with some sample code.