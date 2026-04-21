---
title:  Improved autocomplete
date:   2023-03-11 08:00:00 +0100
tags:   autocomplete

assets: /assets/blog/23/0311/

toot:   https://techhub.social/@keyboardkit/110004348468210559
tweet:  https://twitter.com/GetKeyboardKit/status/1634512162260434944?s=20
---

The KeyboardKit autocomplete experience will be drastically improved in the next minor version. Let's take a look at what it does and how you can try it out and provide feedback before it goes live.

The KeyboardKit Pro `StandardAutocompleteProvider` has previously simulated autocorrect by simply rendering any matching suggestion as autocorrect:

![Old behavior]({{page.assets}}1_old.jpeg){:class="medium"}

This has been a way to make the KeyboardKit `SystemKeyboard` look even more like the native iOS keyboards, but it has so far only been a visual thing and not provided real autocorrect capabilities.

This will change in the next minor version of KeyboardKit, which will introduce a new autocomplete provider that enables autocorrect for all supported locales.

The new provider will autocorrect the current word, and will also add the currently typed word as a leading suggestion, wrapped in locale-specific quotation marks like in the native iOS keyboards:

![New behavior]({{page.assets}}2_new.jpeg){:class="medium"}

Adding the currently typed word like this means that users will be able to bypass any autocorrect suggestions that shouldn't be applied, much like you can in the native keyboards.

Although this new provider will be enabled in the next minor update, you can give it a try today, by toggling on this feature in `viewDidLoad`:

```swift
FeatureToggle.shared.toggleFeature(.newAutocompleteEngine, .on)
```

You can also try it out in the demo application, where the Pro demo keyboards already have this feature toggled on by default.

The new provider will hopefully help users type even better on KeyboardKit powered keyboards. Your feedback is however critical in making it as good as it can be before it replaces the current provider, so please try it out and see how it works for you and share any feedback you may have.