/**
 * Overscroll Background
 * Mirrors the first section's full background (gradient included) onto
 * the html element so the rubber-band / elastic overscroll area at the
 * top matches the hero, and the footer color matches at the bottom.
 */

(function () {
  function applyBackground(el) {
    if (!el) return;
    var s   = getComputedStyle(el);
    var img = s.backgroundImage;
    var bg  = s.backgroundColor;
    var html = document.documentElement;

    if (img && img !== 'none') {
      html.style.backgroundImage = img;
      // Keep a matching solid fallback in case the gradient has transparent areas
      html.style.backgroundColor = (bg && bg !== 'rgba(0, 0, 0, 0)') ? bg : '';
    } else if (bg && bg !== 'rgba(0, 0, 0, 0)') {
      html.style.backgroundImage = 'none';
      html.style.backgroundColor = bg;
    }
  }

  function init() {
    var sections = document.querySelectorAll('section');
    if (!sections.length) return;

    var topEl    = sections[0];
    var footer   = document.querySelector('footer');
    var bottomEl = footer || sections[sections.length - 1];

    applyBackground(topEl);

    window.addEventListener('scroll', function () {
      var scrollY   = window.scrollY;
      var maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      applyBackground(scrollY > maxScroll - 300 ? bottomEl : topEl);
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
