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
  {% include licenses/business-tier
     name=tier.name
     price=tier.price
     price-from=tier.price-from
     description=tier.description
     features=tier.features
     delay=forloop.index0 %}
  {% endfor %}
</div>


Our business licenses provide business-critical support tailored to your organization's needs, such as legal and procurement flexibility, risk management, and dedicated technical support.


### Additional Apps & Products

Include additional apps at a discounted price in a single business license.

### Custom Billing

Customize your billing method, billing cadence, etc.

### Custom SLA

Customize your SLA and support level to fit your high-impact needs.

### Custom Terms

Customize your license terms to cater to specific business and legal requirements.

### Expiration Grace Period

Include an expiration grace period to provide a more flexible license expiration behavior.

### Multi-platform Support

Request tailored multi-platform builds of certain SDK versions for any supported platforms.

### Software Escrow

<a href="{{site.urls.software-escrow}}">Software Escrow</a> lets you access the SDK source code in case anything happens to KeyboardKit.