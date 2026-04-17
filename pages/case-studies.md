---
layout: page
title: Case Studies
permalink: /case-studies

page-class: glow

image: /assets/headers/case-studies.jpg
---

<h1>Case Studies</h1>

<p>
Below are case studies of some apps & products that use KeyboardKit to build their keyboards.
</p>

<div class="grid col3">
  {% for item in site.case-studies %}
    {% include kankoda/components/image-card item=item %}
  {% endfor %}
</div>