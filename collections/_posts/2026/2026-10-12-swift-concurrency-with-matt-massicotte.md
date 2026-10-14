---
title:  Swift Concurrency with Matt Massicotte
date:   2026-10-20 06:00:00 +0100
tags:   general

permalink: /drafts/matt

assets: /assets/blog/26/1012/
image: /assets/blog/26/1012/image.jpg
image-show: 0

matt: https://www.massicotte.org
---

KeyboardKit 11's move to Swift 6.2 and Swift concurrency was a big undertaking, and we couldn't have done it without [Matt Massicotte]({{page.matt}}), who helped us find the right approach without breaking the public API (too much).

![Blog header image]({{page.assets}}swift-concurrency.png)


## Background

KeyboardKit has been around since long before Swift concurrency (even before SwiftUI), and therefore used a mix of dispatch queues, completion blocks, and `MainActor.run` calls. This has worked well, but hasn't really been a future-proof setup.

We have wanted to adopt Swift's new concurrency model for some time, but the many changes made to it over the years have made us hold off. Building an SDK is different from building an app, with API stability being very important. With Swift 6.2, however, we felt that the time was finally right.

For KeyboardKit 11, we therefore decided to go all-in and move the SDK to Swift 6.2 with strict concurrency. To make it happen, we reached out to [Matt Massicotte]({{page.matt}}) for help.


## Working with Matt Massicotte

[Matt]({{page.matt}}) is one of the most knowledgeable people in the Swift community when it comes to Swift concurrency. His blog posts and talks have helped countless developers make sense of actors, isolation, and `Sendable`. He was incredibly important in helping us understand how isolation should be designed in a product like KeyboardKit.

Having Matt on board during this complex work made a huge difference, both in how fast we could move and in how confident we are in the result. If you're about to start a concurrency migration of your own, we can warmly recommend checking out [his website]({{page.matt}}) and reaching out to him.


## Keeping the API Unchanged

A major focus during this project was to keep most of the public API unchanged. KeyboardKit is used in many apps, and a concurrency migration can easily ripple out into every call site if you're not careful.

We therefore tried hard to keep changes internal, and to only modify the public APIs where it was absolutely necessary. The result is that most apps should be able to upgrade to KeyboardKit 11 without major changes, with a few exceptions that we'll cover below.


## Splitting Contexts

The biggest structural change was that we split controller-related state out of `KeyboardContext` and into a new `KeyboardControllerContext` type.

The `KeyboardContext` used to hold a reference to the input view controller's text document proxy, and had properties like `autocapitalizationType`, `keyboardAppearance`, and `prefersAutocomplete` that were derived from it. Since the proxy and the input controller are bound to the main actor, this meant that the entire keyboard context would have had to become main actor-bound as well.

Instead, we moved all proxy-based logic to a new, main actor-bound controller context. This allowed the base context to remain a non-isolated, versatile type, while all controller-specific logic is isolated to the main actor.

This is one of the few places where you may have to update your code. If you used the `KeyboardContext` to access the text document proxy, you should now use the `KeyboardControllerContext` instead:

```swift
struct MyView: View {

    @EnvironmentObject var controllerContext: KeyboardControllerContext

    var body: some View {
        Button("Insert") {
            controllerContext.textDocumentProxy.insertText("Hello!")
        }
    }
}
```

Like all other contexts, the controller context is available in `KeyboardState`, as well as in the environment.


## Main Actor Changes

An important part of this migration was to make the right types main actor-bound. This includes most services and engines that interact with UIKit or with system APIs, where this constraint makes sense.

Some static properties, like the current device type, are also main actor-bound. To avoid forcing this constraint onto the types that use them, these types now take the values as initializer parameters, and provide main actor convenience initializers that resolve the current values for you.

Making these types main actor-bound let us remove a lot of dispatch and `MainActor.run` code, which makes the library easier to reason about and more stable.


## Sendable Changes

Another big part of this project was to make more types `Sendable`. This includes types like `KeyboardApp`, `AutocompleteResult`, `RemoteAutocompleteRequest`, and many more. Some closures, like the remote autocomplete request and result builders, are now also `@Sendable`.

Just as important was deciding which types should *not* be `Sendable`. For instance, the full document reader state is intentionally a non-`Sendable` struct, since it's only meant to be used where it's created. We have also reviewed all `@unchecked Sendable` usages, and made sure they are well implemented.


## Tasks and Async Code

We also reviewed how and where we create tasks. Some APIs, like the autocomplete function that updates an autocomplete context, are now `async` instead of creating unstructured tasks internally. This gives you more control over when and how they run.

The new concurrency model also helped us track down and fix long-standing issues, like dictation and lexicon crashes caused by callbacks being invoked on background threads. It also helped us fix a hang on the very first keypress, by warming up the autocomplete engine while the keyboard is being set up.

## Conclusion

There's a lot more to this work than we can cover in detail. The changes above are the most critical ones, and the ones most likely to affect developers. For a full list of changes, please see the [KeyboardKit 11 release notes](https://github.com/KeyboardKit/KeyboardKit/releases/tag/11.0.0).

Moving KeyboardKit to Swift 6.2 and strict concurrency was a big project, but a very important one. The library is now more stable, easier to manage, and ready for the future of Swift, with most public APIs left unchanged. A huge thank you to Matt Massicotte for all his help with this migration.

If you want to learn more about Swift concurrency, or need help with a similar migration, make sure to check out [Matt's website]({{page.matt}}).
