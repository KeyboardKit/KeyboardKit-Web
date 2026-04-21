---
title:  KeyboardKit 6.6 is out
date:   2022-11-26 08:00:00 +0100
tags:   releases emojis gestures views

pro:    /pro

tweet:  https://twitter.com/GetKeyboardKit/status/1596625090761805825
toot:   https://techhub.social/@keyboardkit/109412367859671569

release-notes: https://github.com/KeyboardKit/KeyboardKit/releases/tag/6.6.0
---

KeyboardKit 6.6 is out, with a brand new gesture engine, new emoji capabilities and a bunch of adjustments and bug fixes to make the typing experience better than ever before.


## New gesture engine

KeyboardKit 6.6 adds a new gesture engine that aims to make typing feel more like it does in the native keyboards. This engine is also applied to the emoji keyboards, which means that you have the same gestures, as well as support for input and action callouts.

Since typing is such an important part of this library, the new gesture engine can be toggled off if you find problems with it:

```
FeatureToggle.shared.toggleFeature(.newButtonGestureEngine, .off)
```

Note that the new gesture engine is only available in iOS 14+. Devices running iOS 13 will get the old gesture engine, even if you toggle on this feature.


## New emoji capabilities

KeyboardKit 6.6 adds new emoji capabilities, such as a unicode id and name, as well as support for skin tone variants (Pro feature).

For instance, you can now get additional emoji information, such as a unique unicode identifier and the unicode-based name of an emoji:

```swift
let emoji = Emoji("😀")
let emojiId = emoji.unicodeIdentifier // -> \\N{GRINNING FACE}
let emojiName = emoji.unicodeName // -> Grinning Face
```

This means that it will now be possible to localize all emojis and implement features such as search on top of this information.

Furthermore, [KeyboardKit Pro]({{page.pro}}) unlocks skin tone variant information, such as:

```swift
Emoji("👍").hasSkinToneVariants     // true
Emoji("🚀").hasSkinToneVariants     // false

Emoji("👍🏿").neutralSkinToneVariant  // 👍

Emoji("👍").skinToneVariants        // 👍👍🏻👍🏼👍🏽👍🏾👍🏿
Emoji("👍").skinToneVariantActions  // The above variants as keyboard actions
```

This is used by the emoji keyboard, which means that tapping an emoji will show a callout, and long pressing emojis that have skin tone variants shows a callout with these variants.


## New buttons

The two new buttons that are used to enable the new keyboard button gestures - `GestureButton` and `ScrollViewGestureButton` - are now available to use in any way you want. Just make sure to consider accessibility before you add complex gestures to a view.


## Conclusion

KeyboardKit 6.6 adds a lot of new things, which hopefully makes your keyboards feel even closer to the native keyboards. Other than that, it's a pretty large release, so see the [release notes]({{page.release-notes}}) for more details about this release.