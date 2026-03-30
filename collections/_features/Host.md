---
title: Host Application Utilities
description: Identify and open other apps

hero:
  emoji: 🏠

top-message:
  text: OBS - This feature experiences serious problems in iOS 26.4!
  type: alert
  link:
    text: Read more here.
    url: /blog/2026/03/02/ios-26-4-host-application-bundle-id-bug
---

Some keyboards may need to identify the [host application](/terminology), which is the app that is currently using the keyboard. This is needed to configure or style the keyboard for certain apps.

Keyboard lets you read the bundle ID of the host application. This is used by features like [dictation](/features/dictation), where the app should navigate back to the keyboard when dictation finishes.


## Important Information!

In iOS 26.4, Apple has removed the private API that was used to resolve the host application bundle ID. This causes the `hostApplicationBundleID` to always be `nil`. You can read more about it [here]({{page.top-message.link.url}}).

This means that it's currently impossible for a keyboard extension to know which app it's being used in. If your keyboard relies on this information, we strongly recommend that you reach out to Apple.

Until this is resolved, if ever, and if it makes sense for your app, we recommend that you design it to let user pick the current host application - for instance with the KeyboardKit Pro feature below.



## 👑 KeyboardKit Pro

[KeyboardKit Pro][Pro] unlocks ways to further identify and integrate with a large list of well-known apps. This is a manually curated list, that can be extended with more apps to increase its use.

[Pro]: https://github.com/KeyboardKit/KeyboardKitPro
