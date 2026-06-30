---
permalink: /app
layout: plain

title: App
page-title: KeyboardKit App

assets: /assets/devices/

image: /assets/headers/keyboardkit.jpg

description: The KeyboardKit app lets you try KeyboardKit and all pro features on iPhone & iPad.
---

<section class="hero glow">
  <div class="split-container wrapper wide">
    <div class="hero-content">
      <div class="rounded glass tag">Custom Keyboard App for iPhone & iPad</div>
      <h1>KeyboardKit App</h1>
      <h2>Install KeyboardKit on your device, no code required.</h2>
      <p>{{ page.description }}</p>
      <div>
        <a href="{{site.urls.appstore}}" class="cta">Download on the App Store</a>
        <a href="#features" class="cta glass">Learn More</a>
      </div>
    </div>
    <img src="{{page.assets}}App-Split.png" class="plain" />
  </div>
</section>

<section class="showcase blue split-list">
  <a name="features"></a>
  {% for item in site.data.app-split-items %}
    {% include kankoda/split/split-item item=item %}
  {% endfor %}
</section>

<section class="showcase purple">
  <a name="privacy"></a>
  <article class="wrapper wide slide-in">
    <h2>Privacy First</h2>
    <p>Just like the KeyboardKit SDK, the app does not collect or train on your data. Your typing stays on your device.</p>
    <div>
      <a href="/app/privacy" class="cta">Privacy Policy</a>
    </div>
  </article>
</section>

<section class="showcase dark">
  <div class="wrapper wide slide-in">
    <h2>Try KeyboardKit Today.</h2>
    <p>Download the KeyboardKit app from the App Store and experience every pro feature on your own device.</p>
    <a href="{{site.urls.appstore}}" class="cta glass">Download on the App Store</a>
  </div>
</section>
