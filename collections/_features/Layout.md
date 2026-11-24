---
title: Layout
description: A powerful and flexible layout engine
hero:
  emoji: 🔣
---


KeyboardKit defines standard keyboard layouts like `QWERTY`, `AZERTY`, `QWERTZ`, `Dvorak` and `Colemak`, and localized keyboard layouts for [{{site.locales.count}} languages](/locales).


## Layouts

A flexible and adaptive keyboard layout is at the heart of a software keyboard, with many considerations like the current device model, screen orientation, locale, etc.

<div class="grid col3 mobile carousel">
    <img src="{{page.assets}}keyboardview-english.jpg" />
    <img src="{{page.assets}}keyboardview-greek.jpg" />
    <img src="{{page.assets}}keyboard-inputtoolbar.jpg" />
</div>


The KeyboardKit layout engine is flexible and adapts to many factors, like device and keyboard type, locale, etc. You can easily customize the layout further, by resizing, adding and removing keys.

[KeyboardKit Pro][Pro] unlocks additional layouts like `.qwertz`, `.azerty`, `.colemak`, and `.dvorak`, as well as locale-specific layouts for all [{{site.locales.count}} supported languages](/locales).


## Customizations

You can use the `.standard` layout builder to get a standard layout for the current keyboard context, or any of the [{{site.locales.count}} supported languages](/locales).

Once you have a layout value, you can customize it with the many mutating functions it defines. You can add and remove keys and spacing, change the size and row height, etc.

You can then insert your customized layout into the `KeyboardView` to make it render it as a native keyboard.


[Pro]: /pro   
