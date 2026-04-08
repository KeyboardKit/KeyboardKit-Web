---
title:  Dictation navigation change is reverted
date:   2023-11-29 06:00:00 +0100
tags:   dictation navigation

image:  /assets/headers/pro.jpg
---

A change that was introducted to make the dictation back navigation work again, is being reverted.

![KeyboardKit logo]({{page.image}})

Since keyboard extensions can't access the microphone, KeyboardKit's keyboard dictation currently opens the main application to perform dictation there. 

The intended user experience is to be taken back to the source app when dictation stops, but this navigation stopped working in iOS 17 because of removed system APIs.

The result is that dictation will stop, but the user remain in your keyboard app. Users then have to manually press the small top-leading back button to go back to the previous app.


## A new approach

You can experience this broken navigation in other apps as well, such as Gboard. However, some apps handle this navigation differently, and in these apps, navigation still works in iOS 17.

While apps like Gboard navigates "back" to the previous application, these apps navigates "forward", as if triggering a deep link in the app that initiated the dictation.

KeyboardKit Pro added this way navigation for the dictation back navigation in 8.0.7, and it worked great. Apps can nov navigate back to the previous app and dictation works as intended. 

However...


## App Store rejection

It turns out that the system APIs that are used to implement this new dictation navigation are no longer allowed, which results in a rejection when submitting apps to the App Store.

This change will therefore unfortunately have to be reverted in a new patch version, to make App Store submittals work again.


## A new patch release

This change will be released as an `8.0.9` patch, and will be released later today. It will revert back to the previous back navigation, which works in iOS 16.

We are sorry for any problems that this may have caused, and will start looking for a new way to implement this feature.