/**
 * Slide-in Reveal
 * Reveals elements with the .slide-in class as they enter the viewport.
 */

(function() {
  const elements = document.querySelectorAll('.slide-in');
  if (!elements.length) return;

  document.documentElement.classList.add('motion-ready');

  function reveal(element) {
    element.classList.add('is-visible');
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  elements.forEach(function(element) {
    observer.observe(element);
  });
})();
