// Scroll

function scrollToOffset(offset) {
  window.scrollTo({ top: offset, behavior: 'smooth' });
}

function scrollToAnchor(name) {
  var anchor = $("a[name='"+ name +"']");
  var offset = anchor.offset().top;
  scrollToOffset(offset);
}

function scrollToTop() {
  scrollToOffset(0);
}

// Footer mobile accordion

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.footer-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      const column = this.parentElement;
      column.classList.toggle('expanded');
    });
  });
});

// Tags

function toggleTagList() {
  let el = $(".tag-list");
  let toggle = $(".tag-list-toggle a");
  el.toggleClass("expanded");
  let isExpanded = el.hasClass("expanded");
  if (isExpanded) {
    el.removeClass("collapsed")
    toggle.text("Hide tags");
  } else {
    el.addClass("collapsed")
    toggle.text("Show tags");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function hideAllTags() {
  $(".tag-item").hide();
}

function hideTag(tag) {
  $(".tag-" + tag).hide();
}

function showAllTags() {
  $(".tag-item").show();
}

function showTag(tag) {
  if ($(".tag-item")[0]){
    hideAllTags();
    $(".tag-" + tag).show();
    scrollToAnchor("tag-item-list");
  } else {
    window.location.href = "/blog#" + tag; 
  }
}

// Animations

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.slide-in').forEach(element => {
    element.style.opacity = '0';
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.slide-in').forEach(element => {
    observer.observe(element);
  });
});

// Search ***

document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('searchbar');
  const clear = document.getElementById('searchbar-clear');
  if (!input) return;

  // Find a sensible content scope
  const scope = document.querySelector('main') || document;

  // All H2s define post starts
  const h2s = Array.from(scope.querySelectorAll('h2'));
  if (h2s.length === 0) return;

  // Wrap each post: move the H2 first, then hoover up siblings until the next H2
  const posts = h2s.map(h2 => {
    const wrapper = document.createElement('div');
    wrapper.className = 'search-postblock';

    // Insert wrapper before the h2, then move h2 into it
    h2.parentNode.insertBefore(wrapper, h2);
    wrapper.appendChild(h2);

    // After moving h2, the next sibling of the WRAPPER is what used to be h2.nextElementSibling
    let el = wrapper.nextElementSibling;
    while (el && el.tagName !== 'H2') {
      const next = el.nextElementSibling; // cache before moving
      wrapper.appendChild(el);            // move under wrapper
      el = next;                          // continue from the original flow
    }

    // Precompute searchable text
    const title = (h2.textContent || '').toLowerCase();
    const text  = (wrapper.textContent || '').toLowerCase();
    return { wrapper, title, text };
  });

  // Debounce helper
  let t = null;
  const debounce = (fn, ms = 120) => (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };

  function filter(query) {
    const q = (query || '').trim().toLowerCase();
    const showAll = q.length === 0;
    let anyMatch = false;

    posts.forEach(p => {
      const match = showAll ? true : (p.title.includes(q) || p.text.includes(q));
      p.wrapper.style.display = match ? '' : 'none';
      if (match) anyMatch = true;
    });

    clear.hidden = showAll;

    // No-results message
    let empty = document.getElementById('searchbar-empty');
    if (!empty) {
      empty = document.createElement('p');
      empty.id = 'searchbar-empty';
      empty.style.opacity = '0.75';
      empty.style.fontStyle = 'italic';
      posts[0].wrapper.parentElement.insertBefore(empty, posts[0].wrapper);
    }
    empty.textContent = (!anyMatch && !showAll) ? 'No posts matched your search.' : '';
  }

  input.addEventListener('input', debounce(e => filter(e.target.value)));
  clear.addEventListener('click', () => { input.value = ''; filter(''); input.focus(); });

  // Support prefilled ?q=
  const params = new URLSearchParams(location.search);
  if (params.has('q')) {
    input.value = params.get('q');
    filter(input.value);
  }
});