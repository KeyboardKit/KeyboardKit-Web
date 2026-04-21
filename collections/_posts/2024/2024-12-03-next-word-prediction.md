---
title:  Next Word Prediction
date:   2024-12-03 06:00:00 +0100
tags:   ai autocomplete

image:  /assets/headers/next-word-prediction.jpg
assets: /assets/blog/24/1203/

tweet: https://x.com/keyboardkitsdk/status/1863901152623890558
toot:  https://techhub.social/@keyboardkit/113588545320013908

release: https://github.com/KeyboardKit/KeyboardKit/releases/tag/9.0.0
release-pro: https://github.com/KeyboardKit/KeyboardKitPro/releases/tag/9.0.0
---

KeyboardKit Pro 9 adds a feature that stopped working in iOS 16 - Next Word Prediction! Let's take a look at how it works, and how you can easily add next word prediction to your keyboard.


## Background

For reasons unknown, Apple removed the on-device software capabilities that made it possible to perform next word prediction with the on-device tools in iOS 16.

This means that KeyboardKit hasn't had this feature for a few years, which made typing a bit more cumbersome than when typing on a native keyboard.

While KeyboardKit Pro developers always had the option to subclass the autocomplete service and add next word prediction themselves, it wasn't easy to do so. Until today.


## Next Word Prediction in KeyboardKit Pro 9

KeyboardKit Pro 9 re-adds the ability for a keyboard extension to perform next word prediction, by easily integrating with external AI/LLM services.

KeyoardKit Pro 9 ships with predefined ways to integrate with [Claude](http://claude.ai) and [OpenAI](http://openai.com), using your own API license keys to integrate with these external services.

The easiest way to enable word prediction for a keyboard is to add a `nextWordPredictionRequest` to the `KeyboardApp` configuration. For instance, this would enable Claude-based predictions:

```swift
import KeyboardKitPro

extension KeyboardApp {

    static var keyboardkit: KeyboardApp {
        .init(
            name: "My App",
            bundleId: "com.myapp",
            autocomplete: .init(
                 nextWordPredictionRequest: .claude(apiKey: "api-key-here")
            )
        )
    }
}
```

You can also add a `nextWordPredictionRequest` to a `LocalAutocompleteService`. However, the app-based approach above is the recommended way.


## Important Considerations

AI-based next word prediction is disabled by default, to avoid sending the user's text to 3rd parties without the user's explicit consent. 

As with Full Access, make sure to get the user's explicit consent before you enable the feature with the ``AutocompleteContext.Settings.isNextWordPredictionEnabled`` property.


## Result

With next word Prediction enabled, your users will start seeing AI-based suggestions as they type:

![iPhone showing KeyboardKit Pro-based Next Word Prediction]({{page.assets}}screenshot.jpg)

The operation is a little slower than on-device autocomplete, but with Claude and OpenAI providing performant and affordable services, the experience is not far from an on-device model.


## Conclusion

KeyboardKit 9 is a huge step forward, and makes using KeyboardKit easier than ever before. Many since long requested features are finally in place, and more will come in subsequent minor updates.

To give KeyboardKit 9 a try, use latest [release]({{page.release}}) or [KeyboardKit Pro release]({{page.release-pro}}). Don't hesistate to reach out if you find bugs or have feedback.