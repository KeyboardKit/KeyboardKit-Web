---
title:  Evaluating a New Host Application Approach
date:   2026-08-24 06:00:00 +0100
tags:   host-app

assets: /assets/blog/26/0824/
image:  /assets/blog/26/0824/image.jpg
image-show: 0

post:   /blog/2026/03/02/ios-26-4-host-application-bundle-id-bug
---

We are currently evaluating a promising replacement for the host application resolver that [stopped working in iOS 26.4]({{page.post}}).


## Background

Being able to identify the [host application]({{site.urls.terminology}}) from the keyboard is important to be able to customize the keyboard for the app that's using it, or to navigate back to the keyboard after launching the [main application]({{site.urls.terminology}}).

KeyboardKit had a way of identifying the host application, but it [stopped working in iOS 26.4]({{page.post}}). Since this change did affect many keyboards, we have looked for a new way of doing this. And now we have finally found one.


## New Implementation

The new way of identifying the host application's bundle ID is completely different from the old one. Since this new approach requires us to fetch information in a different way, we have made some design changes.

Unlike the old `hostApplicationBundleId` controller extension, the new approach will instead extend the controller with a `resolveHostApplicationBundleId() async throws` function, and will also add two `resolveHostApplication(...) async throws` functions for licenses that unlock the host app feature.

To avoid future problems, KeyboardKit will no longer sync this information to the keyboard context unless it's absolutely needed, for for instance when starting dictation. We will also add ways for you to disable this sync.


## Expected rollout

We have tested this new approach with great result, but must verify that it can be submitted to the App Store without any problems. We therefore submitted a new build of an app that uses this feature, and are currently waiting for it to be reviewed.

Once it (hopefully) passes review, we hope that we can add it to the upcoming KeyboardKit 10.9 release.