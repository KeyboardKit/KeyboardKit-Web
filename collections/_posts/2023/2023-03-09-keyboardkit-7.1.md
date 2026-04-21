---
title:  KeyboardKit 7.1
date:   2023-03-09 08:00:00 +0100
tags:   releases autocomplete localization layout

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.1.0

toot:   https://mastodon.social/@danielsaidi/109995065984705063
tweet:  https://twitter.com/GetKeyboardKit/status/1633918412052221954?s=20
---

KeyboardKit 7.1 is out! This minor release fixes a few bugs that were introduced in the 7.0 release, adds a brand new autocomplete experience, improves the locale picker context menu and makes it easier than ever to setup KeyboardKit.


## Simplified setup

KeyboardKit currently only had a setup function that took a view value. This could lead to memory leaks when the view required a `KeyboardInputController` reference, if you forgot to make the input controller reference `weak` or  `unowned`.

KeyboardKit 7.1 therefore adds a new setup function to the mix, that takes a view builder that is called with an `unowned` controller reference. This makes it easy to use the controller in the view, without having to handle not retaining the controller reference.

Furthermore, KeyboardKit will now by default set up a `SystemKeyboard`, which means that you don't have to setup a view to use a regular system keyboard. You can of course still override `viewWillSetupKeyboard` if you want to use a custom view or customize the `SystemKeyboard`.


## New autocomplete provider

KeyboardKit Pro has a new autocomplete provider that produces much better results than the current standard provider. You can try it out by toggling on this feature in `viewDidLoad`:

```swift
FeatureToggle.shared.toggleFeature(.newAutocompleteEngine, .on)
```

If this new engine behaves as well as it should, it will replace the current one in a future version.


## New locale switcher

The locale context menu that is shown when long pressing the locale switcher button (or space, if it's configured that way) has been refactored to work and look a lot better on iOS 16 and macOS 12. 

The newl menu opens with a much smoother animation and keeps the keyboard visible, instead of popping out the key and blur the background. This will make switching locales a lot smoother.


## Bug fixes

KeyboardKit 7.0 unfortunately had a code line removed, that caused some iPad layouts to break. KeyboardKit 7.1 fixes this and tweaks a bunch of Pro layouts to match their native look even more.


## Conclusion

KeyboardKit 7.1 builds on the momentum from 7.0 by adding a brand new autocomplete provider and locale context menu, while also simplifying the setup, reducing the risk of memory leaks when setting up controller-depending views and fixing a couple of layout bugs. 

You find a complete list of changes in [the release notes]({{page.release}}).