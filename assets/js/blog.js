(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const tagButtons = document.querySelectorAll(".blog .side-menu .tag[data-tag]");
    const searchInput = document.querySelector(".blog-search");
    const posts = Array.from(document.querySelectorAll(".blog-post"));
    const paginationEl = document.querySelector(".blog-pagination");
    if (!posts.length) return;

    const POSTS_PER_PAGE = 20;
    let activeTag = null;
    let searchQuery = "";
    let currentPage = 1;

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
      const matching = getMatchingPosts();
      const totalPages = Math.max(1, Math.ceil(matching.length / POSTS_PER_PAGE));
      if (currentPage > totalPages) currentPage = 1;

      const start = (currentPage - 1) * POSTS_PER_PAGE;
      const pageItems = matching.slice(start, start + POSTS_PER_PAGE);

      posts.forEach(function (post) {
        post.style.display = pageItems.includes(post) ? "" : "none";
      });

      tagButtons.forEach(function (b) {
        const isActive = b.dataset.tag === activeTag;
        b.classList.toggle("active", isActive);
        b.classList.toggle("inactive", !!activeTag && !isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      renderPagination(totalPages);
    }

    function pageNumbers(total, current) {
      if (total <= 6) return Array.from({ length: total }, function (_, i) { return i + 1; });
      if (current <= 3) return [1, 2, 3, 4, "...", total];
      if (current >= total - 2) return [1, "...", total - 3, total - 2, total - 1, total];
      return [1, "...", current - 1, current, current + 1, "...", total];
    }

    function renderPagination(totalPages) {
      if (!paginationEl) return;
      if (totalPages <= 1) {
        paginationEl.innerHTML = "";
        return;
      }

      const pages = pageNumbers(totalPages, currentPage);
      let html = "<button class=\"pagination-prev\" data-page=\"" + (currentPage - 1) + "\"" + (currentPage === 1 ? " disabled" : "") + ">&#8592;</button>";
      pages.forEach(function (p) {
        if (p === "...") {
          html += "<span class=\"pagination-ellipsis\">&#8230;</span>";
        } else {
          html += "<button class=\"pagination-page" + (p === currentPage ? " active" : "") + "\" data-page=\"" + p + "\">" + p + "</button>";
        }
      });
      html += "<button class=\"pagination-next\" data-page=\"" + (currentPage + 1) + "\"" + (currentPage === totalPages ? " disabled" : "") + ">&#8594;</button>";

      paginationEl.innerHTML = html;
      paginationEl.querySelectorAll("button[data-page]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (btn.disabled) return;
          currentPage = parseInt(btn.dataset.page);
          applyFilters();
          document.querySelector(".blog-header").scrollIntoView({ behavior: "smooth" });
        });
      });
    }

    tagButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeTag = activeTag === btn.dataset.tag ? null : btn.dataset.tag;
        currentPage = 1;
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        searchQuery = searchInput.value.trim().toLowerCase();
        currentPage = 1;
        applyFilters();
      });
    }

    applyFilters();
  });
})();
