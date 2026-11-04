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

KeyboardKit can be used to build keyboard experiences for many different industries — from language technologies and AI, to medicine, finance, media & entertainment, and child protection and anti-bullying. [Contact us]({{site.urls.email}}) if you'd like to discuss your use case.

{% assign featured_industries = site.data.industries | where: "featured", true %}
<div class="spaced grid col3">
  {% for industry in featured_industries %}
  <div class="glass compact">
    {% include kankoda/components/icon-badge name=industry.icon %}
    <h4>{{ industry.title }}</h4>
    <p>{{ industry.text }}</p>
  </div>
  {% endfor %}
</div>

{% assign industry_sections = site.data.industries | where_exp: "item", "item.page-section != false" %}
{% for industry in industry_sections %}
{% include sections/industries/section item=industry %}
{% endfor %}
