document.querySelectorAll('.faq-item-title').forEach(title => {
  title.addEventListener('click', () => {
    const body = title.nextElementSibling;
    const isOpen = title.classList.contains('open');
    title.classList.toggle('open', !isOpen);
    body.classList.toggle('open', !isOpen);
  });
});
