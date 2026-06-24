---
title:  Undo Support is Coming to KeyboardKit
date:   2026-06-24 06:00:00 +0100
tags:   releases localization

assets: /assets/blog/26/0624/
image: /assets/blog/26/0624/image.jpg
image-show: 0
---

We're excited to announce that KeyboardKit 10.7 will feature a brand new undo manager, which lets you undo text insertions, deletions and autocompletes. 

## What does this mean?

This will be a huge thing for the keyboard engine, especially since the native APIs lack any kind of undo control. 

KeyboardKit's custom undo engine will allow you to build nice features on top of it, for instance to allow a back swipe to undo the last change. We will also add new undo features over time.

Being able to undo autocomplete and autocorrect suggestions will be another huge win, where any destructive operations finally become revertible.

## How does it work?

The standard action handler will use the new `TextDocumentUndoManager` to record revertible changes, like text insertions, deletions, and applied autocomple suggestions.

Changes of the same type will be recorded in chunks, to let us undo many subsequent changes of the same type with a single undo. This means that typing several subsequent characters will be recorded as a single change, to let us undo word by word insertions as separate undos.

The same goes for text deletions, where tapping backspace multiple times will be revertible with a single undo, and applying several subsequent autocomplete suggestions.

Changes will be stored in sequences in a change log, which means that you can type, delete, and complete freely and use the undo manager to rollback change by change. Due to a keyboard extension's limited control over the text document, moving the input cursor will reset the undo stack. 

To make it easy to trigger undo operations, there will be a new `.undo` keyboard action, that can be triggered with code or by adding an undo button to the keyboard.

## When will this be available?

The new undo manager will be available in KeyboardKit 10.7, which will be released later in June. It will be opt-in at first, to allow us to test it with large changesets, to ensure that it doesn't affect performance.