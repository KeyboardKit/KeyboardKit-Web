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
  <div class="split-container wrapper wide slide-in">
    <div>
      <p class="eyebrow">All Features</p>
      <h2>Every feature, ready to try</h2>
      <p>The KeyboardKit app uses <a href="/pro">KeyboardKit Pro</a> to enable autocomplete, dictation, emojis, fonts, themes, and AI support, so you can evaluate everything before writing a single line of code.</p>
    </div>
    <img src="{{page.assets}}App-Settings.png" />
  </div>

  <div class="split-container wrapper wide slide-in">
    <div>
      <p class="eyebrow">Localization</p>
      <h2>Type in {{site.locales.count}} languages</h2>
      <p>The KeyboardKit app supports all <a href="/locales">{{site.locales.count}} supported languages</a>, including localized features, right on your own device.</p>
    </div>
    <img src="{{page.assets}}App-Locales.png" />
  </div>

  <div class="split-container wrapper wide slide-in">
    <div>
      <p class="eyebrow">Themes</p>
      <h2>Style With Themes</h2>
      <p>The KeyboardKit app comes with a bunch of <a href="/features/themes">themes</a>, to let you style the keyboard to your likin. It also lets you create your own themes.</p>
    </div>
    <img src="{{page.assets}}app-themes.png" />
  </div>

  <div class="split-container wrapper wide slide-in">
    <div>
      <p class="eyebrow">Fonts</p>
      <h2>Type with custom fonts</h2>
      <p>The KeyboardKit app supports typing with custom, Unicode <a href="/features/fonts">fonts</a>, which encode the font into the character itself.</p>
    </div>
    <img src="{{page.assets}}App-Fonts.png" />
  </div>

  <div class="split-container wrapper wide slide-in">
    <div>
      <p class="eyebrow">Clipboard</p>
      <h2>Paste from the system clipboard</h2>
      <p>The KeyboardKit app lets you paste directly from the system <a href="/features/clipboard">clipboard</a>, and also supports letting you create your own, commonly used text clips.</p>
    </div>
    <img src="{{page.assets}}app-clipboard.png" />
  </div>

  <div class="split-container wrapper wide slide-in">
    <div>
      <p class="eyebrow">Customizable</p>
      <h2>Fully customizable</h2>
      <p>The KeyboardKit app lets you add and replace keys, and making the keys larger and bolder.</p>
    </div>
    <img src="{{page.assets}}app-clipboard.png" />
  </div>
</section>

<section class="showcase purple">
  <a name="privacy"></a>
  <article class="wrapper wide slide-in">
    <h2>Privacy First</h2>
    <p>Just like the KeyboardKit SDK, the app does not collect any data. Your typing stays on your device.</p>
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
