---
title:  Autocomplete is coming to macOS
date:   2023-03-18 08:00:00 +0100
tags:   autocomplete multi-platform

assets: /assets/blog/23/0318/

toot:   https://techhub.social/@keyboardkit/110043912765961882
tweet:  https://twitter.com/GetKeyboardKit/status/1637045041406279680?s=20
---

The local KeyboardKit autocomplete provider will soon be available on all platforms, which means that `macOS` and `watchOS` (stubbed) will have it as well.

If you want to use the KeyboardKit Pro `LocalAutocompleteProvider`, it's currently only available on `iOS` and `tvOS`. KeyboardKit will perform the necessary OS checks when it registers a license, but if you want to use the provider directly, you may need to add a bunch of OS checks to the code.

In `KeyboardKit 7.2`, the provider will move all platform-specific code to separate engines, then create a separate engine per platform. This makes it possible to make the provider available to all platforms, and have it use a platform-specific engine for each platform.

This means that when we now autocomplete text on `iOS`, we will use a platform-specific engine:

![Autocomplete on iOS]({{page.assets}}ios.png){:class="medium"}

This is true on `tvOS` as well, which means that you can implement autocomplete even if you skip a keyboard:

![Autocomplete on tvOS]({{page.assets}}tvos.png){:class="plain"}

You will be able to use the provider on `macOS` as well, which means that you can autocorrect text in all kind of apps (sorry for this uninspired screenshot):

![Autocomplete on macOS]({{page.assets}}macos.png)

The provider will be available in `watchOS` as well, but the result will be stubbed since the platform lacks autocomplete capabilities.

![Autocomplete on watchOS]({{page.assets}}watchos.png){:class="medium"}

You may wonder why the provider will be made available on `watchOS` when it doesn't return any suggestions. The reason here is to make the provider available on all platforms to remove the need for OS checks in your code. The provider is still functional, even if it just returns the currentl word.

KeyboardKit 7.2 will be released in the second half of March.