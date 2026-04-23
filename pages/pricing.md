---
title: Pricing
layout: plain
permalink: /pricing

image: /assets/headers/pro.jpg

description: KeyboardKit Pro unlocks critical pro features, like 75 languages, on-device autocomplete, AI support, dictation, emojis, themes, and much more.

custom-license-email: mailto:info@keyboardkit.com?subject=KeyboardKit%20Pro%20-%20Custom%20Plan
terms: /pro/terms
---

<div class="centered page-content wide wrapper" markdown="1">
![KeyboardKit Pro Icon](/assets/icon/pro-shadow.png){:width="200px" class="plain"}
# Pro Pricing
## Choose the plan that fits your needs

<div class="wrapper" markdown="1">
  The standard tiers are for indies, startups and small businesses.
</div>


## Plans

Companies with $10M+ in annual revenue and apps with $1M+ in annual revenue need a [business license]({{site.urls.business}}). 

<div class="grid col4 tiers">
  {% for tier in site.data.tiers %}
    {% include kankoda/licenses/tier-box tier=tier %}
  {% endfor %}
</div>

Standard subscriptions are managed via [Gumroad]({{site.urls.gumroad}}). Sign up for a full year to save on your yearly price!


## Full Feature Comparison

Compare all features across all plans.

{% include licenses/feature-table.html tiers=site.data.tiers %}


## Terms & Conditions

The standard [Terms & Conditions]({{page.terms}}) apply to all standard tiers. [Contact us]({{site.urls.email-custom-terms}}) to discuss custom terms.
</div>

<section class="showcase dark blue">
  <div class="wrapper slide-in">
    <h2>Start building today.</h2>
    <p>Try KeyboardKit Pro free for 7 days — no credit card required. Upgrade to a plan when you're ready.</p>
    <div>
      <a href="/pro/free-trial" class="glass">Get Free Trial</a>
      <a href="{{site.urls.email}}" class="glass secondary">Contact Us</a>
    </div>
  </div>
</section>