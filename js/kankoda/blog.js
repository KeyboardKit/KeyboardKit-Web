(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const tagButtons = document.querySelectorAll(".blog .side-menu .tag[data-tag]");
    const searchInput = document.querySelector(".blog-search");
    const posts = Array.from(document.querySelectorAll(".blog-post"));
    const paginationEl = document.querySelector(".pagination");
    if (!posts.length) return;

    const pagination = window.Pagination({
      items: posts,
      perPage: 20,
      paginationEl: paginationEl,
      containerEl: document.querySelector(".blog-header"),
      onPageChange: applyFilters
    });

    let activeTag = null;
    let searchQuery = "";

    function getMatchingPosts() {
      return posts.filter(function (post) {
        const tags = post.dataset.tags ? post.dataset.tags.split(",") : [];
        const matchesTag = !activeTag || tags.includes(activeTag);
        const matchesSearch = !searchQuery ||
          post.dataset.title.includes(searchQuery) ||
          post.dataset.excerpt.includes(searchQuery) ||
          tags.some(function (t) { return t.includes(searchQuery); });
        return matchesTag && matchesSearch;
      });
    }

    function applyFilters() {
      tagButtons.forEach(function (b) {
        const isActive = b.dataset.tag === activeTag;
        b.classList.toggle("active", isActive);
        b.classList.toggle("inactive", !!activeTag && !isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      pagination.render(getMatchingPosts());
    }

    tagButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeTag = activeTag === btn.dataset.tag ? null : btn.dataset.tag;
        pagination.reset();
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        searchQuery = searchInput.value.trim().toLowerCase();
        pagination.reset();
        applyFilters();
      });
    }

    applyFilters();
  });
})();
