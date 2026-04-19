(function() {
  const nav = document.querySelector('.side-menu-nav');
  const content = document.querySelector('.side-menu-content');

  if (!nav || !content) return;

  const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
  const headings = links
    .map((link) => {
      const id = decodeURIComponent(link.getAttribute('href').slice(1));
      const heading = content.querySelector(`h2[id="${CSS.escape(id)}"]`);
      return heading ? { link, heading } : null;
    })
    .filter(Boolean);

  if (!headings.length) return;

  function currentOffset() {
    const header = document.querySelector('header[role="banner"]');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    return headerHeight + 32;
  }

  function setActiveLink(activeLink) {
    links.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function updateActiveLink() {
    const offset = currentOffset();
    let active = headings[0].link;

    for (const item of headings) {
      if (item.heading.getBoundingClientRect().top <= offset) {
        active = item.link;
      } else {
        break;
      }
    }

    setActiveLink(active);
  }

  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  window.addEventListener('resize', updateActiveLink);
  window.addEventListener('hashchange', updateActiveLink);
})();
