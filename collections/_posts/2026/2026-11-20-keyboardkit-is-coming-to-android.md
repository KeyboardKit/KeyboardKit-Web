---
title:  KeyboardKit is coming to Android
date:   2026-11-20 06:00:00 +0100
tags:   android

assets: /assets/blog/26/1120/
image: /assets/blog/26/1120/image.jpg
image-show: 0

langlot: https://langlotresearch.com
---

KeyboardKit is being ported to Android! 🤖 This is a fully native port, and we hope to release a first alpha to our [business customers](/business) before the end of the year.


## Tech

KeyboardKit for Android is not a cross-platform wrapper or a bridge to iOS code. It's a fully native port, written in Kotlin and Jetpack Compose, which means that it will look, feel, and behave like an Android keyboard should.

This also means that Android developers can use the tools, languages, and patterns they already know, without having to learn any new technologies.


## Features

The goal is full feature parity with iOS, except where Android doesn't have the same needs. For instance, some iOS features that only exist to work around platform limitations will not be ported.

<div class="grid col3 mobile carousel">
<img src="{{page.assets}}preview-gifs.jpg" />
<img src="{{page.assets}}preview-khmer.jpg" />
<img src="{{page.assets}}preview-dictation.jpg" />
<img src="{{page.assets}}preview-emojis.jpg" />
<img src="{{page.assets}}preview-fonts.jpg" />
<img src="{{page.assets}}preview-themes.jpg" />
</div>

This means that you can expect [localized keyboards](/languages) in all languages, as well as support for features like [actions](/features/actions), [layouts](/features/layout), [callouts](/features/callouts), [feedback](/features/feedback), [styling](/features/styling), [themes](/features/themes), [emojis](/features/emojis), [fonts](/features/fonts), [GIFs](/features/gifs), [dictation](/features/dictation), [settings](/features/settings), and much more.


## Autocomplete

[Autocomplete](/features/autocomplete) will initially have limited support. We are hoping to be able to port the [Langlot]({{page.langlot}}) prediction engine from our [partners](/partners) at Langlot Research, to provide high-quality, on-device suggestions and predictions.


## Timeline

We hope to release a first alpha release to our [business customers](/business) before the end of the year. This will provide us with feedback from real-world projects, to let us improve the port before a full release in early 2027.


## Pricing

We have not yet decided pricing details for the Android port. We are looking into how pricing should align with iOS, and if we should offer bundle solutions for teams that want to build keyboards for both platforms.

We will share more information about pricing as we get closer to the public release.


## Conclusion

We are very excited to bring KeyboardKit to Android, and can't wait to see what you will build with it! If you're a [business customer](/business) and want early access to the Android alpha, don't hesitate to [reach out]({{site.urls.email}}).
