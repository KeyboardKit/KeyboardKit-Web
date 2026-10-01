---
title:  KeyboardKit 11 is out
date:   2026-10-01 06:00:00 +0100
tags:   releases

assets: /assets/blog/26/1001/
image: /assets/versions/11_0.jpg
image-show: 0

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/11.0.0
---

KeyboardKit 11 is out! This major version upgrade is ported to Swift 6.2, and has support for 110+ languages, improved diacritics, new autocomplete & dictation features, a new plugin architecture, and swipe typing tools.

![KeyboardKit header image]({{page.image}})


## TL;DR

The biggest structural changes in KeyboardKit 11, that will most likely affect you, are the Swift 6.2 transition, and how controller state moves from the keyboard context to a new main actor controller context, plus how dictation and host app detection use a new plugin architecture to move sensitive code out of the main library.


## Package Updates

KeyboardKit 11 uses Swift 6.2. This made it possible to remove a lot of dispatch and `MainActor.run` code, which makes the library more stable. This work involved making more types `MainActor`, while keeping most of the library unchanged. The controller state is therefore moved from the `KeyboardContext` to a new main actor-bound `KeyboardControllerContext`, to keep the core context versatile.

The package is also built in a new way that embeds the dSYMs inside the XCFramework. This means that they will automatically be embedded in your app when submitting it to the App Store. No more manual downloads!

The package also ships three new plugins for autocomplete, dictation, and host application, which you can read more about further down.


## New Locales

KeyboardKit 11 almost doubles the number of supported locales, bringing the total to `111`. This was made possible by the improved diacritics engine, which now supports combining marks. As part of this, we have also improved the layout engine and harmonized many layouts, to keep them consistent across configuration changes, and fixed a bunch of incorrect swipe down actions on iPad.

This includes `13` indigenous North American locales (`Apache`, `Blackfoot`, `Chickasaw`, `Chochenyo`, `Choctaw`, `Comanche`, `Kiowa`, `Lushootseed`, `Mvskoke`, `Nez Perce`, `Osage`, `Salish`, and `Wixarika`), `6` Sámi locales (`Kildin Sámi`, `Lule Sámi`, `Pite Sámi`, `Skolt Sámi`, `South Sámi`, and `Ume Sámi`), and `15` other locales (`Afrikaans`, `Basque (France)`, `Basque (Spain)`, `Bosnian`, `English (South Africa)`, `Esperanto`, `Galician (Spain)`, `Kalaallisut`, `Kyrgyz`, `Māori`, `Romansh`, `Samoan`, `Turkmen`, `Yiddish`, and `Zulu`).

We noticed that submitting these fully functional locales to the App Store causes a warning for unsupported locales. Since they are working within the library, we will investigate if we can silence this warning.


## Plugins

KeyboardKit 11 adds a new plugin architecture, which lets us move sensitive code, like permissions and system API usage, out of the core library. This plugin model is an exciting new part of KeyboardKit, and will let us build more capabilities and integrations outside of the core SDK, and let you decide which plugins you want to use.

For instance, the `KeyboardKitDictationPlugin` contains all you need to enable dictation, and contains all the code that requires permissions. Also, the `KeyboardKitHostPlugin` has all the sensitive code needed to resolve the host application, which means that you can choose if you want to include it in your app.

The plugin architecture is an exciting new part of KeyboardKit, and will allow us to build more complex features and integrations outside of the main library, and shield the core library from sensitive code.


## Swipe Typing

Although KeyboardKit doesn't include a swipe typing engine, KeyboardKit 11 adds new layout tools and a new `KeyboardViewDragGestureOverlay` that makes it possible to swipe over the entire keyboard. You should be able to use these tools to provide a swipe typing engine with enough information to enable it in your app.


## Feature Updates

Besides these large updates, KeyboardKit 11 has MANY other feature-specific updates. Please see the [release notes]({{page.release}}) for a full list of changes.


## Conclusion

KeyboardKit 11 is by far our biggest release ever! It builds upon the many drastic improvements made to the library in the 10.9 minor version lifecycle, and sets a solid foundation for the year to come.

We are so excited to release this next major version, and can't wait to hear what you think. Don't hesitate to [reach out]({{site.urls.email}}) with your feedback, and please see the [release notes]({{page.release}}) for a full list of changes.