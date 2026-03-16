---
id: pro-custom
title: Business Licenses
layout: page
permalink: /pro/business-licenses

redirect_from: 
  - pro/custom-licenses

image: /assets/headers/business-licenses.jpg

hero:
  hero-title: Business Licenses

description: KeyboardKit has business licenses for larger companies and apps.
---

[KeyboardKit](/pro) requires a business license for companies with $10M+ in annual revenue or apps with $1M+ in annual revenue.


<div class="grid col3">
  {% for tier in site.data.business-tiers %}
  {% include kankoda/licenses/tier-box
     name=tier.name
     header=tier.header
     header-class=tier.header-class
     price=tier.price
     price-from=tier.price-from
     description=tier.description
     features=tier.features
     delay=forloop.index0 %}
  {% endfor %}
</div>


## Features

Our business licenses provide support tailored to your legal, technical, and procurement needs.

<div class="rounded glass info-table slide-in">
  {% for feature in site.data.business-features %}
  <div style="display: flex; align-items: center; justify-content: space-between;">
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