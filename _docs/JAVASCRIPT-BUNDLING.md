# JavaScript Bundling System

This Jekyll site uses a custom JavaScript bundling system that allows you to organize site-specific scripts into modular files.

## Directory Structure

```
/Users/danielsaidi/Projects/keyboardkit/web/
├── assets/
│   ├── site.js              # Bundle file (processes modules)
│   └── js/
│       ├── README.md        # Detailed module documentation
│       └── header.js        # Example: Header scroll detection
└── _includes/kankoda/site/
    └── head-tag             # Loads site.js with defer attribute
```

## How It Works

1. **Individual modules** are stored in `/assets/js/`
2. **Bundle file** at `/assets/site.js` uses `{% include_relative %}` to import modules
3. **Jekyll processes** the bundle during build, combining all modules into one file
4. **Output** is written to `_site/assets/site.js`
5. **Loaded** in the HTML head via the head-tag include with `defer` attribute

## Adding a New Script

### Step 1: Create the Module

Create a new JavaScript file in `/assets/js/`:

```bash
# Example: Create a new module for mobile menu
touch /Users/danielsaidi/Projects/keyboardkit/web/assets/js/mobile-menu.js
```

Write your script as an IIFE (Immediately Invoked Function Expression):

```javascript
/**
 * Mobile Menu Toggle
 * Description of what this module does
 */
(function() {
  // Your code here
  const menu = document.querySelector('.mobile-menu');

  function toggleMenu() {
    menu.classList.toggle('open');
  }

  // Event listeners, initialization, etc.
  document.querySelector('.menu-button').addEventListener('click', toggleMenu);
})();
```

### Step 2: Add to Bundle

Edit `/Users/danielsaidi/Projects/keyboardkit/web/assets/site.js` and add your module:

```liquid
---
layout: none
permalink: /assets/site.js
---

{% comment %}
Add site-specific JavaScript modules here using include_relative.
{% endcomment %}

{% include_relative js/header.js %}
{% include_relative js/mobile-menu.js %}
```

### Step 3: Build & Test

```bash
cd /Users/danielsaidi/Projects/keyboardkit/web
bundle exec jekyll build
# Or for live development:
bundle exec jekyll serve
```

Your script will be automatically bundled and loaded on all pages.

## Existing Modules

- **header.js** - Adds 'scrolled' class to header when page scrollY > 50px

## Best Practices

1. **Use IIFEs** - Wrap each module in an IIFE to avoid polluting the global namespace
2. **Add documentation** - Include a comment block at the top explaining what the module does
3. **Single responsibility** - Each module should do one thing well
4. **Defensive coding** - Check if elements exist before manipulating them
5. **Event options** - Use `{ passive: true }` for scroll/touch listeners when possible

## Key Files

- `/Users/danielsaidi/Projects/keyboardkit/web/assets/site.js` - Main bundle file
- `/Users/danielsaidi/Projects/keyboardkit/web/assets/js/` - Individual modules directory
- `/Users/danielsaidi/Projects/keyboardkit/web/_includes/kankoda/site/head-tag` - Loads the bundle (line 52)
- `/Users/danielsaidi/Projects/keyboardkit/web/_config.yml` - Jekyll configuration

## Technical Details

- **Processing**: Jekyll's Liquid templating processes site.js at build time
- **Front Matter**: site.js has `layout: none` to prevent HTML wrapper
- **Permalink**: Explicit permalink ensures correct output path
- **Loading**: Script loaded with `defer` attribute for optimal performance
- **No exclusions needed**: Files are in assets/ so they're included by default
