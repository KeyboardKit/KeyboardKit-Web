---
title:  A gentle reminder to upgrade KeyboardKit to the latest version
date:   2026-09-23 06:00:00 +0100
tags:   general

assets: /assets/blog/26/0923/
image: /assets/blog/26/0923/image.jpg
image-show: 0

release:        https://github.com/KeyboardKit/KeyboardKit/releases/tag/10.9.5
host-app-post:  /blog/2026/08/24/evaluating-a-new-host-application-approach
gestures-post:  /blog/2026/09/09/gesture-problems-in-ios-27-public-beta
issue:          https://github.com/KeyboardKit/KeyboardKit/issues/1092
---

With iOS 27 out and with new devices on the way, this is a gentle reminder to upgrade to the [latest version]({{site.urls.github}}) of KeyboardKit, to fix problems in the recent and upcoming iOS versions.

Here are a couple of pretty severe problems that you will avoid by upgrading to [KeyboardKit 10.9.5]({{page.release}}) or later.


## iOS 26.4 - Host application problems

Being able to identify the [host application]({{site.urls.terminology}}) lets a keyboard customize itself for the app that's using it, and can allow the [main application]({{site.urls.terminology}}) to navigate back to the keyboard.

In iOS 26.4, the host application bundle ID resolver suddenly stopped working. This affected many keyboards, including those that don't use KeyboardKit.

As we described in [this post]({{page.host-app-post}}), we evaluated a completely new approach, which was then added in KeyboardKit 10.9. If your keyboard depends on the host application, upgrading to KeyboardKit 10.9 makes it work again.


## iOS 27 - SwiftUI gesture lag

As we described in [this post]({{page.gestures-post}}), keyboard gestures started randomly lagging in iOS 27. A press action is sometimes delayed until you release the key, or triggers after a ~1s delay.

Since the press action still triggers, things may appear to work. But typing feels "off", and once you know what to look for, the problem is painfully obvious.

KeyboardKit 10.9.4 fixed this by rebuilding the gesture engine from scratch. The new engine feels a lot snappier and keeps the same public API, which means that you get the fix without changing any code.


## iOS 27.2 Beta - Layer geometry crashes

A developer recently [reported]({{page.issue}}) that their keyboard extension crashed after typing a few words on iOS 27.2 beta, with a `CALayerInvalidGeometry` exception caused by a SwiftUI layer with `NaN` bounds.

The crash had no application frames at all, which made it very hard to attribute. It turns out that upgrading from KeyboardKit 10.3 to 10.9.5 fixed the problem, without any code changes.

If you're on an older version and see strange, hard-to-trace crashes in iOS 27, upgrading is the first thing to try.


## KeyboardKit 11

With KeyboardKit 11 being scheduled to release on October 1st, upgrading your application to use the latest version of KeyboardKit will make it a lot easier to migrate to KeyboardKit 11.


## Conclusion

KeyboardKit keeps up with changes in iOS so that you don't have to. Upgrade to the [latest version]({{site.urls.github}}) to make sure that your keyboard works as well as possible on the latest iOS versions.

If you run into any problems when upgrading, don't hesitate to [reach out](mailto:info@keyboardkit.com).
