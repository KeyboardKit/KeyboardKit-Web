---
permalink: /partners
layout: page-sidebar

title: Partners

sidebar-menu:
  title: Partners
  data: partners

description: KeyboardKit is looking for partners to help grow sales, strengthen the team during integration projects, and scale customer support.
---

Since KeyboardKit is developed by a small team, we surround ourselves with experts in various fields. They help us expand our capabilities and can assist you when you need it.

Whether you're an agency, consultancy, platform provider, or technology company, we'd love to explore how we can work together. [Contact us]({{site.urls.email}}) via email or [schedule an intro call]({{site.urls.calendar}}).

<article class="split-list">
    {% assign partners = site.data.partners | where_exp: "item", "item.excluded != 1" %}
    {% for item in partners %}
    {% include kankoda/split/split-item item=item button-text="Visit Website" %}
    {% endfor %}
</article>