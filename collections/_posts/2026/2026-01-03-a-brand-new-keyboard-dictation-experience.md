---
title:  A brand new keyboard dictation experience
date:   2026-01-03 08:00:00 +0100
tags:   pro dictation

image-show: 0
image: /assets/blog/26/0103/image.jpg
assets: /assets/blog/26/0103/
---

KeyboardKit 10.2 will feature a new dictation experience: in-keyboard dictation. This is a huge improvement for keyboard-based apps that rely heavily on dictation.

## The current dictation method

As you may know, iOS keyboard extensions are strictly limited by Apple and can't do as much as you may need. For instance, dictation is hard since a keyboard can't access the device microphone.

KeyboardKit currently works around this strict limitation by letting the keyboard open the main app to start and perform dictation, then navigate back to the keyboard to apply the result.

While this works fairly well, it's a lackluster experience for keyboards that rely heavily on dictation. This is why we are happy to announce a brand new dictation method: in-keyboard dictation.

## The new dictation method

In-keyboard dictation method will only open the main app to start dictation if needed, then navigate back to the keyboard to perform dictation, keeping an open connection to the dictation engine.

![In-keyboard dictation screenshot]({{page.assets}}/preview.jpg){:class="medium"}

The dictation engine will stay open as long as the main app is alive. This lets the user perform many subsequent dictation operations without having to open the main app, which is a big improvement.

Together with this experience comes a new `Dictation.ProgressView` which is automatically added to the main `KeyboardView` while dictation is active, as well as a `Dictation.Indicator`.

When applying a dictation result, the keyboard will put dictation in idle mode instead of stopping it. This keeps the dictation going, while stopping it from writing to the observed result.

## An improved user experience

The user experience will be greatly improved, since the keyboard will only open the main app *one time*, instead of each time the user wants to dictate.

The result is a seamless dictation experience where the user can start dictation many times without leaving the keyboard. This makes the dictation feature much more useful.

The new progress and indicator views gives you and the user full control. Users can stop dictation at any time, and you can add these views wherever you need them, and customize them freely.

## When will this be available?

The new dictation experience will be available as a beta experiment in KeyboardKit 10.2, which will be released later in January. Don't hesitate to reach out to discuss how this can help you improve your keyboard.