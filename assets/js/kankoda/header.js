/**
 * Header Scroll Detection
 * Adds 'scrolled' class to header when page is scrolled down more than 50px
 */
(function() {
  const header = document.querySelector('header');
  if (!header) return;

  function updateHeaderState() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Initial check
  updateHeaderState();

  // Listen for scroll events
  window.addEventListener('scroll', updateHeaderState, { passive: true });
})();
