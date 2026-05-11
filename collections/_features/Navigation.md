---
title: Navigation
description: Open the main app and custom URLs
hero:
  emoji: 🗺️
---

KeyboardKit makes it easy for a custom keyboard to open links, open the main app, etc.


## Opening URLs

Custom keyboards may have to open a URL or trigger a deep link, for instance to open the main app to perform a task like dictation, or to Settings to perform system configurations.

Since custom keyboards can't use `UIApplication.shared`, KeyboardKit has other ways to open URLs and trigger deep links, like triggering a ``.url(_:id:)`` [keyboard action](/features/actions) with any custom URL.

KeyboardKit also defines a ``.systemSettings`` URL, which can be used to open your app in System Settings.


## Opening the main app

KeyboardKit lets you open your main app with the `.openMainApp(_:)` action. This way of opening the main app also lets you define a reason why you opened the app, to let you guide the user better.

For instance, if you open the main app with the `.dictation` reason. Your app can show a message to tell the user that dictation is started, and that she/he should tap the top trailing back button to return to the keboard.


## Host Application

KeyboardKit Pro can navigate back to the keyboard from the main app, using its [host application utilities](/features/host). Note that these features are currently crippled in iOS 26.4 and later.