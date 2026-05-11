---
permalink: /about
layout: page-sidebar

title: About
page-title: About KeyboardKit

description: This page describes what a custom keyboard is and how KeyboardKit can help.

stockholm: https://www.google.com/maps/place/Stockholm,+Sweden/@59.3262131,17.8172499,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM
---

Custom iOS keyboards provide a unique way to use functionality from your app in any other app that supports text input. This page describes this technology and its concepts in detail.


## FAQ

See the [faq](/faq) page for frequently asked questions, and a list of common custom keyboard terms and concepts.


## What is a custom keyboard?

A custom iOS [keyboard extension]({{site.terminology}}) is an app extension that you ship together with your app. It can replace the system keyboard in any app, by using the 🌐 key while typing, and use your app's content and features.


## What is KeyboardKit?

KeyboardKit is a software framework that lets you create custom keyboards and keyboard apps for all major Apple platforms (iOS, macOS, tvOS, watchOS & visionOS) using [Swift]({{site.urls.swift}}) and [SwiftUI]({{site.urls.swiftui}}).


## What can a custom keyboard do?

Custom keyboards can render any user interface in the system keyboard content area. A custom keyboard can resize this area to fit its content, and render any custom view.

Custom keyboards use a [text document proxy]({{site.terminology}}) to interact with the active app. The proxy can read and write text, move the input cursor, etc. By requesting [Full Access]({{site.terminology}}), a keyboard unlocks more capabilities, like network access.


## What can a custom keyboard *not* do?

Apple puts massive restrictions on what custom keyboards can do. For instance, a custom keyboard can't draw outside its bounds, and can only send text and basic commands to the [active app]({{site.terminology}}).

Keyboard extensions must also open the [main app]({{site.terminology}}) to perform certain actions, like using the device microphone to perform dictation, and are [memory capped]({{site.terminology}}) at ~70 MB (depending on device & OS).


## Why use KeyboardKit?

KeyboardKit extends Apple's limited APIs with more [features](/features) to let you implement fully custom keyboards with just a few lines of code, using modern technologies lilke Swift & SwiftUI.

KeyboardKit is completely free to start using. You can upgrade to [KeyboardKit Pro](/pro) to unlock more powerful [pro features](/pro#features) like [{{site.locales.count}} languages](/locales), autocomplete, emojis, AI-based features, etc.


## Who uses KeyboardKit?

With over 10 years in development and 1,8k stars on [GitHub]({{site.urls.github}}), KeyboardKit is an established keyboard SDK that is used by enterprises, companies, startups, universities and indies, who all use it for amazing things.

See some [case studies](/case-studies) for inspiration, and feel free to [reach out](mailto:{{site.email}}) if you want to share your story and feature your company and product as a case study.


## Who are we?

KeyboardKit is developed by [Kankoda](https://kankoda.com) in [Stockholm, Sweden]({{page.stockholm}}). We are experts in Swift and SwiftUI and create apps and SDKs for all major Apple platforms.