/**
 * Mobile Menu Toggle
 * Handles hamburger menu toggle for mobile navigation
 */

(function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header[role="banner"] nav');

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = menuToggle.contains(event.target) || nav.contains(event.target);

    if (!isClickInside && nav.classList.contains('open')) {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
    }
  });

  // Close menu on window resize if it's above mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 700 && nav.classList.contains('open')) {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
    }
  });
})();
