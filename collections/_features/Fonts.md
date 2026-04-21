---
title: Fonts
description: Type with custom fonts
hero:
  emoji: 𝒜
---

KeyboardKit makes it easy to type with custom unicode fonts.


## Namespace

KeyboardKit defines a `Font` namespace with font-related features and views to let us type with custom fonts.


## KeyboardKit Pro

KeyboardKit Pro unlocks custom font capabilities for any license that includes the ``fonts`` feature. This is **NOT** part of the Gold tier, and must be enabled through a [business license](/business-licenses).

[KeyboardKit Pro][Pro] unlocks a font settings screen that can be added to the app or keyboard, in which users can select custom unicode font in a list.

<div class="grid col2">
    <span><img src="{{page.assets}}fonts-settingsscreen.jpg" /></span>
    <span><img src="{{page.assets}}keyboardview-font.jpg" /></span>
</div>

Selecting a font in the list (or setting `FontSettings.font` programatically) will automatically apply the font to the `KeyboardView`, after which users will be able to type with that font.


[Pro]: /pro
