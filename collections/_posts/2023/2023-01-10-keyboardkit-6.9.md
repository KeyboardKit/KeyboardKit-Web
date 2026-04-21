---
title:  KeyboardKit 6.9 is out
date:   2023-01-10 08:00:00 +0100
tags:   releases multi-platform

pro:    /pro
release-notes: https://github.com/KeyboardKit/KeyboardKit/releases/tag/6.9.0
---

KeyboardKit 6.9 is out, with many new features, as well as changes and deprecations that will help you prepare for and transition to KeyboardKit 7.0, which will be a big step forward for the library.


## Smoother KeyboardKit 7 transition

Although KeyboardKit 7.0 will have many breaking changes, most of them in types that you most likely are not using directly, upgrading to 6.9 will give you a lot of guidance to how to best prepare your code for this major step. You will get deprecation warnings that in many ways can help you adjust your code, so make sure that you upgrade to 6.9 for a smoother transition to 7.0.


## New features

KeyboardKit 6.9 comes with many new features, like new `KeyboardAction` extensions to help you analyze action type, new `KeyboardContext` properties for screen size and interface orientation, and new `KeyboardLocale` extensions to help you filter out LTR and RTL locales. 

When it comes to appearance, `KeyboardAppearance` has a new `keyboardEdgeInsets` property that lets you inset the keyboard edges, and `KeyboardAppearanceViewModifier` is a new modifier that lets you set the keyboard appearance for SwiftUI text field and editors.

KeyboardKit 6.9 adds more ways to inspect the enabled and active state of a keyboard extension. For instance, `KeyboardEnabledLabel` is a new style-based view that can display keyboard states. `KeyboardEnabledStateInspector` has new properties and also supports bundle ID wildcards, which lets you inspect the active state for multiple keyboard extensions at once.

There is a new `Settings` namespace, that has a new `KeyboardSettingsLink` that can be used to link to System Settings. There is also new a url provider protocol that is implemented by `URL`.

Finally, more types, initializers and properties have been made public. Some even open. This gives you access to more functionality than before.


## Multi-platform improvements

KeyboardKit 6.9 makes even more changes to help prepare for better multi-platform capabilities. Even though you will most likely be using KeyboardKit to build custom keyboards for iOS, having fewer dependencies to UIKit will make the code easier to manage for multiple platforms. 

For instance, there's a new `InterfaceOrientation` that can be used instead of the UIKit-specific one. `KeyboardContext` replaces its screen orientation with this new type and replaces its device with a platform-agnostic screen size. 


## Behavior changes

KeyboardKit 6.9 changes a bunch of small things, to improve the overall keyboard experience. For instance, the action callout has been tweaked to use the same height as the input callout, which gives more harmony to the UI. It also adjusts some timing functions, such as making the long press delay configurable and increasing the KeyboardKit Pro full document proxy read operation delay to perform better on older devices.

The iPhone layout will also add contextual buttons to the system keyboard. You will now get a `.` on `Go` keyboards, as well as `@` and `.` on e-mail keyboards. The iPad layout will also increase the font size of some keys, to make the iPad keyboard look more like the system one.


## Deprecations and breaking changes

There are many deprecations in this release, which aim to guide you to a smoother KeyboardKit 7.0 transition later in Q1. See the [release notes]({{page.release-notes}}) for a complete list of deprecations.

Furthermore, it's sometimes not possible to do what you want without breaking changes. Although KeyboardKit aims to keep breaking changes to major versions, there are a few in this release, that couldn't be avoided. See the [release notes]({{page.release-notes}}) for a complete list of breaking changes.


## Conclusion

KeyboardKit 6.9 is a huge release that brings a lot of new features and adjustments to the table, as well as many deprecations and a few minor breaking changes. See the [release notes]({{page.release-notes}}) for more info about this release.

Work will now start with the next major version, but while this is ongoing, please reach out with any problems that you find, so that 6.x can be stabilized before bumping the library to 7.0.