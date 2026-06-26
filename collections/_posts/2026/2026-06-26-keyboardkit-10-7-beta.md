---
title:  KeyboardKit 10.7 beta 1 is out
date:   2026-06-26 06:00:00 +0100
tags:   releases proxy settings styling

image-show: 0
image: /assets/versions/10_7-beta.jpg
assets: /assets/blog/26/0626/

undo: /blog/2026/06/24/undo-support-is-coming-to-keyboardkit
10_6: /blog/2026/06/22/keyboardkit-10-6

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/10.7.0-beta.1
---

KeyboardKit 10.7 beta is out! This version adds undo capabilities to the keyboard, adds many settings pickers, and finishes the namespace flattening that was initially planned for KeyboardKit 11.

![KeyboardKit header image]({{page.image}})

This beta release comes out very close to [KeyboardKit 10.6]({{page.10_6}}), which was released just a few days ago. The reason for this is to get all the new things into your hands as soon as possible, to get your early feedback.


## ⚡️ Actions

The `KeyboardAction` has new actions, like `.openMainApp` (without a deep link and reason), and `.undo`. The `StandardKeyboardActionHandler` also has a new `undoLastRecordedDocumentChange` function.


## 📜 Licenses

The `LicenseErrorAlert` that is used by KeyboardKit Pro has been redesigned to be more informative, and fit better in with the overall iOS platform design.

![License Error Alert]({{page.assets}}LicenseErrorAlert.jpg){:class="medium"}


## 📦 Namespaces

KeyboardKit 10.7 flattens the remaining namespaces, to complete the extensive namespace transition earlier than initially planned, to give us all time to migrate before KeyboardKit 11.


## 🎛️ Settings

KeyboardKit 10.7 also adds many more pickers and settings for various keyboard models, including a brand new `KeyboardActionPicker`. This will let us harmonize settings, and use the same base picker for all models.

The `Keyboard` namespace has these new pickers: `DockEdgePicker`, `InputToolbarTypePicker`, `InputTypePicker`, `KeyboardCasePicker`, `KeyboardTypePicker`, `LayoutTypePicker`, `ReturnKeyTypePicker`, `SpacebarLongPressBehaviorPicker`, `SpacebarMenuTypePicker`, and there's also a brand new `KeyboardActionPicker`.


## 🎨 Styling

As part of implementing the new pickers, there are new images, and image builders to add icons to the pickers:

`.keyboardArrowBackward`, `.keyboardArrowForward`, `.keyboardCase`, `.keyboardEscape`, `.keyboardFunction`, `.keyboardInputType`, `.keyboardSpace`, `.keyboardSystemSettings`, `.keyboardType`, `.keyboardUrlDomain`.


## ↩️ Undo

This version adds undo functionality to the keyboard engine. This makes it possible to undo text insertions, text deletions, and autocompletions in smart steps. We write more about this feature [here]({{page.undo}}).

Undo is currently opt-in, to avoid unexpected side-effects. Enable the `undoManager` experiment to try it out. 


## Conclusion

KeyboardKit 10.7 is a huge release that adds since long requested features, makes many structural changes for a greater developer experience, and irons out some bugs.

For more details, see the [release notes]({{page.release}}) for a full list of changes. Update now to get access to all improvements.
