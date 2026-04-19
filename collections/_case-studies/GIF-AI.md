---
name:  GIF AI Keyboard
title: GIF AI Keyboard - Generate Custom GIFs

image:  /assets/case-studies/gif-ai/header.jpg
assets: /assets/case-studies/gif-ai/

featured: 1
menu:
  title: Case Study Sections
  sections:
    - title: GIF AI Keyboard
      items:
        - title: What is GIF AI Keyboard?
        - title: The Story Behind GIF AI Keyboard
        - title: Implementing the Keyboard
        - title: AI with Joy and Responsibility
        - title: Give it a try
card:
  text: An AI-powered keyboard that lets you generate custom GIFs in real time, without leaving your chat.
  bullets:
    - GIFs
    - Gen AI

appstore: https://apps.apple.com/us/app/gif-ai-keyboard/id6748157345
developer: Damiaan Twelker
developer-url: https://www.linkedin.com/in/damiaan-twelker-23419646/
---

Say hi to [GIF AI Keyboard]({{page.appstore}}) - an innovative keyboard that lets you generate custom GIFs on-the-fly and drop them directly into your conversations, without ever leaving your favorite messaging app.

![GIF AI Keyboard Header Image]({{page.image}})


## What is GIF AI Keyboard?

[GIF AI Keyboard]({{page.appstore}}) is a custom iOS keyboard app that allows you to generate custom GIFs and drop them into your conversations, without leaving your favourite messaging app. 

Are you picturing a funny situation in your mind, and want to share it with your peers? A GIF says more than a 1 000 words. Switch the keyboard, type your prompt, drop the GIF, and share the joy.

<div class="grid col3 slide-in">
    <img src="{{page.assets}}screenshot-1.jpg">
    <img src="{{page.assets}}screenshot-2.jpg">
    <img src="{{page.assets}}screenshot-3.jpg">
</div>

The concept is simple yet powerful. Instead of searching through lists of standard, pre-made GIFs, you can generate exactly what you're imagining, using generative AI. You can then drop the result directly into the conversation. It's that simple.

GIF AI's GIFs are generated fast enough to keep conversations flowing naturally. Everything happens directly in the keyboard, without ever leaving your messaging app


## The Story Behind GIF AI Keyboard

The journey to building [GIF AI Keyboard]({{page.appstore}}) is a story of patience, inspiration, and perfect timing.

Developer [{{page.developer}}]({{page.developer-url}}) first conceived the idea of GIF AI in the summer of 2024 while living in Porto with his girlfriend. The creative environment of Portugal, combined with the inspiration from other indie makers in Portugal like [Pieter Levels](https://x.com/levelsio), sparked a wave of enthusiasm for the project.

> Generative AI was up and coming and I've always been a fan of using AI to spread joy, while taking into account some safety factors such as not making fun at the expense of others. I thought, what if you could create a custom tailored GIF right from within your favorite messaging app? It would increase engagement on the conversation and who doesn't want to have a laugh with their peers. - Damiaan Twelker

However, there was a critical problem: the AI models of 2024 simply weren't fast enough. The first requirement - speed - couldn't be met, so the project was put on hold. Fast forward one year, and new AI models finally enabled real-time GIF generation. The timing was perfect to resume work.


## Implementing the Keyboard

With the generative AI speed requirement finally met, a new challenge emerged: the keyboard itself.

To allow users to type prompts to generate GIFs directly in the keyboard, the system keyboard can't be used. This meant building the entire keyboard from scratch - a daunting task given the intricate details of text input, autocorrection, and multi-language support.

> The thought of having to replicate the keyboard by myself quite scared me, with all the intricate details of language and text. Fortunately KeyboardKit came to the rescue, really the only product on the market that makes this part a bliss. It allowed me to focus on other delicate and important details.

Rather than spending months (or years) building a robust keyboard implementation, KeyboardKit provided a production-ready solution that handled all the complexity, to let Damiaan focus on the unique aspects of GIF AI Keyboard.

> Seeing everything come together made me very excited to finish the product fast, and within a week I got the first release out.

GIF AI Keyboard shares GIF data between the keyboard extension and the main app, to let users generate images wherever it feels more natural. The result is a robust custom iOS keyboard that brings a unique and fun touch to the chat experience.


## AI with Joy and Responsibility

[GIF AI Keyboard]({{page.appstore}}) represents a thoughtful approach to generative AI - one that prioritizes spreading joy while maintaining safety and social responsibility. The app is designed to enhance conversations and bring laughter, without enabling content that makes fun at the expense of others.


## Give it a try

Download [GIF AI Keyboard]({{page.appstore}}) from the App Store today and start generating custom GIFs that perfectly capture what you want to say. Transform your conversations from ordinary to extraordinary, one AI-generated GIF at a time.
