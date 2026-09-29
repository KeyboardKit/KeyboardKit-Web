---
title:  A gentle reminder to upgrade KeyboardKit to the latest version
date:   2026-09-23 06:00:00 +0100
tags:   general

assets: /assets/blog/26/0923/
image: /assets/blog/26/0923/image.jpg
image-show: 0

release:        https://github.com/KeyboardKit/KeyboardKit/releases/tag/10.9.6
host-app-post:  /blog/2026/08/24/evaluating-a-new-host-application-approach
gestures-post:  /blog/2026/09/09/gesture-problems-in-ios-27-public-beta
issue:          https://github.com/KeyboardKit/KeyboardKit/issues/1092
---

With iOS 27 out and with new devices on the way, this is a gentle reminder to upgrade to the [latest version]({{site.urls.github}}) of KeyboardKit, to fix some problems in the most recent iOS versions.


## iOS 26.4 - Host application problems

By being able to identify the [host application]({{site.urls.terminology}}) a custom keyboard can customize itself for the app that's using it, and can allow the [main application]({{site.urls.terminology}}) to navigate back to the keyboard, for instance after starting dictation.

The host application bundle ID resolver suddenly stopped working in iOS 26.4. This affected many keyboards, including those that don't use KeyboardKit. As described in [this post]({{page.host-app-post}}), KeyboardKit 10.9 made this work again.


## iOS 27 - SwiftUI gesture lag

As described in [this post]({{page.gestures-post}}), keyboard gestures started lagging in iOS 27. A press action is sometimes delayed until release, or after a ~1s delay. Since the action still triggers, things may seem to work, but typing feels "off".

KeyboardKit 10.9.4 fixed this by rebuilding the gesture engine from scratch. The new engine feels a lot snappier and keeps the same public API, which means that you get the fix without changing any code.


## iOS 27.2 Beta - Layer geometry crashes

A developer recently [reported]({{page.issue}}) that their keyboard extension crashed after typing a few words on iOS 27.2 beta, with a `CALayerInvalidGeometry` exception caused by a SwiftUI layer with `NaN` bounds.

The crash had no application frames at all, which made it very hard to attribute. It turns out that upgrading from KeyboardKit 10.3 to 10.9.5 fixed the problem, without any code changes.


## SwiftUI freezes

Previously working code has begun freezing on later versions of iOS. For instance, enabling the additional input toolbar would trigger an infinite loop, which would result in a blank keyboard.

The input toolbar freeze was caused by a default init parameter, which has been in the code for a very long time. KeyboardKit 10.9.6 fixes this freeze by instead passing in an explicit value.


## KeyboardKit 11

With KeyboardKit 11 being scheduled to release on October 1st, upgrading your application to use the latest version of KeyboardKit will make it a lot easier to migrate to KeyboardKit 11.


## Conclusion

KeyboardKit keeps up with changes in iOS so that you don't have to. Upgrade to the [latest version]({{site.urls.github}}) to make sure that your keyboard works as well as possible on the latest iOS versions.

If you run into any problems when upgrading, don't hesitate to [reach out](mailto:info@keyboardkit.com).
