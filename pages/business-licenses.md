---
id: pro-custom
title: Business Licenses
layout: page
permalink: /business-licenses

redirect_from: 
  - pro/business-licenses
  - pro/custom-licenses

image: /assets/headers/business-licenses.jpg

hero:
  hero-title: Business Licenses

description: KeyboardKit has business licenses for larger companies and apps.
---

[KeyboardKit](/pro) requires a business license for companies with $10M+ in annual revenue or apps with $1M+ in annual revenue.


<div class="grid col3">
  TIER BOXES
  {{site.data.business-tiers}}
</div>


## Features

Our business plans include all [pro features](/pro) and add business-critical support for larger companies, tailored to your legal, technical, and procurement needs.

<div>
  {% for feature in site.data.business-features %}
  <div>
    <div>
      <h3>{{ feature.name }}</h3>
      {{ feature.description }}
    </div>
    {% if feature.url %}
    <a href="{{ feature.url }}" class="cta">Read more</a>
    {% endif %}
  </div>
  {% endfor %}
</div>