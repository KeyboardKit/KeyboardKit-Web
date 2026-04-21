---
title: AI Support
description: Essential features for AI keyboards
hero:
  emoji: 🤖
---


KeyboardKit makes it easy to inject your own AI tools into the keyboard.


## Limited Native Capabilities

Apple's native keyboard APIs lack many features that are often needed for AI-powered keyboards. For instance, they can't read the *entire* document content, nor allow users to type within the keyboard. 

Since these capabilities are *very* important to AI-based keyboards, but hard to implement, [KeyboardKit Pro][Pro] can unlock the features below, with very little code needed to use them.


## Document Reader

Apple's native keyboard APIs can't read the full document content, and will only return the text that is closest to the cursor. Any new paragraph can cause the remaining text to be omitted.

KeyboardKit Pro therefore unlocks ways for the `UITextDocumentProxy` to read *all* the text in any text field, by moving the text input cursor to unlock more content. See [proxy utilities](/features/proxy-utilities/) for more information.


## Next Word Prediction

KeyboardKit Pro unlocks ways to use Apple Intelligence and 3rd party tools like Claude and OpenAI to perform next word prediction. See [autocomplete](/features/autocomplete) for more information.


## In-keyboard Text Input

Apple's native keyboard APIs don't support in-keyboard typing by default, and will instead keep sending text to the host application's selected text field. This makes it hard to implement in-keyboard search & prompting.

KeyboardKit Pro therefore unlocks text input views that let you type directly within the keyboard. See the [text input](/features/text-input) article for more information.


[Pro]: /pro
