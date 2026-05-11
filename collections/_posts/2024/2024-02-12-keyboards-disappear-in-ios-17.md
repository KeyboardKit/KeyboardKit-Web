---
title:  Custom Keyboard Extensions Can Disappear in iOS 17
date:   2024-02-12 08:00:00 +0100
tags:   apple-bugs

tweet:  https://x.com/GetKeyboardKit/status/1757058760579661914?s=20
toot:   https://techhub.social/@keyboardkit/111919132611882137

feedback: FB13611131
---

People have started reporting that their custom keyboard extensions have disappeared in iOS 17. This article discusses some concerning findings after investigating this problem.

Some KeyboardKit users have also reported this problem. When it happens, the keyboard no longer shows up in System Settings or the keyboard switcher.

While investigating the problem, some devices that previously have enabled the keyboard still show it as enabled in the main app, while it doesn't show up anywhere else.


## Bundle ID

The problem only seems to affect a small number of apps, and all we have investigated so far have had a bundle identifier that didn't start with `com.`

To investigate this further, we created a suite of test apps where the only difference was the bundle identifier, then added a custom keyboard extension to each app.

After some extensive testing in multiple test apps, this was the result:

- Bundle ID starts with `com.` - the keyboard shows up.
- Bundle ID starts with `eu.` - the keyboard shows up.
- Bundle ID starts with `se.` - the keyboard doesn't show up.
- Bundle ID starts with `de.` - the keyboard shows up.
- Bundle ID starts with `da.` - the keyboard shows up.
- Bundle ID starts with `dk.` - the keyboard shows up.

The `com.` prefix is by far the most common bundle ID prefix, while `eu.` is quite common within the European Union. The problem had been much more severe if it affected these IDs.

The `se.` prefix is however common in Swedish apps, where `se` is the Swedish top domain. As such, some Swedish companies use this prefix in their bundle ID.

We could reproduce the problem by creating many test apps with the `se.` bundle ID prefix, and see that the keyboard didn't show up for any of these apps. 

If we adjusted the bundle ID of the app and keyboard to start with `com.` instead of `se.`, it worked.


## Locale?

Since `se` is both the Swedish top domain, as well as the Swedish locale identifier's region code, we first suspected that the problem could be locale-related.

We therefore tried changing the prefix from `se` to `de` (German) as well as `da` and `dk` (Denmark), but the keyboard worked perfectly for all these cases.


## Conclusion

The problem seems to be related to the bundle ID, but the only case we have found so far is if the bundle ID starts with `se.`.

We have reported this problem to the Feedback Assistant. Please let us know if you also experience this problem, so that we can provide Apple with more information.

Since this is a critical bug for any apps it affects, we hope to find a way to solve or work around this problem. When we do, we'll share it here.

If you want to refer to the feedback in the Apple Feedback Assistant, please use the ID `{{page.feedback}}`.