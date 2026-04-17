---
layout: plain
title: Case Studies
permalink: /case-studies

page-class: glow

image: /assets/headers/case-studies.jpg
---

<article class="page-content wrapper wide">
  <h1>
    KeyboardKit
    <span class="purple line">Case Studies & Success Stories</span>
  </h1>
  <h2>
    Below are case studies of some apps & products that use KeyboardKit to build their keyboards.
  </h2>

  <p>
  Below are case studies of some apps & products that use KeyboardKit to build their keyboards.
  </p>

  <div class="spaced grid col3">
    {% for item in site.case-studies %}
      {% include kankoda/components/image-card item=item %}
    {% endfor %}
  </div>
</article>

<section class="dark blue showcase">
  {% include sections/ready-to-build %}
</section>
