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


<div class="grid col3 business-tiers">
  {% for tier in site.data.business-tiers %}
  {% include kankoda/licenses/business-tier
     name=tier.name
     price=tier.price
     price-from=tier.price-from
     description=tier.description
     features=tier.features
     delay=forloop.index0 %}
  {% endfor %}
</div>


## Features

Our business licenses provide business-critical support tailored to your organization's needs, such as legal and procurement flexibility, risk management, and dedicated technical support.

<div class="rounded glass business-features slide-in">
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