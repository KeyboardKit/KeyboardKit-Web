---
permalink: /business
layout: plain

title: Business Licenses

redirect_from: 
  - business-licenses
  - pro/business-licenses
  - pro/custom-licenses

image: /assets/headers/business-licenses.jpg

description: KeyboardKit has business licenses for larger companies and apps.
---

<div class="centered page-content wide wrapper" markdown="1">

# KeyboardKit Pro

## Business plans, built for enterprise scale.

A business plan is required for companies with $10M+ or apps with $1M+ in annual revenue.

<div class="grid col3 tiers spaced">
  {% for tier in site.data.business-tiers %}
    {% include kankoda/licenses/tier-box tier=tier %}
  {% endfor %}
</div>
</div>


<section class="showcase blue">
<div class="centered wide wrapper" markdown="1">
## Business Features

Business plans include all [pro features](/pro) plus these additional benefits.

  <div class="grid col3 carousel mobile">
    {% for feature in site.data.usps-business %}
    <div class="glass compact">
      {% include kankoda/components/icon-badge name=feature.icon %}
      <h4>{{ feature.name }}</h4>
      <p>{{ feature.description }}</p>
      {% if feature.url %}<a href="{{ feature.url }}" class="cta">Learn more</a>{% endif %}
    </div>
    {% endfor %}
  </div>
</div>
</section>

<section class="showcase dark blue">
  <div class="wrapper slide-in">
    <h2>Let's build something great together.</h2>
    <p>Business licenses are tailored to your needs. Reach out and we'll put together a plan that fits your team, your legal requirements, and your timeline — no generic tiers, no surprises.</p>
    <div>
      <a href="{{site.urls.email-business-license}}" class="cta glass">Contact Us</a>
    </div>
  </div>
</section>

<section class="showcase blue">
  {% include sections/pro/faq %}
</section>