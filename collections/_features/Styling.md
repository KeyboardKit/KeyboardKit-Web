---
title: Styling
description: Easily style your custom keyboard
hero:
  emoji: 🎨
---

While iOS has limited ways to customize the look and feel of the native keyboard, KeyboardKit can be styled to great extent, using styles and themes.


## Namespace

KeyboardKit has a ``KeyboardStyle`` namespace that contains style-related types, styles and views, to let you style different parts of the keyboard.


## Colors & Images 

KeyboardKit defines keyboard-specific ``Color`` and ``Image`` assets that can be used in any keyboard.

<div class="grid col2">
    <div><img alt="Image Extensions" src="{{page.assets}}styling-images.jpg" /></div>
    <div><img alt="Color Extensions" src="{{page.assets}}styling-colors.jpg" /></div>
</div>


See the docs for info on how semi-transparent colors are used to work around a [system bug][Bug] in iOS.

[Bug]: https://github.com/KeyboardKit/KeyboardKit/issues/305


## Type Extensions

Many KeyboardKit types define standard images, texts & colors. For instance:

```swift
let context = KeyboardContext()
let image = KeyboardAction.command.standardButtonImage(for: context) // Command icon
let text = KeyboardAction.space.standardButtonText(for: context)     // KKL10n.space
```


## Style Modifiers

Most KeyboardKit views have custom styles and style modifiers. For instance, the ``Keyboard.Button`` view has a  ``.keyboardButtonStyle(_:)`` view modifier that lets you customize the style of any button.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks additional assets, and a theme engine that makes styling even easier.


### Emoji Icons

KeyboardKit Pro emoji-specific, vectorized assets, like the ``.keyboardEmoji`` and ``.emojiCategory(_:)``:

<img alt="Emoji Images" src="{{page.assets}}images-emojis.jpg" />


### Themes

KeyboardKit Pro unlocks a theme engine that makes easy to define and style keyboards with themes:

<div class="grid col3 images">
    <div><img alt="Standard Green Theme" src="{{site.assets}}/themes/theme-standard-green.jpg" /></div>
    <div><img alt="Swifty Blue Theme" src="{{site.assets}}/themes/theme-swifty-blue.jpg" /></div>
    <div><img alt="Cotton Candy Theme" src="{{site.assets}}/themes/theme-candyshop.jpg" /></div>
</div>

See [themes](/features/themes) for more information about the KeyboardKit Pro theme engine and its various themes.


[Pro]: /pro
