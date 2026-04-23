---
title: Business Licenses
layout: plain
permalink: /business
redirect_from: 
  - business-licenses
  - pro/business-licenses
  - pro/custom-licenses

image: /assets/headers/business-licenses.jpg

description: KeyboardKit has business licenses for larger companies and apps.
---

<div class="centered page-content wide wrapper" markdown="1">
![KeyboardKit Pro Icon](/assets/icon/pro-shadow.png){:width="200px" class="plain"}
# Business Plans
## Choose the plan that fits your needs

<div class="wrapper" markdown="1">
  Companies with $10M+ and apps with $1M+ in annual revenue need a business license to use KeyboardKit.
</div>


## Plans

Our business plans include all [pro features](/pro) and add business-critical support for larger companies..

<div class="grid col3 tiers">
  {% for tier in site.data.business-tiers %}
    {% include kankoda/licenses/tier-box tier=tier %}
  {% endfor %}
</div>


## Business Features

Business plans include all [pro features](/pro) plus these additional benefits.

<div class="grid col3 carousel mobile">
  {% for feature in site.data.usps-business %}
  <div class="glass compact">
    {% include kankoda/components/icon-badge color=feature.color name=feature.icon %}
    <h4>{{ feature.name }}</h4>
    <p>{{ feature.description }}</p>
    {% if feature.url %}<a href="{{ feature.url }}" class="cta">Learn more</a>{% endif %}
  </div>
  {% endfor %}
</div>

</div>

<section class="showcase dark blue">
  <div class="wrapper slide-in">
    <h2>Let's build something great together.</h2>
    <p>Business licenses are tailored to your needs. Reach out and we'll put together a plan that fits your team, your legal requirements, and your timeline — no generic tiers, no surprises.</p>
    <div>
      <a href="{{site.urls.email-business-license}}" class="cta glass">Contact Us</a>
    </div>
  </div>
</section>