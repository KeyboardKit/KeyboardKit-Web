---
title: Themes
description: Flexible keyboard themes
hero:
  emoji: 🍭

redirect_from: 
  - /themes
  - /pro/themes
---

KeyboardKit Pro unlocks a theme engine, with many themes, an observable context and auto-persisted settings. A theme can define many styles, such as colors, borders, shadows, corner radii, etc.


## KeyboardKit Pro

KeyboardKit Pro comes with many predefined themes, with various style variations for each theme.

<section class="themes">
{% for theme in site.data.themes %}
    <h3>{{theme.name}}</h3>
    <div class="grid col4 images">
    {% for style in theme.styles %}
      <img src="{{style.image}}" alt="Style preview" style="border-radius:10px" />
    {% endfor %}
    </div>
    {{style}}
    <br />
{% endfor %}
</section>


## Custom Themes

You can use any of the themes that come with the engine, and even create your own. A theme can also provide a theme-specific style to make it easier to customize just that specific theme.


[Pro]: /pro