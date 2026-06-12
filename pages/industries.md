---
permalink: /industries
layout: page

eyebrow: Custom Keyboard
title: Industries

image: /assets/headers/case-studies.jpg

description: KeyboardKit powers innovation across a wide range of industries and use cases.
---

KeyboardKit can be used to build keyboard experiences for many different industries — from language technologies and AI, to medicine, finance, media & entertainment, and child protection and anti-bullying. [Contact us]({{site.urls.email}}) if you'd like to discuss your use case.

<div class="spaced grid col4">
  {% for industry in site.data.industries %}
  <div class="glass compact">
    {% include kankoda/components/icon-badge name=industry.icon %}
    <h4>{{ industry.title }}</h4>
    <p>{{ industry.text }}</p>
  </div>
  {% endfor %}
</div>
