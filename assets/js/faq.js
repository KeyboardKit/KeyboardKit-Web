document.querySelectorAll('.faq-item').forEach(details => {
  const summary = details.querySelector('.faq-item-title');
  const body = details.querySelector('.faq-item-body');

  summary.addEventListener('click', e => {
    e.preventDefault();

    if (details.open) {
      const anim = body.animate(
        [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-6px)' }],
        { duration: 200, easing: 'ease-in', fill: 'forwards' }
      );
      anim.onfinish = () => { details.open = false; body.style.animation = ''; };
    } else {
      details.open = true;
      body.animate(
        [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 250, easing: 'ease-out', fill: 'forwards' }
      );
    }
  });
});
