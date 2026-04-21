---
title:  KeyboardKit 8 - Release Candidate 2
date:   2023-10-24 08:00:00 +0100
tags:   releases

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.0-rc2
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.0-rc2

rc1:    /blog/2023/10/06/keyboardkit-8-rc
---

KeyboardKit 8 RC 2 is now out for public access! This is an update to [release candidate 1]({{page.rc1}}) (rc1) and adjusts a few things to prepare the library for the upcoming release.


## 💡 Changes

A big change in RC2 is that the KeyboardKit Pro `setupPro(...)` function is no longer throwing. Instead, errors are written to a new property, which can be read if the setup fails.

Furthermore, the  `License.register(...)` function has been made async, to support upcoming changes to the license model. This will affect you if you use Pro in the main app.

KeyboardKit Pro updates the license error message and makes it look a lot nicer. It will also be presented as a dialog above the keyboard view, instead of replacing it. It can also be hidden.

Lastly, `KeyboardStyle.Background` lets you define images in more ways, `Emojis.Category` automatically filters out unavailable emojis, and `Emojis.Version` has more capabilities.


## 🐛 Bug fixes

RC2 has more bug fixes. `Emojis.Version` fixes a Unicode 15 error for iOS version availability and `FeedbackConfiguration` is adjusted to no longer use `.enabled` as the disabled audio config.


## Migrating to KeyboardKit 8

The best way to migrate to KeyboardKit 8, is to first upgrade to `7.9.6`, which contains a lot of deprecations to guide the transition. The [RC1 announcement article]({{page.rc1}}) describes this in more detail.


## ...and much more

KeyboardKit 8.0 is a massive update to KeyboardKit, with many important changes. You will most probably be affected by some of the deprecations, but the library will guide through it.

The [release notes]({{page.release}}) has a full list of changes, as well as downloads for the updated documentation for KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}).