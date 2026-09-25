---
title: Dictation
description: Trigger dictation from the keyboard
hero:
  emoji: 🎤
---

Dictation can be used to let users enter text by speaking instead of typing. This can be hard to do in a keyboard extension where microphone access is unavailable, but KeyboardKit makes it easy. 



## Dictation

KeyboardKit has dictation-related types and views, like the observable `DictationContext`, auto-persisted `DictationSettings`, `DictationService` implementations, etc.

With dictation enabled, KeyboardKit will automatically open the main app from the keyboard to start dictation, then return to the keyboard to perform dictation:

<div class="grid col2 images">
    <span><img src="{{page.assets}}dictation-progressview.jpg" /></span>
    <span><img src="{{page.assets}}dictation-settingsscreen.jpg" /></span>
</div>


## Dictation Services

KeyboardKit Pro unlocks a `StandardDictationService` that can open the main application, start dictation, then return to the keyboard if the [host application](/features/host) is known to it.

The standard dictation service uses on-device capabilities provided by Apple to support these languages:

{{ site.data.locales-dictation | join: ", " }}

This list is provided by Apple's on-device tools, but we have found its capabilities lacking for some languages in this list, and that operating system updates may break previously working langauges.

To support more languages, you can subclass and customize `StandardDictationService`, implement `DictationService` from scratch, or use `KeyboardKitDictationPlugin` for more functionality.


[Pro]: /pro