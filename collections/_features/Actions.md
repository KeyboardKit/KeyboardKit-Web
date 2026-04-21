---
title: Actions
description: Trigger keyboard actions with ease
hero:
  emoji: 💥
---

KeyboardKit makes it easy to trigger and handle a rich set of Keyboard-specific actions.


## Actions

KeyboardKit has a ``KeyboardAction`` enum that defines many keyboard-specific actions , like ``.character``, ``.backspace``, ``.nextLocale``, ``.nextKeyboard``, etc. It's also a namespace for action-related types.

Keyboard actions can be used to type into the current text field, move the input cursor, open links, copy to and paste from the pasteboard, etc. Actions can be triggered by buttons, gestures, system events, or with code.


## Action Handler

Actions can be handled with a ``KeyboardActionHandler``,  which can handle actions, trigger feedback, etc. KeyboardKit defines a standard action handler that you can inherit and customize if needed.

A custom action handler can be used to handle actions that have no default behavior, and lets you inspect and handle all gestures (tap, press, drag, etc.) on all actions.


[Pro]: /pro
