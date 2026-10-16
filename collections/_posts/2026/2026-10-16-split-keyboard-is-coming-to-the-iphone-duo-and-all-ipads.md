---
title:  Split keyboard support is coming to the iPhone Duo and all iPads
date:   2026-10-16 06:00:00 +0100
tags:   layout

assets: /assets/blog/26/1016/
image: /assets/blog/26/1016/image.jpg
image-show: 0
---

Support for split keyboard is coming to the iPhone Duo and all iPad devices. The feature ships with KeyboardKit 11.1 and can be enabled by code and user-facing settings.


## How it Works

In 11.1, `KeyboardContext` and `KeyboardSettings` get a new `isSplitKeyboardEnabled` property. The context value can be used to enable split keyboard during the current session, while the setting is persisted.

When split keyboard is enabled, the iPhone Duo will enable the feature when the screen is in open landscape.

![iPhone Duo with split keyboard]({{page.assets}}duo-landscape.jpg)

Split keyboard is however not available other iPhone devices, nor when the Duo is closed or open in portrait.

![iPhone Duo in portrait]({{page.assets}}duo-portrait.jpg)

The new split keyboard feature is also available on all iPad devices, in both portrait and landscape orientation.

![iPad in portrait]({{page.assets}}ipad-portrait.jpg)

![iPad in landscape]({{page.assets}}ipad-landscape.jpg)

To simplify using the keyboard in split mode while the device is in landscape orientation, the keyboard will switch over to use the portrait design while split keyboard is enabled.


## Duo Hinge Detection

We are investigating how to get access to the iPhone Duo's hinge information, which is currently not available to custom keyboard extensions. This would let us automatically enable split mode when the device is folded.

Until then, we will add a context menu to the space bar, that allows users to toggle split keyboard mode from the space bar. This will also be available from the dismiss keyboard button. 