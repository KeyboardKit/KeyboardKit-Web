---
title:  KeyboardKit 8 - Release Candidate 3
date:   2023-10-26 08:00:00 +0100
tags:   releases

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/8.0-rc3
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/8.0-rc3
---

KeyboardKit 8 RC 3 is out for public access! It adds more migration guides, makes system keyboard previews easier to use and makes the emoji keyboard resolve automatically even for custom views.


## Migration guides

Some missing migration guides have been detected as more apps are migrating to KeyboardKit 8. They have been added to RC3 to remove breaking changes.

The intention with the 8.0 release is that you should be able to upgrade from 7 with no breaking changes, except with changes like the `InputSet`, where it's not possible.

This means that you will get a varying amount of deprecation warnings depending on how much of the library you use. Take your time and go through them, and migration shouldn't be too hard.


## System Keyboard Previews

There have been a bunch of improvements made to the system keyboard previews, where 4 different previews have been replaced with a single one. It's easier to use and behaves better.


## Emoji Keyboard improvements

The emoji keyboard will now be provided as the default view, even when you set up KeyboardKit Pro with a custom view.

This means that if you return `{ $0.view }` in KeyboardKit, where the emoji keyboard isn't available, you will get an empty placeholder, while KeyboardKit Pro returns the emoji keyboard.


## ...and much more

KeyboardKit 8.0 is a massive update to KeyboardKit, with many important changes. You will most probably be affected by some of the deprecations, but the library will guide through it.

The [release notes]({{page.release}}) has a full list of changes, as well as downloads for the updated documentation for KeyboardKit and [KeyboardKit Pro]({{page.release-pro}}).