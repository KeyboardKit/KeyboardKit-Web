(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const tagButtons = document.querySelectorAll(".blog .tags .tag");
    const searchInput = document.querySelector(".blog-search");
    const posts = document.querySelectorAll(".blog-post");
    if (!posts.length) return;

    let activeTag = null;
    let searchQuery = "";

    function applyFilters() {
      tagButtons.forEach(function (b) {
        b.classList.toggle("active", b.dataset.tag === activeTag);
        b.classList.toggle("inactive", !!activeTag && b.dataset.tag !== activeTag);
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
