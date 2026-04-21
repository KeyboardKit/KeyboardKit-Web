---
title:  KeyboardKit 7.9.7 Hotfix
date:   2023-11-13 08:00:00 +0100
tags:   releases
---

A KeyboardKit 7.9.7 hotfix is out, that adds a fix for an occasional crash that can happen the keyboard hosting controller is deinitialized.

The hotfix makes the controller check that its view is not nil before asking it to remove itself from the superview. It also ensures that the view removal in performed on the main thread.

The hotfix can be used by anyone who's still on KeyboardKit 7.