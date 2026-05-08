---
permalink: /pricing
layout: plain

title: Pricing

image: /assets/headers/pro.jpg

description: KeyboardKit Pro unlocks critical pro features, like 75 languages, on-device autocomplete, AI support, dictation, emojis, themes, and much more.

custom-license-email: mailto:info@keyboardkit.com?subject=KeyboardKit%20Pro%20-%20Custom%20Plan
terms: /pro/terms
---

<div class="centered page-content wide wrapper" markdown="1">

![KeyboardKit Pro Icon](/assets/icon/pro-shadow.png){:width="200px" class="plain"}

# KeyboardKit Pro
## Pricing that scales with your app.

Unlock pro features that take your keyboard to the next level.


## Standard Plans

Our standard tiers are built for indies, startups, and small businesses.

<div class="grid col4 tiers spaced">
  {% for tier in site.data.tiers %}
    {% include kankoda/licenses/tier-box tier=tier %}
  {% endfor %}
</div>


## Scaling Up?

If your company exceeds $10M or your app exceeds $1M in annual revenue, check out our [Business licenses](/business).


## Yearly Savings

Our yearly plans save you two months on your yearly price!


## Full Feature Comparison

Compare all features across all plans.

{% include licenses/feature-table.html tiers=site.data.tiers %}
</div>

<section class="showcase purple glass">
  <div class="wrapper slide-in">
    <h2>Terms & Conditions</h2>
    <p>The standard <a href="/pro/terms">Terms & Conditions</a> apply to all standard tiers. <a href="{{site.urls.email-custom-terms}}">Contact us</a> to discuss custom terms.</p>
  </div>
</section>

<section class="showcase dark blue">
  <div class="wrapper slide-in">
    <h2>Start building today.</h2>
    <p>Try KeyboardKit Pro free for 7 days — no credit card required. Upgrade to a plan when you're ready.</p>
    <div>
      <a href="/pro/free-trial" class="cta glass">Get Free Trial</a>
      <a href="{{site.urls.email}}" class="cta glass secondary">Contact Us</a>
    </div>
  </div>
</section>