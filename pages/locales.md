---
permalink: /locales
layout: page-sidebar

title: Locales

redirect_from: /languages

hero:
  icon: /assets/heros/locales.png
  icon-class: plain
  
description: KeyboardKit supports 76 locales
---

KeyboardKit supports **{{site.locales.count}}** locales (languages), which affects things like keyboard layout, callout actions, autocomplete suggestions, etc.

## Supported Locales

Below is a list of all **{{site.locales.count}}** locales that KeyboardKit supports:

<ul>
  {% for locale in site.data.locales %}
  <li>{{ locale.flag }} {{ locale.name }}</li>
  {% endfor %}
</ul>


## Localized Features

KeyboardKit defines locale-specific [features](/features/localization), like locale information (name, flag, unicode information, etc.) and localized strings, while [KeyboardKit Pro](/pro) unlocks keyboard layouts and callout actions for all supported locales.