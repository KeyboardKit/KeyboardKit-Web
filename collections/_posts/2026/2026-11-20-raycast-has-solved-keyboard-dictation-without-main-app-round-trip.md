---
title:  Raycast has solved keyboard dictation without main app round-trip
date:   2026-11-20 07:00:00 +0100
tags:   dictation

assets: /assets/blog/26/1120-2/
image: /assets/blog/26/1120-2/image.jpg
image-show: 0

johan: https://www.linkedin.com/in/johan-thorell-5056247a
raycast: https://raycast.com
stephan: https://www.linkedin.com/in/stephancill
repo: https://github.com/stephancill/ios-keyboard-dictation
---

The main limitation with iOS in-keyboard dictation has been solved by [Johan Thorell]({{page.johan}}) at [Raycast]({{page.raycast}}). 👏 By using an embedded web view, a custom keyboard can now start dictation without a main app round-trip.

<img src="{{page.assets}}dictation.jpg" />


## Background

Since iOS keyboard extensions don't have mic access, developers have been forced to make a [main application]({{site.urls.terminology}}) round-trip to start [dictation](/features/dictation), after which the user has to go back to the keyboard to perform dictation.

Returning to the keyboard has been a pain, since Apple doesn't provide any system APIs for navigating back to the keyboard. This has forced apps to ask users to tap the top-leading back link. A truly horrible UX.


## Workarounds

KeyboardKit has supported keyboard dictation for a long time, and has many tools to streamline the process of setting it up for any custom keyboard.

KeyboardKit 10 replaced the old in-app dictation engine, where dictation was performed on demand in the app, with a proper in-keyboard solution that requires a single main app round-trip, after which the app is kept alive in the background, using background audio mode.

This works great, but it requires the developer to add background audio capabilities to the app, which requires additional explanations in the App Store submission. It also keeps the microphone active after a dictation, until the user expliticly stops dictation (which requires a new round-trip), which is not great for the battery.


## The solution

Johan Thorell has now fixed this, by sharing a post on X on how to use an embedded web view in the keyboard to start in-keyboard dictation, without having to make a main app round-trip.

This has caused a huge level of excitement in the dictation and keyboard community, where developer [Stephan Cilliers]({{page.stephan}}) shared a [repository]({{page.repo}}) that outlines the architecture, together with code to reproduce the feature.

We can verify that this approach works great, as you can see in the image above! 🤯 KeyboardKit 11.3 will add the feature through a new dictation plugin engine that will be VERY easy to set up.


## Concerns

We're however concerned that the flood of apps that will implement this will cause Apple to disable it in an iOS update, and start rejecting keyboard app updates where the keyboard extension adds microphone permissions.

We'll therefore mark the new engine as experimental, and the documentation will describe how this may not work in the long run. Until then, let's enjoy the short time window of keyboard dictation, as it could have been.


## Conclusion

Huge thanks to Johan, Raycast, and Stephan for sharing this with the community. Let's hope that this will lead to Apple rethinking the keyboard extension restrictions on dictation.
