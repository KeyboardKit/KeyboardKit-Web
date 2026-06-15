---
title:  Wrapping Up an Eventful Q2
date:   2026-06-15 07:00:00 +0100
tags:   general

assets: /assets/blog/26/0615/
image: /assets/blog/26/0615/image.jpg
image-show: 0
---


This post aims to give you an update on the many things that have been happening in Q2, in case you missed it, with some looks into the future and what you can expect ahead.


## WWDC 26

WWDC 26 came and went without any major announcements that directly affect KeyboardKit or the custom keyboard parts of the system. It's more or less business as usual, with new features rather than disruption.

That said, we are keeping an eye on Apple's Foundation Models and on-device capabilities that keep improving over time. We already use these models for some predictions, and will explore how to take things further.

## iOS 27 Beta

We have started testing KeyboardKit against the iOS 27 developer beta to identify features and design choices that may need adjustments before the final release.

For those who went through the Liquid Glass transition last year: unlike then, where devices still on iOS 18 kept the old pre-Liquid Glass design, any tweaks we make for iOS 27 will also apply to iOS 26.

## iOS 26.4 Host Application Bundle ID

Since iOS 26.4, the host application bundle ID has been returning nil in keyboard extensions. We had hoped this would be resolved, but testing on the iOS 27 beta shows the same behavior persists.

We are taking this as a signal that Apple no longer will support this in its current form. Until they provide public ways to identify and navigate back to the host application, we'll pause our efforts and shift focus toward UI/UX.

## Q2 Releases

Two releases shipped this quarter:

[KeyboardKit 10.4](https://keyboardkit.com/blog/2026/04/08/keyboardkit-10-4) focused on performance, with improved keyboard launch times and new ways to launch the main app with a specific reason from within the keyboard extension.

[KeyboardKit 10.5](https://keyboardkit.com/blog/2026/05/19/keyboardkit-10-5) was a broader release, adding a new language, new accessibility tools, new 26.4 emojis, new autocomplete settings, and much more.

## KeyboardKit 11

We have put a lot of care into designing the KeyboardKit feature namespaces, but think we went too far with type nesting. We will therefore begin moving views, styles, and other important types out of their namespaces and into the top level, to make the SDK easier to explore and use. This will be complete in KeyboardKit 11.0.

Beyond that, KeyboardKit 11 will focus on bringing Swift 6 support for structured concurrency, and migrate from `ObservableObject` to `Observable`, requiring iOS 17 as the minimum deployment target.

## Licensing Updates

We are happy to announce that all [business licenses](https://keyboardkit.com/business) now include an expiration grace period, making it easier and smoother to renew your license files without any interruption, giving you and your users more time.

This applies retroactively to existing licenses. We will begin sending out updated license files to all business license customers starting this week. Don't hesitate to [reach out]({{site.urls.email}}) if you have any questions.