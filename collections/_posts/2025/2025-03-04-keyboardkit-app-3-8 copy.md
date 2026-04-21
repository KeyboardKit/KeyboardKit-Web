---
title:  KeyboardKit App 3.8
date:   2025-03-04 08:00:00 +0100
tags:   app

image-show: 0
image: /assets/versions/app-3_8.jpg
assets: /assets/blog/25/0309/
---

Version 3.8 of the [KeyboardKit app](/app) is out! This update adds powerful features from KeyboardKit Pro, including support for more layouts, Vietnamese TELEX, VIQR and VNI, emoji autocomplete, etc.

![KeyboardKit header image]({{page.image}})


## Multiple Layouts

The app now supports adding the same language many times, once for every layout type that each language supports. This makes language settings work more like the one in the native iOS Settings.

This means that you can easily use AZERTY instead of QWERTY for each language that supports it, or add multiple layouts for the same language. You can also use the new Colemak and Dvorak layouts.

![A screenshot of Dvorak layout on iPhone]({{page.assets}}dvorak.jpg){:class="medium"}

Dvorak and Colemak are supported by all languages that support QWERTY, QWERTZ, and AZERTY.


## Vietnamese (Beta)

The app now supports Vietnamese TELEX, VIQR and VNI, with each supporting QWERTY, QWERTZ, AZERTY, and Colemak.

![A screenshot of Vietnamese layouts]({{page.assets}}vietnamese.jpg)

Since this is a beta feature, please give it a try and report bugs you find and suggest improvements.


## Emoji Autocomplete

The app now supports colon-based emoji autocomplete, which integrates with the autocomplete:

![A screenshot of emoji colon search]({{page.assets}}emojis.jpg){:class="medium"}

Just type a colon to start colon matching that lists matching emojis in the autocomplete toolbar.


## More Settings

The app has many more settings, e.g. support for one hand typing, adding a language menu to the spacebar, etc. You can also toggle emoji autocomplete on and off.


## Misc. Improvements and Bug Fixes

The app now handles thread lockings better, which could previously freeze the app. It also fixes a race condition in the setting sync between the app and keyboard, to avoid glitches in the keyboard.

This version also improves the action callout by requiring less swiping and by making callout items less wide when needed. It also fixes swipes on RTL devices.


## Conclusion

Version 3.8 of the app adds a bunch of new features to make the typing experience even better. Download it from the [App Store]({{site.urls.appstore}}) today and let us know what you think. 