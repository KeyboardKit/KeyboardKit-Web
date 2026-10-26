---
permalink: /partners
layout: page-sidebar

title: Partners

sidebar-menu:
  title: Partners
  data: partners

description: KeyboardKit is looking for partners to help grow sales, strengthen the team during integration projects, and scale customer support.
---

Since KeyboardKit is developed by a small team, we surround ourselves with experts in various fields, to expand our capabilities and provide you with the help you need when you need it.

Whether you're an agency, consultancy, platform provider, or technology company, we'd love to explore how we can work together. [Contact us]({{site.urls.email}}) via email or schedule an intro call [here]({{site.urls.calendar}}).

<article class="split-list">
    {% for item in site.data.partners %}
    <a name="{{item.name}}"></a>
    {% include kankoda/split/split-item item=item button-text="Visit Their Website" %}
    {% endfor %}
</article>