---
permalink: /locales
layout: page-sidebar

title: Locales

redirect_from: /languages
  
description: KeyboardKit supports 80+ locales
---

KeyboardKit supports **{{site.locales.count}}** locales (languages), which affects things like keyboard layout, callout actions, autocomplete suggestions, etc.

## Supported Locales

KeyboardKit supports the following **{{site.locales.count}}** locales:

<ul>
  {% for locale in site.data.locales %}
  <li>{{ locale }}</li>
  {% endfor %}
</ul>


## Localized Features

KeyboardKit defines locale-specific [features](/features/localization), like locale information (name, flag, unicode information, etc.) and localized strings, while [KeyboardKit Pro](/pro) unlocks keyboard layouts and callout actions for all supported locales.