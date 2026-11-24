---
title: Styling
description: Easily style your custom keyboard
hero:
  emoji: 🎨
---

Unlike the native iOS keyboard, KeyboardKit can be styled and customized to great extent, using various styles, view modifiers, and themes.


## Colors & Images 

KeyboardKit defines keyboard-specific ``Color`` and ``Image`` extension that can be used in any keyboard, like `Image.keyboard` and `Color.keyboardBackground`

<div class="grid col2">
    <div><img alt="Image Extensions" src="{{page.assets}}styling-images.jpg" /></div>
    <div><img alt="Color Extensions" src="{{page.assets}}styling-colors.jpg" /></div>
</div>


See the [online documentation]({{site.urls.docs}}) for info on how semi-transparent colors are used to handle a [system bug][Bug] in iOS.

[Bug]: https://github.com/KeyboardKit/KeyboardKit/issues/305


## Emoji Icons

KeyboardKit Pro unlocks vectorized emoji assets, like the ``.keyboardEmoji`` and ``.emojiCategory(_:)``:

<img alt="Emoji Images" src="{{page.assets}}images-emojis.jpg" />


## Style Modifiers

Most KeyboardKit views have custom styles and style modifiers. For instance, the ``Keyboard.Button`` view has a  ``.keyboardButtonStyle(_:)`` view modifier that lets you customize the style of any button.


## Themes

KeyboardKit Pro unlocks a theme engine that makes easy to define and style keyboards with themes:

<div class="grid col3">
    <div><img alt="Standard Green Theme" src="{{site.assets}}/themes/theme-standard-green.jpg" /></div>
    <div><img alt="Swifty Blue Theme" src="{{site.assets}}/themes/theme-swifty-blue.jpg" /></div>
    <div><img alt="Cotton Candy Theme" src="{{site.assets}}/themes/theme-candyshop.jpg" /></div>
</div>

See [themes](/features/themes) for more information about the KeyboardKit Pro theme engine and its various themes.


## Type Extensions

Many KeyboardKit types define standard images, texts and colors, which will be used by default. For instance:

```swift
let context = KeyboardContext()
let image = KeyboardAction.command.standardButtonImage(for: context) // Command icon
let text = KeyboardAction.space.standardButtonText(for: context)     // KKL10n.space
```

You can easily customize these values for the entire keyboard, or any individual views, using style modifiers.



[Pro]: /pro
