---
title: Features
title-color: blue
eyebrow: KeyboardKit
intro: KeyboardKit has many features.<br />Upgrade to <a href="/pro" class="pro">KeyboardKit Pro</a> to unlock powerful pro features.
permalink: /features
layout: page-sidebar

menu:
  title: Features

image: /assets/headers/features.jpg

description: KeyboardKit is packed with features that help you build amazing keyboards.
---

{% assign core_features = site.data.features | where: "group", "core" %}
{% assign system_features = site.data.features | where: "group", "system" %}
{% assign intelligence_features = site.data.features | where: "group", "intelligence" %}
{% assign ui_features = site.data.features | where: "group", "ui" %}


## Languages

KeyboardKit supports [{{site.locales.count}} languages](/locales).

{{site.locales.flags}}


## Core Engine

KeyboardKit's core keyboard engine provides essential models, features and views.

<div class="grid col3 mobile carousel">
{% for feature in core_features %}
  {% include kankoda/components/image-card item=feature color="blue" %}
{% endfor %}
</div>

## System & Utilities

KeyboardKit's system features add a native looking keyboard view and additional utilities.

<div class="grid col3 mobile carousel">
{% for feature in system_features %}
  {% include kankoda/components/image-card item=feature color="green" %}
{% endfor %}
</div>

## Intelligence & Text

KeyboardKit's text & intelligence features improves the typing and text input capabilities.

<div class="grid col3 mobile carousel">
{% for feature in intelligence_features %}
  {% include kankoda/components/image-card item=feature color="orange" %}
{% endfor %}
</div>

## UI & Design

KeyboardKit's UI & design features let you customize the keyboard and tailor it to your needs.

<div class="grid col3 mobile carousel">
{% for feature in ui_features %}
  {% include kankoda/components/image-card item=feature color="purple" %}
{% endfor %}
</div>
