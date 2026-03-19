---
layout: blog
title: Blog
permalink: /blog

page-class: glass-background bg4 paper

top-message:
  text: Host application problems discovered in iOS 26.4 RC.
  type: warning
  link:
    text: Read more
    url: /blog/2026/03/02/ios-26-4-host-application-bundle-id-bug
---

<div class="searchbar-header">
  <h1>Blog</h1>
  {% include kankoda/search/searchbar class="glass prominent" %}
</div>

<div class="blog list">
  {%- include kankoda/tags/list tags=site.tags firstmost="releases,pro" class="collapsed" -%}
  {% include kankoda/tags/list-toggle %}
  
  <a name="tag-item-list"></a>
    {% for post in site.posts %}
      {% include kankoda/blog/list-item post=post %}
    {% endfor %}
    {%- include kankoda/tags/scripts -%}
</div>