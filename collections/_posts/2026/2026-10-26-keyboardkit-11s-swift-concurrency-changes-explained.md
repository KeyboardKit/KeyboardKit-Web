---
title:  KeyboardKit 11's Swift Concurrency Changes Explained
date:   2026-10-26 06:00:00 +0100
tags:   general

permalink: /drafts/matt

assets: /assets/blog/26/1026/
image: /assets/blog/26/1026/image.jpg
image-show: 0

matt: https://www.massicotte.org
---

KeyboardKit 11's move to Swift 6.2 and Swift concurrency was a big undertaking, and we couldn't have done it without [Matt Massicotte]({{page.matt}}), who helped us find the right approach without breaking the public API (too much).

![Blog header image]({{page.assets}}swift-concurrency.png)


## Background

KeyboardKit has been around since before SwiftUI, and have over the time gathered a mix of dispatch queues, completion blocks, and `MainActor.run` calls. This has worked well, but never been a future-proof setup.

We have wanted to adopt Swift's new concurrency model for some time, but the many changes made to it over the years have made us wait. An SDK is different from an app, with API stability being a top priority. With Swift 6.2, however, we felt that the time was finally right.

For KeyboardKit 11, we decided to go all-in and move the SDK to Swift 6.2 with strict concurrency. To make it happen, we reached out to [Matt Massicotte]({{page.matt}}) for help.


## Working with Matt

[Matt]({{page.matt}}) is one of the most knowledgeable people in the Swift community when it comes to Swift concurrency. His blog and talks have helped countless developers make sense of actors, isolation, and `Sendable`. 

Having Matt on board for this made a huge difference in how fast we could move and in how confident we were in the result. If you're about to do a concurrency migration, we can warmly recommend [reaching out to him]({{page.matt}}).


## Keeping the API Unchanged

An important part of this project was to keep most of the public APIs unchanged. KeyboardKit is used in many apps, and a concurrency change can easily leak to the surface level if you're not careful.

We focused on only changing the public APIs where it was absolutely necessary. The result is that most apps should be able to easily upgrade to KeyboardKit 11, with just a few changes that we'll cover below.


## Splitting Contexts

The biggest structural change was to split controller-related state out of `KeyboardContext` and into a new `KeyboardControllerContext` type that is bound to the main actor.

The `KeyboardContext` used to hold a reference to the main `textDocumentProxy`, and read properties like `autocapitalizationType` from the controller. The context still has controller synced properties, but no longer has ant references to main actor bound values.

This allowed the base context to remain non-isolated and versatile, while all controller-specific logic is isolated to the main actor. This is one of the few places where you may have to update your code. 

If you used `KeyboardContext` to access the proxy, you should now use `KeyboardControllerContext`:

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

An important part of this concurrency migration was to make the right types main actor-bound. This includes most services and engines that interact with UIKit or main actor-bound system APIs, where this makes sense.

To avoid forcing main actor constraints onto types that use main actor-bound types, we added actor-agnostic initializers that accept explicit values, and have actor-constrained initializers that read the current values.


## Sendable Changes

Another part of this project was to make more types `Sendable`. Some closures, like the remote autocomplete request and various result builders, are now also `@Sendable`.

Just as important was deciding which types should *not* be `Sendable`. For instance, the full document reader's state is intentionally a non-`Sendable` struct, since it's only meant to be used where it's created.

We have also reviewed all `@unchecked Sendable` usages, and made sure they're implemented as intended.


## Tasks and Async Code

We have also reviewed how we create tasks. Some functions that updates a context are now `async` instead of creating unstructured tasks internally. This gives you more control over when and how they run.

The concurrency changes also helped us track down and fix long-standing issues, like the autocomplete-related hang on the very first keypress.

## Conclusion

There's a lot more to this than we can cover in detail here. The changes mentioned here are the most important ones. For a full list of changes, please see the [KeyboardKit 11 release notes](https://github.com/KeyboardKit/KeyboardKit/releases/tag/11.0.0).

Moving KeyboardKit to Swift 6.2 and strict concurrency was a big but important project. The SDK is now more stable, easier to manage, and ready for the future of Swift, with most public APIs left unchanged. 

A huge thank you to Matt Massicotte for all his help with this migration. If you want to learn more about Swift concurrency, or need help with a similar migration, make sure to [check out his website]({{page.matt}}).
