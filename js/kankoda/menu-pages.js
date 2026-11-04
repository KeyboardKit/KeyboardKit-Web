/**
 * Menu Pages
 * Handles the desktop hamburger menu for `header.menu-pages`. On mobile the
 * same pages are part of the mobile menu, so this does nothing there.
 */

(function() {
  const toggle = document.querySelector('.menu-pages-toggle');
  const dropdown = document.querySelector('.menu-pages-dropdown');

  if (!toggle || !dropdown) return;

  function setOpen(open) {
    toggle.classList.toggle('active', open);
    dropdown.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function() {
    setOpen(!dropdown.classList.contains('open'));
  });

  // Close when clicking outside
  document.addEventListener('click', function(event) {
    if (!toggle.contains(event.target) && !dropdown.contains(event.target)) setOpen(false);
  });

  // Close with Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') setOpen(false);
  });
})();
