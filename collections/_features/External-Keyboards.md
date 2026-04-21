---
title: External Keyboards
description: Detect and handle external keyboards
hero:
  emoji: ⌨️
---


KeyboardKit makes it easy to detect and handle external hardware keyboards.


## External Keyboards

Custom keyboards stop functioning as expected when an external keyboard is connected. The text document proxy will for instance not update its text, which affects features like autocomplete.

For these reasons, many keyboards choose to collapse the keyboard and instead show a compact bottom bar with a limited set of features. KeyboardKit Pro makes this easy.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks ways to detect if an external keyboard is connected, and if so lets you automatically collapse the keyboard to avoid strange behaviors.

<img src="{{page.assets}}keyboard-collapsedview.jpg" />

``KeyboardView`` lets you define which collapsed view to use. It uses `Keyboard.CollapsedView` by default, which you can customize with more buttons, but you can also use a completely custom view.


[Pro]: /pro
