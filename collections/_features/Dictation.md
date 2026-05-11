---
title: Dictation
description: Trigger dictation from the keyboard
hero:
  emoji: 🎤
---

KeyboardKit makes it easy to add powerful dictation to your keyboard.


## Dictation

Dictation can be used to let users enter text by speaking instead of typing. This can be hard to do in a keyboard extension where microphone access is unavailable, but KeyboardKit makes it easy. 

KeyboardKit Pro lets your keyboard open the main app to start dictation and link to it via an audio bridge, after which dictation can be performed within the keyboard.


## Namespace

KeyboardKit has a ``Dictation`` feature namespace with dictation-related types, a `DictationContext`, auto-persisted `DictationSettings`, various `DictationService` implementations, etc.


## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks features that let you add dictation support with very little code.

<div class="grid col2 images">
    <span><img src="{{page.assets}}dictation-progressview.jpg" /></span>
    <span><img src="{{page.assets}}dictation-settingsscreen.jpg" /></span>
</div>

The default dictation behavior is to send the dictated text to the main document, but you can use it in any way you want, for instance to trigger certain voice commands.

KeyboardKit Pro also unlocks dictation views that can be customized and styled to great extent, like the main progress views, volume visualizers, etc.


[Pro]: /pro