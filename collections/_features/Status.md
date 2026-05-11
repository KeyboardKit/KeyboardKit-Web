---
title: Status
description: Easily inspect the keyboard status
hero:
  emoji: 🩺
---

KeyboardKit has ways to check the keyboard status, e.g. if a keyboard is enabled in Settings, if Full Access is enabled, if the keyboard is actively being used, etc.


## Keyboard Status

KeyboardKit has a ``KeyboardStatus`` namespace with status-related types, as well as an auto-updating and observable ``KeyboardStatusContext`` that can be used to observe the status of one or many keyboards.


## Views

The `KeyboardStatus.Label` can be used to easily show if a keyboard is enabled, if Full Access has been enabled, etc. It can also link the user directly to system settings, to enable these things.


## KeyboardKit Pro

KeyboardKit Pro unlocks additional status views & utilities, like a complete ``KeyboardStatus.Section``:

<img width="450" alt="A keyboard status section" src="{{page.assets}}keyboardstatus-section.jpg" />

The view is used by the [KeyboardApp HomeScreen](/features/app), and can be used as a standalone view as well.


[Pro]: /pro