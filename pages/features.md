---
title: KeyboardKit
subtitle: Features & Capabilities
subtitle-color: blue
menu-title: Features
intro: KeyboardKit has many features.<br />Upgrade to <a href="/pro" class="pro">KeyboardKit Pro</a> to unlock powerful pro features.
permalink: /features
layout: side-menu-page

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

<div class="grid col3">
{% for feature in core_features %}
  {% include kankoda/components/image-card item=feature %}
{% endfor %}
</div>

## System & Utilities

<div class="grid col3">
{% for feature in system_features %}
  {% include kankoda/components/image-card item=feature %}
{% endfor %}
</div>

## Intelligence & Text

<div class="grid col3">
{% for feature in intelligence_features %}
  {% include kankoda/components/image-card item=feature %}
{% endfor %}
</div>

## UI & Design

<div class="grid col3">
{% for feature in ui_features %}
  {% include kankoda/components/image-card item=feature %}
{% endfor %}
</div>