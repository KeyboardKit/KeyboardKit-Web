# JavaScript Modules

This directory contains site-specific JavaScript modules that are bundled into `/assets/site.js`.

## How It Works

1. **Individual modules** go in this `assets/js/` directory
2. **Bundle file** at `/assets/site.js` imports all modules
3. **Bundle is processed** by Jekyll and output to `_site/assets/site.js`
4. **Loaded in head** via `/_includes/kankoda/site/head-tag` with `defer` attribute

## Module Structure

Each module should be a self-contained IIFE (Immediately Invoked Function Expression):

```javascript
/**
 * Module Name
 * Description of what this module does
 */
(function() {
  // Your module code here

  // Private variables and functions
  const privateVar = 'value';

  function privateFunction() {
    // ...
  }

  // Initialization
  privateFunction();
})();
```

## Adding a New Module

1. Create a new file in `assets/js/`, e.g., `assets/js/my-module.js`
2. Write your JavaScript as an IIFE (see structure above)
3. Add it to `/assets/site.js`
4. Jekyll will bundle it automatically on next build

## Existing Modules

- `header.js` - Adds 'scrolled' class to header when scrollY > 50px

## Best Practices

- Keep modules focused on a single responsibility
- Use IIFEs to avoid global namespace pollution
- Add clear documentation comments at the top of each module
- Use `defer` or `async` when loading scripts (already configured in head-tag)
- Test your modules work independently and don't conflict with each other
