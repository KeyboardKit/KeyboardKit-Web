---
eyebrow: KeyboardKit
title: Case Studies
title-color: purple
intro: Below are some apps & products that use KeyboardKit.
permalink: /case-studies
layout: page

image: /assets/headers/case-studies.jpg
---

KeyboardKit can be used to create apps in many different [industries](/industries), from language and typing, to medicine, science, media, etc. Are you using KeyboardKit and want to be listed here? [Let us know]({{site.urls.email}}).

<div class="spaced grid col3">
  {% for item in site.case-studies %}
    {% include kankoda/components/image-card item=item %}
  {% endfor %}
</div>
