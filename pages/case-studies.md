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
    <span class="purple glass line">Case Studies & Success Stories</span>
  </h1>
  <h2>
    Below are some apps & products that use KeyboardKit.
  </h2>

  <p>
    KeyboardKit can be used to create apps in many different <a href="industries">industries</a>, from language and typing, to medicine, science, media, child protection, etc.
  </p>

  <p>
    Are you using KeyboardKit and want to be listed here? <a href="{{page.urls.email}}">Let us know</a>.
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
