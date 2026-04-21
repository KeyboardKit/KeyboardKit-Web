---
title:  Keyboard switcher experiments
date:   2024-09-18 08:00:00 +0100
tags:   actions
---

The next keyboard 🌐 key that is used to switch keyboards, has behaved a bit strange. Let's take a look at two opt-in experiments that were introduced in `8.8.7`, that aim to fix improve its behavior.


## The switcher can stop working when added inside a keyboard

Users have reported that the next keyboard switcher can randomly stop working when it's added to the keyboard as a key, which is only required for home button devices.

The only way this can happen is if the keyboard doesn't have a controller (which is needed to create the keyboard), so this shouldn't happen...but obviously can.

To fix this problem, you can set the new `Keyboard.NextKeyboardButtonControllerMode.current` to these modes, to see if we can create the switcher without a controller:

* `.classic` is the current mode that requires us to pass in a controller or use the shared one.
* `.experimental` is a new test mode that makes the button create an internal controller instead.
* `.experimentalNilTarget` is a new test mode that makes the button use `nil` as the action target.

The best outcome would be if `.experimentalNilTarget` would work, since this would make it possible to completely remove the shared controller that is currently needed.


## The switcher doesn't work when an in-keyboard text field is being edited

The next keyboard switcher currently doesn't work when an text field inside the keyboard is active. This is because the text field takes over as the main proxy, which makes the switcher stop working.

To fix this problem, you can set the new `NextKeyboardButtonProxyMode` to these modes, to test a workaround that should make the next keyboard switcher work even if a text field is being edited:

* `.classic` doesn't reset the input proxy and doesn't let you switch keyboard while editing.
* `.experimental` is a new test mode that temp. disables the proxy, which makes the switcher work.

The best outcome would be if `.experimental` would work, since this would make it possible to make the switcher work at all times.


## Future changes

These experiments are currently opt-in, but will become opt-out in the `8.9.9` version, to give us a chance to test them properly before `9.0`, in which they should be removed.