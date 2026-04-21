---
title:  KeyboardKit 7.2
date:   2023-03-20 08:00:00 +0100
tags:   releases autocomplete styling themes multi-platform

assets: /assets/blog/23/0320/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.2.0

toot:   https://techhub.social/@keyboardkit/110057656044269753
tweet:  https://twitter.com/GetKeyboardKit/status/1637924126340837380?s=20

post-autocomplete: /blog/2023/03/18/autocomplete-is-coming-to-macos
---

KeyboardKit 7.2 is out, with many appearance and autocomplete news. It makes the KeyboardKit Pro autocomplete available on all platforms and make it easier than ever to style your keyboard.


## Autocomplete updates

The brand new `LocalAutocompleteProvider` that was introduced in KeyboardKit 7.1 has been marked as `open`, which means that you can both enable it with the feature toggle as before, but also create an instance of it directly. Since it's open, you can also inherit and customize it.

The `LocalAutocompleteProvider` has been improved by extracting the platform-specific parts to separate engines, which means that the class is now available on all supported platforms. This means that you will not have to make `#if os(iOS)` checks when referring to it, which hopefully will make your code a bit cleaner.

Note that the engine is disabled on watchOS, since local autocomplete capabilities are not available on watchOS. Instead, this engine just returns the currently typed word, wrapped in quotations.

Due to a bug found in the new provider, the `StandardAutocompleteProvider` will remain as the standard one for another minor version bump, after which it will be replaced by the new provider. Please report any bugs and findings, so that we can improve the new provider before this is done.

Have a look at [this post]({{page.post-autocomplete}}) for more information about the autocomplete changes. 


## Disabling autocomplete

The `AutocompleteContext` has been extended with an `isEnabled` property that can be used to disable autocomplete temporarily or permanently.

This makes it easy to stop autocomplete from interfering with certain actions, since the context will otherwise always update even if you're currently not displaying an autocomplete toolbar, and may replace text as you insert it into the proxy.


## Appearance updates

KeyboardKit Pro 7.2 makes it easier than ever to style keyboards, with the brand new theme engine that is available to Gold and Enterprise licenses.

This engine lets you define `KeyboardTheme` themes that define various keyboard styles. You can then use the new `KeyboardThemeAppearance` with any theme to easily style a `SystemKeyboard`. The new appearance is `open`, so you can inherit and customize it as well.

If you find it confusing to have both `appearances`, `styles` and now `themes`, but the idea here is that appearances are dynamic style providers, while themes are static ones. An appearance gives you full control over every little aspect of a keyboard, and can adapt depending on action, context (dark more, portrait/landscape etc.), while a theme always returns the same styles. A theme is in turn much easier to define, share and reuse, and KeyboardKit Pro will continously be updated with new themes, which you can use as is, or use as templates to create your own themes.

The `KeyboardThemeAppearance` then gives you the best of two worlds, where you can use a static theme in a dynamic appearance and tweak any parts of a base style that is defined by the theme.


## Pre-defined themes

### Cotton Candy

`KeyboardTheme.cottonCandy` is a pink and blue trip to fluffy delight:

![Cotton Candy]({{page.assets}}cotton-candy.png){:width="500px"}

### Neon Nights

`KeyboardTheme.neonNights` is a metropolitian color explosion.

![Neon Nights]({{page.assets}}neon-nights.png){:width="500px"}

### Tron

`KeyboardTheme.tron` is a black and blue, digital adrenaline rush.

![Tron]({{page.assets}}tron.png){:width="500px"}

You can use these themes in your own keyboads, or tweak them to create your own visual styles. More themes are coming in future versions.


## Conclusion

KeyboardKit 7.2 brings the standard autocomplete provider to all platforms and introduces a new theme engine that makes it easier than ever to style your keyboards. There are also many smaller additions, improvements and bug fixes. For a complete list of changes, see the [release notes]({{page.release}}).