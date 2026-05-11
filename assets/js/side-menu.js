(function() {
  const nav = document.querySelector('.side-menu');
  const content = document.querySelector('.side-menu-content');

  if (!nav || !content) return;

  const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
  const topLink = nav.querySelector('[data-side-menu-top="true"]');
  const headingLinks = links.filter((link) => link !== topLink);
  const headings = headingLinks
    .map((link) => {
      const id = decodeURIComponent(link.getAttribute('href').slice(1));
      const heading = content.querySelector(`h2[id="${CSS.escape(id)}"]`);
      return heading ? { link, heading } : null;
    })
    .filter(Boolean);

  if (!topLink && !headings.length) return;

  let activeLink = null;

  function currentOffset() {
    const header = document.querySelector('header[role="banner"]');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    return headerHeight + 32;
  }

  function setActiveLink(nextActiveLink) {
    if (!nextActiveLink || nextActiveLink === activeLink) return;
    activeLink = nextActiveLink;

    links.forEach((link) => {
      const isActive = link === nextActiveLink;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function pageIsAtTop() {
    return window.scrollY <= 4;
  }

  function pageIsAtBottom() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  }

  function updateActiveLink() {
    const offset = currentOffset();
    if (pageIsAtTop()) {
      setActiveLink(topLink || headings[0].link);
      return;
    }

    if (!headings.length) {
      setActiveLink(topLink);
      return;
    }

    if (pageIsAtBottom()) {
      setActiveLink(headings[headings.length - 1].link);
      return;
    }

    const scrollPosition = window.scrollY + offset;
    let active = headings[0].link;

    for (let index = 0; index < headings.length; index += 1) {
      const current = headings[index];
      const next = headings[index + 1];
      const currentTop = current.heading.offsetTop;
      const nextTop = next ? next.heading.offsetTop : Number.POSITIVE_INFINITY;
      const sectionBoundary = next ? currentTop + ((nextTop - currentTop) / 2) : Number.POSITIVE_INFINITY;

      if (scrollPosition < sectionBoundary) {
        active = current.link;
        break;
      }

      active = current.link;
    }

    setActiveLink(active);
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (link === topLink) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      setActiveLink(link);
    });
  });

  nav.classList.add('no-transitions');
  updateActiveLink();
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      nav.classList.remove('no-transitions');
    });
  });

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  window.addEventListener('resize', updateActiveLink);
  window.addEventListener('hashchange', updateActiveLink);
})();
