---
permalink: /partners
layout: page-sidebar

title: Partners

description: This page lists KeyboardKit's various partners.
---

Since KeyboardKit is developed by a small team, we .

<article class="split-list">
    {% for item in site.data.partners %}
    <a name="{{item.name}}"></a>
    {% include kankoda/split/split-item item=item %}
    {% endfor %}
</article>