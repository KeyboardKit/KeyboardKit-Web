/**
 * Split Hover Pause
 * Pauses split item hover effects while the page scrolls, until the pointer
 * moves again. Without it, images pop out as they scroll in under a resting
 * pointer, since browsers treat that as hovering.
 */

(function() {
  if (!document.querySelector('.split-media')) return;

  const root = document.documentElement;
  const className = 'hover-paused';

  // Also paused until the first pointer move, so nothing pops on page load.
  root.classList.add(className);

  window.addEventListener('scroll', function() {
    root.classList.add(className);
  }, { passive: true });

  // Some browsers send a synthetic move without any movement after scrolling,
  // to update hover state. Only resume on real movement.
  window.addEventListener('pointermove', function(event) {
    if (event.pointerType !== 'mouse') return;
    if (event.movementX === 0 && event.movementY === 0) return;
    root.classList.remove(className);
  }, { passive: true });
})();
