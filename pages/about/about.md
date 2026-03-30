---
id: about
title: About
layout: page
permalink: /about

page-class: glass-background bg2

hero:
  icon: /assets/icon/icon.png
  icon-class: plain
  title: About KeyboardKit

description: KeyboardKit lets you build amazing keyboard extensions with Swift & SwiftUI

sponsor: https://github.com/sponsors/danielsaidi

stockholm: https://www.google.com/maps/place/Stockholm,+Sweden/@59.3262131,17.8172499,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM
---


## What is KeyboardKit?

The KeyboardKit SDK lets you create custom iOS keyboards and keyboard-related apps for all major Apple platforms (iOS, macOS, tvOS, watchOS & visionOS) using [Swift]({{site.urls.swift}}) and [SwiftUI]({{site.urls.swiftui}}).


## What is a custom keyboard?

A custom iOS [keyboard extension](terminology) is an app extension that you ship together with your main app, which can replace the system keyboard in any app, by using the 🌐 key while typing.


## What can a custom keyboard do?

Keyboard extension can render any user interface you want, and can resize the keyboard area to fit their content. This means that they can be taller or shorter than the native keyboard.

Keyboard extensions have a [text document proxy](terminology) that is used to interact with the active app. The proxy can read and write text, move the input cursor, and request [Full Access](terminology) for more capabilities.


## What can a custom keyboard *not* do?

Apple puts great restrictions on what a keyboard extension is allowed to do. For instance, a custom keyboard can't draw outside its bounds, and can only send text to the [active app](terminology).

Keyboard extensions must also open the [main app](terminology) to perform certain actions, like using the device microphone to perform dictation, and are [memory capped](terminology) at ~70 MB (depending on device & OS).


## Why use KeyboardKit?

KeyboardKit extends Apple's limited APIs with many more [features](/features) to let you create customizable keyboards with just a few lines of code, using modern technologies lilke Swift & SwiftUI.

KeyboardKit is completely free to start using. You can upgrade to [KeyboardKit Pro](/pro) to unlock more powerful [pro features](/pro#features) like [{{site.locales.count}} languages](/locales), autocomplete, emojis, AI-based features, etc.


## Who uses KeyboardKit?

With over 1,8k stars on [GitHub]({{site.urls.github}}), KeyboardKit is one of the most popular custom keyboard SDK. It's used by enterprises, companies, startups, universities and indies, who all use it for amazing things.

Please see some of the [case studies](/case-studies) for inspiration. Feel free to [reach out](mailto:{{site.email}}) if you want us to share your story and feature your company and product.


## Who are we?

KeyboardKit is developed by [Kankoda](https://kankoda.com) in [Stockholm, Sweden]({{page.stockholm}}). We are experts in Swift and SwiftUI and create apps and SDKs for all major Apple platforms.