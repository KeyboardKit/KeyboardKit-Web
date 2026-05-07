(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const tagButtons = document.querySelectorAll(".blog .side-menu .tag[data-tag]");
    const searchInput = document.querySelector(".blog-search");
    const posts = document.querySelectorAll(".blog-post");
    if (!posts.length) return;

    let activeTag = null;
    let searchQuery = "";

    function applyFilters() {
      tagButtons.forEach(function (b) {
        const isActive = b.dataset.tag === activeTag;
        b.classList.toggle("active", isActive);
        b.classList.toggle("inactive", !!activeTag && !isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      posts.forEach(function (post) {
        const tags = post.dataset.tags ? post.dataset.tags.split(",") : [];
        const matchesTag = !activeTag || tags.includes(activeTag);
        const matchesSearch = !searchQuery ||
          post.dataset.title.includes(searchQuery) ||
          post.dataset.excerpt.includes(searchQuery) ||
          tags.some(function (t) { return t.includes(searchQuery); });
        post.style.display = matchesTag && matchesSearch ? "" : "none";
      });
    }

    tagButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeTag = activeTag === btn.dataset.tag ? null : btn.dataset.tag;
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        searchQuery = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }
  });
})();
