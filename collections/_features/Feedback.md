---
title: Feedback
description: Trigger audio and haptic feedback
hero:
  emoji: 🔉
---

KeyboardKit makes it easy to trigger audio and haptic feedback when the user interacts with the keyboard.


## Feedback

KeyboardKit has feedback-related types and views, like the observable `KeyboardFeedbackContext`, auto-persisted `KeyboardFeedbackSettings`, `KeyboardFeedbackService` implementations, etc.

With feedback enabled, KeyboardKit will automatically trigger audio and haptic feedback when a user interacts with the keyboard. Feedback is fully customizable by you, and can be exposed as settings to the user as well.

<img src="{{page.assets}}feedback-settingsscreen.jpg" />


## Feedback Services

KeyboardKit has a `StandardActionHandler` that triggers feedback when handling actions, autocomplete suggestions, etc. You can subclass it to customize the feedback behavior, or just tweak the context and settings.


[Pro]: /pro
