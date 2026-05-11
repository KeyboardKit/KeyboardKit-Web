---
title:  Custom iOS Keyboard Extensions and Liquid Glass
date:   2025-07-28 06:00:00 +0100
tags:   styling apple

image-show: 0
image: /assets/blog/25/0728/image.jpg
assets: /assets/blog/25/0728/
---

Apple's new software design system Liquid Glass is soon here, and with it some big changes to how the keyboard looks. Let's take a look at what's coming and how KeyboardKit can help.

![Blog header image]({{page.assets}}header.jpg)

WWDC 25 unveiled Apple's new Liquid Glass design system, which aims to unify the software design across all platforms (iOS, iPadOS, macOS, tvOS, watchOS, and visionOS).

This is a huge undertaking, and while the summer months have been pretty rough, the latest public and developer betas are starting to come together nicely.


## iOS 26 Keyboard Design

Although Apple demonstrated Liquid Glass extensively during WWDC, they were avoiding showing the keyboard, which could only be glimpsed for a short second.

This may be due to the fact that the native keyboard was pretty broken in the first developer beta:

![A first glimpse of the Liquid Glass keyboard]({{page.assets}}phone.jpg)

This has improved in later beta updates, but the design is still pretty broken, where key heights and insets differ between languages, screen orientations, and device types:

<div class="grid col2 images">
    <img src="{{page.assets}}keyboard-english.jpg" title="A native English keyboard in iOS26" alt="A screenshot of a native English keyboard in iOS26" />
    <img src="{{page.assets}}keyboard-swedish.jpg" title="A native Swedish keyboard in iOS26" alt="A screenshot of a native Swedish keyboard in iOS26" />
</div>

We hope these are temporary glitches and that the design will be consistent when iOS 26 goes live.


## KeyboardKit Design Updates

KeyboardKit 9.9 will update its standard design to harmonize with Liquid Glass, as can be seen here:

<div class="grid col3 images">
    <img src="{{page.assets}}keyboardkit-liquid-light.png" alt="A screenshot of a KeyboardKit keyboard where the design is adjusted for Liquid Glass"/>
    <img src="{{page.assets}}keyboardkit-liquid-light-primary.png" alt="A screenshot of a KeyboardKit keyboard where the design is adjusted for Liquid Glass"/>
    <img src="{{page.assets}}keyboardkit-liquid-dark-primary.png" alt="A screenshot of a KeyboardKit keyboard where the design is adjusted for Liquid Glass"/>
</div>

You may notice how system and input keys now have the same color, and that the primary key uses new icons instead of text.

These changes will automatically apply to devices that run iOS 26 or later. You don't have to enable it, but can disable it if you need time to adapt to the new design.


## Remaining Work

You may notice some differences between native iOS 26 keyboards and KeyboardKit's new design.

First, native input keys have a bolder font weight in iOS 26, while KeyboardKit still use a light weight. This is because `.regular` is too thick and we look for a way to match the native weight.

Second, KeyboardKit will use a consistent row heights and edge insets across locales. We hope and believe that the current iOS 26 layout differences are bugs that will be fixed before iOS 26 goes live.



## Conclusion

Regardless of these tiny differences, KeyboardKit's updated design for iOS 26 will make your custom keyboard fit the new Liquid Glasss design system without any additional work on your end.

KeyboardKit 9.9 beta will be available in the second half of August. It will be the last minor version in the KeyboardKit 9 lifecycle, and will be followed by KeyboardKit 10 later in September.