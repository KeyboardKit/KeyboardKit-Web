---
title:  KeyboardKit 10.6.1 patch restores the host application bundle ID sync.
date:   2026-07-02 06:00:00 +0100
tags:   releases proxy settings styling

image-show: 0
image: /assets/blog/26/0702/image.jpg
assets: /assets/blog/26/0702/

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/10.6.1
---

A KeyboardKit 10.6.1 patch has been released, that restores the host bundle ID that was disabled in the 10.6 release two weeks ago.

<!--![KeyboardKit header image]({{page.image}})-->

## Host Application 

KeyboardKit 10.6.0 disabled the host application bundle ID feature, which stopped working in iOS 26.4. Since iOS 27 haven't restored the required APIs, we determined that it was best to remove this code.

However, some apps are still using this to provide a good user experience on iOS releases before 26.4. Due to this, we have decided to revert this removal, and instead soft deprecate the property.

## Conclusion

KeyboardKit 10.6.1 is a small patch that reverts the removal of a function that is still used by some apps. The feature is not soft deprecated, and will be removed in KeyboardKit 11.

For more details, see the [release notes]({{page.release}}) for a full list of changes. Update now to get access to all improvements.
