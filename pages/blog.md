---
title: Blog
title-color: green
eyebrow: KeyboardKit
permalink: /blog
layout: blog

menu:
  title: Blog
---

{% assign all_tags = "" %}
{% for post in site.posts %}
  {% for tag in post.tags %}
    {% unless all_tags contains tag %}
      {% assign all_tags = all_tags | append: tag | append: "," %}
    {% endunless %}
  {% endfor %}
{% endfor %}
{% assign unique_tags = all_tags | split: "," | sort %}

<div class="tags">
  {% for tag in unique_tags %}
    {% if tag != "" %}
      <span class="tag">{{ tag }}</span>
    {% endif %}
  {% endfor %}
</div>
