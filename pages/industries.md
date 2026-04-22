---
eyebrow: KeyboardKit
title: Industries
title-color: green
intro: KeyboardKit powers innovation across a wide range of industries and use cases.
permalink: /industries
layout: page

image: /assets/headers/case-studies.jpg
---

KeyboardKit can be used to build keyboard experiences for many different industries — from language technology and AI, to medicine, finance, child protection, and entertainment. [Contact us]({{site.urls.email}}) if you'd like to discuss your use case.

<div class="spaced grid col4">
  {% for industry in site.data.industries %}
  <div class="glass compact">
    {% include kankoda/components/icon-badge color="blue" name=industry.icon %}
    <h4>{{ industry.title }}</h4>
    <p>{{ industry.text }}</p>
  </div>
  {% endfor %}
</div>
