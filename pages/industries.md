---
permalink: /industries
layout: side-menu

eyebrow: Custom Keyboard
title: Industries

image: /assets/headers/case-studies.jpg

sidebar-menu:
  title: Industries
  data: industries

description: KeyboardKit powers innovation across a wide range of industries and use cases.
---

# Industries

KeyboardKit can be used to build keyboard experiences for many different industries. [Contact us]({{site.urls.email}}) if you'd like to discuss your use case.

{% for industry in site.data.industries %}
{% include sections/industries/section item=industry %}
{% endfor %}

<script src="{{ "/js/videos/keyboardkit-videos.js" | relative_url }}" defer></script>
