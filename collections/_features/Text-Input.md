---
title: Text Input
description: Let users type within the keyboard
hero:
  emoji: 📝
---

Custom keyboards will by default only send typed text to the [host application](/terminology)'s text field, and will not detect if you try to type into a text field in the keyboard. This makes it hard to build search, AI prompting, etc. 

KeyboardKit Pro therefore adds ways to make it easy to automatically route text to text fields in the keyboard.


## KeyboardKit Pro

KeyboardKit Pro unlocks text input views that automatically register and unregister themselves as the main [text document proxy](/terminology) when they receive and lose focus.

All you have to do is to add a `KeyboardTextField` or `KeyboardTextView` to your keyboard, after which KeyboardKit will automatically type into the text field when it's selected.

These views support `FocusState` and have a `focused` view modifier that lets you provide a custom done button that slides in when the view is focused.


[Pro]: /pro
