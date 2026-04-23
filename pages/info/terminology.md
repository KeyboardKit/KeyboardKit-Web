---
title: Terminology
layout: page-sidebar
permalink: /terminology

description: This page describes common custom keyboard terminology.
---

This page explains some key concepts that are good to know about when working with custom keyboards.


## Custom Keyboard

A custom keyboard is a keyboard app extension that can replace the system keyboard in any app. Unlike an app, a custom keyboard extension runs within the context of another app.

A custom keyboard can offer specialized input methods, enhanced autocomplete and autocorrections, a custom emoji keyboard, and completely different input methods like swipe typing or voice-to-text conversion.


## Full Access

Custom keyboards are *very* limited by default, but can request Full Access to unlock capabilities like network access, location services, access to the device dictionary and pasteboard, etc.

Full Access requires explicit user consent and triggers privacy warnings. Many users decline Full Access due to privacy concerns, so developers must design their keyboards to be able to function without it.


## Host Application

The host application is the app that is using the keyboard for text input. Different apps may have different input requirements, or custom input traits that affect the keyboard. A custom keyboard interacts with the host app by using a [text document proxy](#text-document-proxy).


## Input View Controller

A `UIInputViewController` is the main class in a custom keyboard. It's responsible for the custom keyboard lifecycle and how a keyboard is loaded, displayed, and terminated. Unlike regular view controllers, an input view controller has a special lifecycle. Understanding this is essential for proper resource and state management, and for ensuring that the keyboard remains responsive across different usage scenarios.


## Main Application

The main application is the app that contains the custom keyboard extension. The main app is a great place for keyboard settings, user onboarding, and other features that need a large user interface, or that need to access certain features like microphone access.

A custom keyboard can open the main application to perform certain operations, and both targets can use App Groups to communicate with each other. This separation ensures that the keyboard remains lightweight while allowing the main app to provide richer functionality and user interfaces.


## Memory Cap

Custom keyboards are memory capped at ~ 60-70 MB, based on the device and OS. Developers must be very careful with memory usage, since exceeding this limit will result in immediate system termination. 

Developers need to carefully manage resources and avoid memory leaks. The memory constraint is particularly challenging for custom keyboards that use large AI or language models, or memory intense media content.


## Sandboxing

Custom keyboards operate within a heavily sandboxed environment that restricts access to system resources and user data. This ensures that malicious keyboards can't access sensitive information. The sandbox will also prevent keyboards from launching other apps or accessing certain system APIs without user consent.


## Text Document Proxy

A custom keyboard communicates with the [host application](#host-application) through a Text Document Proxy, which is the main interface for text manipulation in a custom keyboard. 

The text document proxy provides methods to insert and delete text, and read limited context around the input cursor. It acts as a secure intermediary that prevents the keyboard from accessing the full content of text fields, maintaining user privacy while still allowing essential functionality.