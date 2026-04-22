---
title: Host Application
description: Identify and open other apps

hero:
  emoji: 🏠
---

Some keyboards may need to identify the [host application]({{site.urls.terminology}}), which is the app that is currently using the keyboard. This is needed to configure or style the keyboard for certain apps.


## Host Bundle ID

Keyboard lets you read the bundle ID of the host application. This is used by features like [dictation](/features/dictation), where the app should navigate back to the keyboard when dictation finishes.


## Important Information

In iOS 26.4, Apple removed the private API that was used to resolve the host application bundle ID. This causes the `hostApplicationBundleID` to always be `nil`. You can read more about it [here]({{page.top-message.link.url}}).

This means that it's currently impossible for a keyboard extension to know which app it's being used in. If your keyboard relies on this information, we strongly recommend that you reach out to Apple.

Until this is resolved, if ever, and if it makes sense for your app, we recommend that you design it to let user pick the current host application - for instance with the KeyboardKit Pro feature below.



## KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks a `HostApplication` type that has more ways to further identify and integrate with a large list of well-known apps. This manually curated list can be extended with more apps if needed.

[Pro]: https://github.com/KeyboardKit/KeyboardKitPro
