/**
 * Footer Toggle
 * Handles collapsible footer sections on mobile
 */

(function() {
  // Only enable toggle behavior on mobile
  function isMobile() {
    return window.innerWidth <= 700;
  }

  const footerToggles = document.querySelectorAll('footer .toggle');

  footerToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      if (!isMobile()) return;

      const content = toggle.nextElementSibling;
      const isOpen = content.classList.contains('open');

      // Toggle the section
      toggle.classList.toggle('active');
      content.classList.toggle('open');
    });
  });

  // Reset footer state on resize
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      // Remove all mobile classes when switching to desktop
      footerToggles.forEach(function(toggle) {
        toggle.classList.remove('active');
        const content = toggle.nextElementSibling;
        content.classList.remove('open');
      });
    }
  });
})();
