---
title: GIFs
description: Search for and share GIFs from the keyboard
hero:
  emoji: 🎞️

giphy: https://giphy.com
klipy: https://klipy.com
---

KeyboardKit makes it easy to search for GIFs and share them directly from the keyboard, with built-in support for [GIPHY]({{page.giphy}}) and [KLIPY]({{page.klipy}}).


## Models

KeyboardKit defines a `Gif` model and a `GifProvider` type that can search for GIFs with any GIF service. It also has a `GifImage` view that can render an animated GIF, just like an image.


## Pro Features

KeyboardKit Pro unlocks GIF capabilities for any license that includes the ``gifs`` feature. This feature must be enabled through a [business license](/business-licenses), and includes built-in GIPHY and KLIPY integrations, and GIF keyboards:

<div class="grid col2">
    <span><img src="{{page.assets}}gifs-keyboard.jpg" /></span>
    <span><img src="{{page.assets}}gifs-toolbar.jpg" /></span>
</div>

Just add a GIF provider to your `KeyboardApp`, and the `KeyboardView` will show either a GIF keyboard or a toolbar when you switch to the new `.gif` keyboard type, based on the new GIF placement setting.


[Pro]: /pro
