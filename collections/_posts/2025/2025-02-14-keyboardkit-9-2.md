---
title:  KeyboardKit 9.2 is out
date:   2025-02-14 08:00:00 +0100
tags:   releases layout localization settings host-app

image-show: 0
image: /assets/versions/9_2.jpg
assets: /assets/blog/25/0214/

redirect_from: /blog/2025/02/11/keyboardkit-9-2

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.2.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.2.0
---

KeyboardKit 9.2 is out! 🚀 This version adds more settings and makes it possible to use alternate keyboard layouts for locales that support it. Let's take a look!

![KeyboardKit header image]({{page.image}})


## More Settings

KeyboardKit 9.2 adds many new settings and environment properties, e.g. for the space long press behavior, trailing space action, input toolbar, and keyboard dock edge. 

![A screenshot of the new settings]({{page.assets}}screenshot-settings.jpg){:class="medium"}

These new settings are added to the KeyboardKit Pro settings screens as well, which means that it's as easy for you to change them with code, as it is for your users to change them in the app.


## Colemak

KeyboardKit 9.2 adds Colemak support, and enables it for locales that are compatible with QWERTY, AZERTY & QWERTZ. It can be picked from KeyboardKit Pro's new layout type picker.


## Alternate Keyboard Layouts

KeyboardKit 9.2 makes it possible to use alternate keyboard layouts for locales that support it, and add many keyboards for locales that support QWERTY, AZERTY, QWERTZ & Colemak.

<div class="grid col3 images">
    <img src="{{page.assets}}screenshot-layouttype-1.jpg" />
    <img src="{{page.assets}}screenshot-layouttype-2.jpg" />
    <img src="{{page.assets}}screenshot-layouttype-3.jpg" />
</div>

The new layout capabilities are used by the locale context menu and KeyboardKit Pro locale screen, which means that you can let users pick between supported layouts when adding a locale.

This is powered by new types like `Keyboard.AddedLocale` and `Keyboard.LayoutType` and is honored by `KeyboardView` and all of KeyboardKit Pro, without having to write any additional code.

Since not all locales support multiple layouts, KeyboardKit has new APIs to handle alternate layouts.


## Host Application Improvements

KeyboardKit 9.2 makes the `hostApplicationBundleId` auto-persisted, so that it can be read from the main app target, when it's opened from the keyboard to perform certain operations.


## Conclusion

KeyboardKit 9.2 contains many new settings, and features that makes KeyboardKit even better. For more info, see the [KeyboardKit]({{page.release}}) and [KeyboardKit Pro]({{page.release-pro}}) release notes. 