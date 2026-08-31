---
permalink: /pricing
layout: plain

title: Pricing

image: /assets/headers/pro.jpg

description: KeyboardKit Pro unlocks critical pro features, like 76 languages, on-device autocomplete, AI support, dictation, emojis, themes, and much more.

custom-license-email: mailto:info@keyboardkit.com?subject=KeyboardKit%20Pro%20-%20Custom%20Plan
terms: /pro/terms
---

<div class="hero glow" markdown="1">

# KeyboardKit Pro

## Pricing that scales with your app.

{% include kankoda/licenses/tier-price-toggle %}
{% include kankoda/licenses/tier-boxes tiers=site.data.tiers %}
{% include kankoda/licenses/business-disclaimer  %}
</div>

<section class="showcase blue">
  <div class="wide wrapper slide-in" markdown="1">
## Full Feature Comparison

Compare all features across all plans.

{% include licenses/feature-table.html tiers=site.data.tiers %}
  </div>
</section>

<section class="showcase purple">
  {% include sections/pro/terms-standard %}
</section>

<section class="showcase blue">
  {% include sections/pro/faq %}
</section>

<section class="showcase dark">
  <div class="wrapper slide-in">
    <h2>Start building today.</h2>
    <p>Try KeyboardKit Pro free for 7 days — upgrade to a plan when you're ready.</p>
    <div>
      <a href="/pro/free-trial" class="cta glass">Get Free Trial</a>
      <a href="{{site.urls.email}}" class="cta glass">Contact Us</a>
    </div>
  </div>
</section>