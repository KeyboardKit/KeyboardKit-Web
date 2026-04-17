---
layout: page
title: Case Studies
permalink: /case-studies

page-class: glass-background bg4

image: /assets/headers/case-studies.jpg
---

<h1>Case Studies</h1>

<p>
Below are case studies of some apps & products that use KeyboardKit to build their keyboards.
</p>

<p>
Are you using KeyboardKit? We'd love to hear about it! Whether it's an innovative product, a way to help people communicate, or just fun, <a href="{{site.email_url}}">Reach out</a> and share your story!
</p>

{% assign featured_studies = site["case-studies"] | where: "featured", 1 %}
{% assign bossai = site["case-studies"] | where: "name", "BossAI" | first %}
{% assign lingo = site["case-studies"] | where: "name", "Lingo" | first %}
{% assign gif_ai = site["case-studies"] | where: "name", "GIF AI Keyboard" | first %}

<div class="grid col2">
  {% for study in featured_studies limit:4 %}
    {% include kankoda/components/image-link item=study %}
  {% endfor %}
</div>

<section class="image-card-mockups">
  <h2>Image Card Mockup</h2>
  <p>
    This is a first visual mockup of a more editorial case study card that can carry more context than the image link alone.
  </p>

  <div class="grid col3">
    {% include kankoda/components/image-card
      item=bossai
      icon="lucide:mic"
      icon_color="orange"
      media_title="BossAI"
      media_subtitle="Voice-First AI Keyboard"
      tags="AI|Voice"
      title="BossAI: Voice-First AI Keyboard"
      description="Revolutionary voice-powered keyboard with AI predictions, transforming how users type with natural speech."
      highlight="95% accuracy • Voice-powered"
      hide_divider=true
      hide_footer=true
    %}
    {% include kankoda/components/image-card
      item=lingo
      icon="lucide:languages"
      icon_color="blue"
      media_title="Lingo"
      media_subtitle="Your Intelligent Translation Keyboard"
      tags="Translation|Global"
      title="Lingo: Intelligent Translation Keyboard"
      description="Real-time translation keyboard supporting 100+ languages with smart context understanding and localized typing."
      highlight="100+ languages • Real-time translation"
      hide_divider=true
      hide_footer=true
    %}
    {% include kankoda/components/image-card
      item=gif_ai
      icon="lucide:clapperboard"
      icon_color="red"
      media_title="GIF AI"
      media_subtitle="Generate Custom GIFs While You Type"
      tags="GIF|Creative"
      title="GIF AI: Custom GIF Generator Keyboard"
      description="Generate custom GIFs while you type with AI-powered creation that keeps every conversation playful and expressive."
      highlight="AI-powered • Instant GIF creation"
      hide_divider=true
      hide_footer=true
    %}
  </div>
</section>
