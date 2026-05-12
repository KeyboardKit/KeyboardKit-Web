/**
 * Code Box Labels
 * Reads Rouge language classes and turns them into title-bar labels.
 */

(function() {
  const blocks = document.querySelectorAll('div.highlighter-rouge, div.highlight, figure.highlight');
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

  const clipboardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>';
  const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  blocks.forEach(function(block) {
    if (block.dataset.language) return;

    const languageClass = findLanguageClass(block);
    const rawLanguage = languageClass
      ? languageClass.replace('language-', '').toLowerCase()
      : '';

    block.dataset.language = formatLanguage(rawLanguage);
  });

  blocks.forEach(function(block) {
    const btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.setAttribute('aria-label', 'Copy code');
    btn.innerHTML = clipboardIcon;

    btn.addEventListener('click', function() {
      const pre = block.querySelector('pre') || block.querySelector('code');
      if (!pre) return;
      const text = pre.innerText || pre.textContent;
      navigator.clipboard.writeText(text).then(function() {
        btn.innerHTML = checkIcon;
        btn.classList.add('copied');
        setTimeout(function() {
          btn.innerHTML = clipboardIcon;
          btn.classList.remove('copied');
        }, 2000);
      });
    });

    block.appendChild(btn);
  });
})();
