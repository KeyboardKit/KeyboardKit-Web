---
permalink: /languages
layout: page-sidebar

title: Languages

redirect_from: /locales
  
description: KeyboardKit supports 111 languages
---

KeyboardKit supports **{{site.locales.count}}** languages (locales), which affects things like keyboard layout, secondary callout actions, autocomplete suggestions, dictation, writing direction, etc.


## Supported Languages

KeyboardKit supports the following languages:

{{ site.data.locales | join: ", " }}


## Localized Features

KeyboardKit defines [localized features](/features/localization), like [keyboard layouts](/features/layout) and [callout actions](/features/callouts) for all supported languages, and uses on-device operating system capabilities to provide additional features like [autocomplete](/features/autocomplete) and [dictation](/features/dictation).

Since the additional features are limited to the capabilities of the operating system, they therefore only apply to some languages, KeyboardKit can be customized and extended with plugins to support more languages.