---
title: Tapling
eyebrow: Typing Companion

image:  /assets/case-studies/tapling/header.jpg
assets: /assets/case-studies/tapling/

featured: 1

card:
  text: A cozy keyboard companion that taps along as you type and lets you unlock fun cosmetic rewards.
  bullets:
    - Cozy
    - Typing Companion

appstore: https://apps.apple.com/us/app/tapling-type-with-bongo-cat/id6756097345
website:  https://tapling.app
developer: https://github.com/builder-group/tapling
bongo: https://store.steampowered.com/app/3419430/Bongo_Cat/
---

Meet [Tapling]({{page.website}}) - a small companion that lives in your keyboard’s suggestion bar and taps along while you type. Type normally and Tapling quietly keeps you company.

![Tapling Header Image]({{page.image}})


## What is Tapling?

[Tapling]({{page.website}}) is a small companion that lives in your keyboard’s suggestion bar and taps along while you type. As you type you earn keycaps that can unlock items like furs, hats, and faces for your Tapling.

<div class="grid col3 slide-in images">
    <img src="{{page.assets}}screenshot-1.png" />
    <img src="{{page.assets}}screenshot-2.png" />
    <img src="{{page.assets}}screenshot-3.png" />
</div>

The idea with Tapling is simple. Type normally and Tapling quietly keeps you company. Every keystroke counts. 


## The Story Behind the App

The idea started when Tapling's creator [Benno]({{page.developer}}) came across the [Bongo Cat]({{page.bongo}}) typing companion game on Steam.

> I liked the idea of a small companion reacting while you type and slowly collecting cosmetics. It turns everyday typing into a small cozy experience.

Since the game is made for desktop, and primarily Windows, Benno started wondering how something similar could exist on the iPhone. Since most people always have a phone with them, the keyboard felt like the natural place for a companion like this.

[Tapling]({{page.website}}) is the result. It's a small character that lives in the keyboard’s suggestion bar and taps along quietly while you type. It's present whenever you type, but never interrupts what you're doing.


## Building the Keyboard

Since Apple doesn't let you add UI elements like Tapling to the system keyboard, the only option is to build a full custom keyboard extension.

Benno used KeyboardKit to mimic the native keyboard and recreate many features that users expect, such as layouts, gestures, and autocomplete.

> Using KeyboardKit as a base and extending it with the features I needed, made it possible to focus on the Tapling experience instead of the keyboard fundamentals.

Instead of starting from a blank canvas, KeyboardKit provided the base structure needed to build a custom keyboard with SwiftUI, and to let Benno focus on what makes his keyboard unique.


## Download

Download [Tapling]({{page.website}}) from the [App Store]({{page.appstore}}) to experience what it's like to type with a cozy companion by your side.
