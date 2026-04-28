(function() {
  const button = document.querySelector('.scroll-to-top');
  if (!button) return;

  function updateVisibility() {
    button.classList.toggle('is-visible', window.scrollY > 300);
  }

  button.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
})();
