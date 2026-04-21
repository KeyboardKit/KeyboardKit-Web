---
title:  KeyboardKit 7.6
date:   2023-05-16 08:00:00 +0100
tags:   releases dictation emojis

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/7.6.0

dictation-post: /blog/2023/05/15/dictation-changes

tweet:  https://twitter.com/GetKeyboardKit/status/1658458211492429824?s=20
toot:   https://techhub.social/@keyboardkit/110378499100929879
---

KeyboardKit 7.6 is out! This release fixes a dictation-related problem when submitting apps to the App Store Connect and has a bunch of dictation and emoji-related features and fixes.


## Dictation changes

KeyboardKit Pro 7.6 fixes dictation-related App Store submission problems and add more features to the dictation engine. You can read more about the biggest dictation changes [in this post]({{page.dictation-post}}).

Since the speech recognizer can't be added to the library, since that is what's causing the problem, you must now pass in a recognizer when you set up dictation. You can grab a implementation [here]({{page.dictation-post}}) as well as in the [KeyboardKit documentation]({{site.urls.docs}}).


## Emoji improvements

KeyboardKit 7.6 fixes some emoji skin tone bugs. All emojis with a single skin tones will now return the proper skin tone variants and all skin tone variants will return the correct neutral variant.

Emojis with multiple skin tones (e.g. with multiple skin tone supporting persons in the same emoji) will for now return no skin tone variants, until a proper API is developed to support this.


## Gesture improvements

KeyboardKit 7.6 also fixes a bug, where the long press and repeat actions of a button did fire if the button was removed from the view hierarchy before being released.

Since the repeat action kept triggering, and the number of repeat actions accumulating over time, this will hopefully help to improve performance.


## Conclusion

KeyboardKit 7.6 is quite a big release that fixes many things and minor annoyances. Have a look at the [release notes]({{page.release}}) for a full list of what's new in this release.