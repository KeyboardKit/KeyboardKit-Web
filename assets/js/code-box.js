/**
 * Code Box Labels
 * Reads Rouge language classes and turns them into title-bar labels.
 */

(function() {
  const blocks = document.querySelectorAll('div.highlighter-rouge, figure.highlight');
  if (!blocks.length) return;

  const aliases = {
    bash: 'Shell',
    console: 'Shell',
    css: 'CSS',
    html: 'HTML',
    javascript: 'JavaScript',
    js: 'JavaScript',
    json: 'JSON',
    markdown: 'Markdown',
    md: 'Markdown',
    plaintext: 'Code',
    ruby: 'Ruby',
    sass: 'Sass',
    scss: 'SCSS',
    shell: 'Shell',
    sh: 'Shell',
    swift: 'Swift',
    terminal: 'Shell',
    text: 'Code',
    ts: 'TypeScript',
    typescript: 'TypeScript',
    xml: 'XML',
    yaml: 'YAML',
    yml: 'YAML',
    zsh: 'Shell'
  };

  function findLanguageClass(element) {
    const own = Array.from(element.classList).find(function(name) {
      return name.startsWith('language-');
    });

    if (own) return own;

    const nested = element.querySelector('[class*="language-"]');
    if (!nested) return null;

    return Array.from(nested.classList).find(function(name) {
      return name.startsWith('language-');
    }) || null;
  }

  function formatLanguage(raw) {
    if (!raw) return 'Code';
    if (aliases[raw]) return aliases[raw];

    return raw
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, function(char) { return char.toUpperCase(); });
  }

  blocks.forEach(function(block) {
    if (block.dataset.language) return;

    const languageClass = findLanguageClass(block);
    const rawLanguage = languageClass
      ? languageClass.replace('language-', '').toLowerCase()
      : '';

    block.dataset.language = formatLanguage(rawLanguage);
  });
})();
