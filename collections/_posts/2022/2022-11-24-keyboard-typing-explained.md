---
title:  Keyboard Typing Explained
date:   2022-11-24 06:00:00 +0100
tags:   gestures
---

KeyboardKit is getting a new gesture engine that will make the typing experience a lot closer to the one in native iOS keyboards. But have you ever considered what is involved in typing on a software keyboard? It's actually a complex combination of gestures and features. Let's take a closer look at it.

Typing on a keyboard is not as trivial as it may seem, where it at first glance may seem like all you have to do is to handle key presses and the occasional long press.

In reality, typing on a software keyboard involves a lot of gestures that have to play well together, as well as many sophisticated features that we may take for granted.


## Character keys

For instance, although you may think that a character key should just insert the character when it's **released**, but only if it's released within its bounds. it should also display an input callout when it's **pressed**, hide it when it's **released** and present an action callout when it's **long pressed**, but only if a character has secondary characters. If so, the secondary callout should hide the input callout, and the key should *not* insert the character if it's released after the action callout has been presented. 

Regarding the secondary callout, it must update the selected character when you keep your finger **pressed** and **swipe** sideways, plus hide itself if you move your finger too far away. It should also present itself with a leading or trailing alignment, depending on which screen edge it's closest to.


## Action keys

Non-input keys also involve complex behaviors. For instance, a shift button should switch between shift up and shift down when its **released**, but to caps-lock when it's **double-tapped**. The space bar should insert a space when it's **released**, but start moving the input cursor when it's **long pressed** and **panned**. The backspace button should delete backwards a backspace when it's **pressed**, but it should also **repeat** that action until it's **released**. We may also want to perform some actions for all buttons when the gesture ends, such as making sure to reset any ongoing state.


## Audio and haptic feedback

Software keyboards may also enhance the typing experience by providing the user with audio and haptic feedback, but it's then important for a key to be able to determine if it will actually trigger an action, before it triggers this kind of feedback, otherwise it may confuse the user.


## Swipe to type

In addition to all the gestures mentioned above, native keyboards have "swipe to type" support for many languages, that lets you swipe between characters to let the keyboard guess which word you intended to type. Swipe to type requires gestures to be applied to the entire keyboard instead of on individual keys, and for a layout to be able to detemine which key exists on which coordinate.


## Predictive typing

Another important keyboard feature, is Predictive Typing, where a keyboard will slightly adjust the tap area of an input key based on the probability that it's going to be tapped next. This means that keys that are more likely to be tapped will be given a slightly bigger tap area, which increases the chance that the user actually taps them. This a big part of why typing on iOS keyboards sometimes feels like magic...or at least more precise than you may expect it to be.


## Conclusion

As you can see, typing on a software keyboard, at least on iOS, is a bit more complex than we may expect at first, and involves many complex gestures and features.

Alhough KeyboardKit has supported all these gestures above for a long time, the typing experience has so far been decimated by an almost undetectable delay that has made typing feedback feel not as immediate as in native iOS keyboards, in a way that was hard to measure and reason about.

It's therefore a pleasure to announce that a **brand new gesture engine** is coming in KeyboardKit 6.6. The old engine has been rewritten from scratch and now works with *one single gesture*, which means that feedback will be immediate and there is no risk of conflicting gestures. For scroll views, which for instance are used in emoji keyboards, there is a scroll view-specific engine works great in combination with the scroll view gestures.

Since the typing experience is at the heart of the keyboard, the new gesture engine will be feature toggled and force you to actively enable it at first, until it's verified to work as good as it's intended to. Once it's verified to works well, the feature toggle will be removed.

KeyboardKit 6.6 is planned for release in early December.