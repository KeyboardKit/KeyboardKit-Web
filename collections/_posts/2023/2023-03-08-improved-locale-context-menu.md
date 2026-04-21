---
title:  Improved locale context menu
date:   2023-03-08 08:00:00 +0100
tags:   localization

assets: /assets/blog/23/0308/

toot:   https://mastodon.social/@danielsaidi/109989967967718150
tweet:  https://twitter.com/GetKeyboardKit/status/1633592146702876674?s=20
---

KeyboardKit 7.1 will patch a few things that were overlooked in the 7.0 release. One such thing is improving the locale context menu that is presented when long pressing a locale switcher button.

For reference, KeyboardKit 7.0 and earlier versions use a SwiftUI `ContextMenu`, which makes the long pressed view pop out, blur the background and present the context menu:

![Old context menu]({{page.assets}}1_old.gif){:class="medium"}

This menu really pulls you out of the keyboard experience and causes a noticable delay when you select a locale and return to the keyboard. To improve this experience, KeyboardKit 7.1 will instead use a SwiftUI `Menu`, which has a cleaner transition, leaves the keyboard visible and updates it a lot faster when a locale is selected:

![Old context menu]({{page.assets}}2_new.gif){:class="medium"}

This menu is only available in iOS 15 and macOS 12. Earlier versions will keep `ContextMenu`. As you can see in the gifs above, the menu will now place the currently selected locale first and add a `Divider` between the selected locale and all other locales.

`KeyboardContext` has a new `localePresentationLocale` property that can be used to set the locale to use when presenting the locales in this menu. 

For instance, this will make all locales in the menu be presented in German:

```swift
context.localePresentationLocale = KeyboardLocale.german.locale
```

The property is `nil` by default, which will make each locale use its local name.

KeyboardKit 7.0 added a new `spaceLongPressBehavior` property to `KeyboardContext`, which can be used to set if long pressing space should start moving the cursor or present a locale menu.

For instance, this will make the space key present a locale menu when it's long pressed:

```swift
context.spaceLongPressBehavior = .openLocaleContextMenu
```

KeyboardKit 7.1 will unfortunately introduce a breaking change by renaming these options, so you may have to update your code if you have used this feature since upgrading to 7.0.