---
id: about-terminology
title: Terminology
layout: page
permalink: /terminology
redirect_from: /about/terminology

hero:
  icon: /assets/icon/icon.png
  icon-class: plain

description: This page describes some common terminology that is involved with custom iOS keyboard.

sponsor: https://github.com/sponsors/danielsaidi

stockholm: https://www.google.com/maps/place/Stockholm,+Sweden/@59.3262131,17.8172499,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM
---

ABOUT BACK


This page will help you understand key concepts when developing custom iOS keyboard extensions.

## Custom Keyboard Extension

A custom keyboard extension is an app extension that can replace the system keyboard in any app. Unlike an app, a custom keyboard extension runs within the context of another app.

Custom keyboards can offer specialized input methods, enhanced autocorrection, emoji keyboards and suggestions, or entirely different input paradigms like swipe typing or voice-to-text conversion.

## Text Document Proxy

A custom keyboard extension communicates with the host application through the Text Document Proxy, which serves as the primary interface for text manipulation. 

The proxy provides methods to insert text, delete characters, and read limited context around the cursor position. It acts as a secure intermediary that prevents the keyboard from accessing the full content of text fields, maintaining user privacy while still allowing essential functionality.

## Full Access

Custom keyboards are very limited by default, but can request Full Access to unlock capabilities like network access, location services, access to the device dictionary and pasteboard, etc.

Full Access requires explicit user consent and triggers privacy warnings. Many users decline Full Access due to privacy concerns, so developers must design keyboards that can function without it.

## Memory Cap

Custom keyboards are memory capped at ~ 60-70 MB, based on device and OS. Developers must be careful with memory usage, as exceeding this limit results in immediate system termination. 

Developers need to carefully manage resources and avoid memory leaks. The memory constraint is particularly challenging for custlm keyboards that include large language models, or rich media.

## Main Application

The main app is the app that contains the keyboard extension, while the keyboard extension is the component that actually provides keyboard functionality.

The main app is a great place for keyboard settings, user onboarding, and other features that need a large user interface, or that need to access certain features like microphone access.

The keyboard extension can open the main application to perform certain operations, and both can use App Groups to communicate with each other. This separation ensures that the keyboard remains lightweight while allowing the main app to provide richer functionality and user interfaces.

## Host Application

The host application refers to the app that is currently using the keyboard. Different apps may have varying text input requirements, or custom input traits that affect the keyboard. 

Custom keyboards must consider things like the eyboard type, autocorrection preferences, secure input modes, etc. Honoring the host context is crucial for providing a great user experience.

## Sandboxing and Security

Custom keyboards operate within a heavily sandboxed environment that restricts access to system resources and user data. This ensures that malicious keyboards can't access sensitive information. 

Accessing the file system, contact lists, or other app data requires explicit permissions. The sandbox also prevents keyboards from launching other apps or accessing certain system APIs.

## Input View Controller Lifecycle

The Input View Controller lifecycle governs how keyboard extensions are loaded, displayed, and terminated. Unlike regular view controllers, keyboard extensions have a special lifecycle.

Understanding this lifecycle is essential for proper resource management, state persistence, and ensuring the keyboard remains responsive across different usage scenarios.

## Auto Layout and Dynamic Sizing

Keyboard extensions must support dynamic sizing across different devices, screen orientations, screen sizes, and accessibility settings. 

Keyboards must also respond appropriately to Dynamic Type settings and accommodate users with accessibility needs, including larger text sizes and alternative input methods.

## KeyboardKit

[KeyboardKit](/) is a 3rd party SDK by [Kankoda Sweden AB](https://kankoda.com) that makes it easy to create a custom iOS keyboard extension. It has many [features](/features) that addresses the various challenges mentioned above.