---
title: Layout
description: A powerful and flexible layout engine
hero:
  emoji: 🔣
---


KeyboardKit defines standard keyboard layouts like `QWERTY`, `AZERTY`, `QWERTZ`, `Dvorak` and `Colemak`, and localized keyboard layouts for [{{site.locales.count}} languages](/locales).


## Layouts

A flexible and adaptive keyboard layout is at the heart of a software keyboard, with many considerations like the current device model, screen orientation, locale, etc.

<div class="grid col2">
    <img src="{{page.assets}}keyboardview-english.jpg" />
    <img src="{{page.assets}}keyboardview-greek.jpg" />
</div>


The KeyboardKit layout engine is flexible and adapts to many factors, like device and keyboard type, locale, etc. You can easily customize the layout further, by resizing, adding and removing keys.


## Customizations

You can use the `.standard` layout builder to get a standard layout for the current keyboard context, or any of the [{{site.locales.count}} supported languages](/locales).

Once you have a layout value, you can customize it with the many mutating functions it defines. You can add and remove keys and spacing, change the size and row height, etc.

You can then insert your customized layout into the `KeyboardView` to make it render it as a native keyboard.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional layouts like `.qwertz`, `.azerty`, `.colemak`, and `.dvorak`, as well as locale-specific layouts for all [{{site.locales.count}} supported languages](/locales).

<div class="grid col2">
    <span><img src="{{page.assets}}keyboardview-dvorak.jpg" /></span>
    <span><img src="{{page.assets}}keyboardview-greek.jpg" /></span>
</div>

KeyboardKit Pro also unlocks views and utilities to let you use the same layout concept to add extra input rows, replace the keyboard with a bottom bar, etc.

<div class="grid col2">
    <span><img src="{{page.assets}}keyboard-inputtoolbar.jpg" /></span>
    <span><img src="{{page.assets}}keyboard-bottomrow.jpg" /></span>
</div>

KeyboardKit Pro also unlocks extra ``KeyboardLayout`` capabilities that make it easier to customize a layout.


[Pro]: /pro   
