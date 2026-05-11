---
title:  Removing UIKit support in KeyboardKit
date:   2021-01-15 07:00:00 +0100
tags:   general

keyboardkit: https://github.com/danielsaidi/KeyboardKit
kkswiftui:   https://github.com/danielsaidi/KeyboardKitSwiftUI
issue:       https://github.com/danielsaidi/KeyboardKit/issues/167
v270:        https://github.com/danielsaidi/KeyboardKit/releases/tag/2.7.0
---

This post will discuss why KeyboardKit will remove UIKit-specific tools from the library in the upcoming 4.0 release. You will still be able to use KeyboardKit with UIKit, but the library itself will not contain UIKit-specific tools, system keyboards, demo apps etc.


## Background

I started building KeyboardKit in 2016, after creating my first custom keyboard and was surprised how limited I found the native api to be. I have then continued to extend the library over the years, with help from many dedicated developers and companies that have been kind enough to sponsor my work.

My ambition has always been to provide an extended api to make it easier to work with the native api:s, as well as a set of views and components to make it easier to build custom keyboards. Besides this, I have tried to flesh out good documentation and readmes and to create a demo project with a couple of keyboards that replicate the native keyboards for alphabetic, numeric, symbolic and emoji input, as well as a custom image keyboard.

In 2016, there was only UIKit. I did the best I could with stack views and collection views, and although the demo keyboards weren't pixel perfect, I think they turned out pretty good given how hard it is to achieve pixel perfection with these tools in a general, library-driven way. However, I've never really liked UIKit, which is why I haven't been pouring my heart and soul into these parts of the library.

When Apple launched SwiftUI in 2019, I was therefore super-excited to revisit my various apps and open source projects and redo them in SwiftUI. The unstable 2019 summer state of SwiftUI put those plans on hold for a while. As the technology stabilized, my urge to use it increased. After converting a few apps, I now turned my focus to KeyboardKit and started adding SwiftUI support to it.

I added the first limited support for SwiftUI in [v 2.7.0]({{page.v270}}) which I released in March 20, 2020. However, since KeyboardKit targets iOS 11 and above, I could not add this directly to the main repo. I therefore created a [new repository]({{page.kkswiftui}}) to serve as a plugin for the main library. By adding both libraries to your app, you could now start creating custom keyboards in SwiftUI.

SwiftUI proved to be a perfect fit for this kind of project, with observable data driving the state of the keyboard. Since iOS 11 and 12 doesn't support these technologies, I had to come up with ways to inject these new parts into backward compatible parts of the library. It wasn't easy, but it worked pretty well.


## Current state

As this is written, KeyboardKit has supported SwiftUI for almost a year. During this time, the library has gained traction and while the star count is still small, I'm blown away by the engagement I see from developers and companies that use the library. I've had many amazing discussions and am currently working full-time to help a company build a product on top of KeyboardKit. It's amazing and I feel truly blessed for this.

However, as I have geared up to bring more features and stability to the library, the hassle of having two repositories is becoming an increasingl burden. Changes in either library requires updating both to see the effect in the demo apps. New things that I want to build for SwiftUI have to fit the UIKit parts, which makes implementations and documentation more complicated than they have to be. The list goes on.

All in all, I feel like the support for both UIKit and SwiftUI is holding the library back.

I have therefore, after careful consideration and discussions with developers and companies, decided to remove support for UIKit in `v 4.0`. They all agree with the conclusions above and are as excited as me to get a more focused library that builds on modern technology.

This means that I have to start planning for deprecating and removing these parts of the framework.


## Deprecation plan

I plan to release `v 4.0` in Q1 2020, which means that it will be released about a year after I added the first SwiftUI support to the library. In calendar time it's about two months away, during which I will work hard on finalizing the new major version.

I will aim to release a `3.6.0` during the second half of January. I will clean up the documentation and tutorials in `3.7.0`-`3.9.0` and will add more functionality to the SwiftUI parts of the library to make it ready for a new major release. I will only deprecate new things in new minor versions.

Once I and some other developers feel like the SwiftUI parts are in a good state, I will start working on the `4.0 RC`, which will be done in a separate branch. This branch will experience many changes in a short amount of time, where I will:

* Add KeyboardKitSwiftUI to the main repo
* Bump the deployment target to iOS 13
* Remove UIKit-specific code
* Remove UIKit-specific docs
* Remove the UIKit demo
* Change many protocols
* Remove non-observable contexts and make the observable ones exclusive
* ...plus much more

This is when I also will deprecate all files in the `UIKit` folder and move it to the `_Deprecated` folder. These parts of the library will be frozen after this, and not touched until the major release is done.


## Release

I aim to release KeyboardKit 4.0 in March. It may be later, but I will not do it sooner to give developers time to adjust to these changes.

As I then start to work on the `4.0 RC`, you will see no changes in the master branch, except critical bug fixes that can be merged into the RC. I will focus on wrapping it up in time for you to have a chance to test it and provide feedback.


## Conclusion

I'm excited about making KeyboardKit SwiftUI-exclusive and hope you are too. Don't hesistate to join the discussion in the [main ticket]({{page.ticket}}) and let me know if you want to help make this transition possible.

If you don't have to change your custom keyboards, I suggest that you wait for this transition to be done. If you can't migrate, I recommend that you create a new repo with the UIKit-specific parts. You can have a look at [KeyboardKitSwiftUI]({{page.kkswiftui}}) for inspiration.

Also, feel free to continue the discussion in the [main ticket]({{page.ticket}}). I'd love to hear what you think.

Thank you all for using and supporting KeyboardKit!