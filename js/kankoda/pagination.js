(function () {
  window.Pagination = function (options) {
    var items = options.items;
    var perPage = options.perPage || 20;
    var containerEl = options.containerEl;
    var paginationEl = options.paginationEl;
    var onPageChange = options.onPageChange;
    var currentPage = 1;

    function totalPages(filteredItems) {
      return Math.max(1, Math.ceil(filteredItems.length / perPage));
    }

    function getPageItems(filteredItems) {
      var start = (currentPage - 1) * perPage;
      return filteredItems.slice(start, start + perPage);
    }

    function pageNumbers(total, current) {
      if (total <= 6) return Array.from({ length: total }, function (_, i) { return i + 1; });
      if (current <= 3) return [1, 2, 3, 4, "...", total];
      if (current >= total - 2) return [1, "...", total - 3, total - 2, total - 1, total];
      return [1, "...", current - 1, current, current + 1, "...", total];
    }

    function render(filteredItems) {
      var total = totalPages(filteredItems);
      if (currentPage > total) currentPage = 1;

      var pageItems = getPageItems(filteredItems);
      items.forEach(function (item) {
        item.style.display = pageItems.includes(item) ? "" : "none";
      });

      if (!paginationEl) return;
      if (total <= 1) {
        paginationEl.innerHTML = "";
        return;
      }

      var pages = pageNumbers(total, currentPage);
      var html = "<button class=\"pagination-prev\" data-page=\"" + (currentPage - 1) + "\"" + (currentPage === 1 ? " disabled" : "") + ">&#8592;</button>";
      pages.forEach(function (p) {
        if (p === "...") {
          html += "<span class=\"pagination-ellipsis\">&#8230;</span>";
        } else {
          html += "<button class=\"pagination-page" + (p === currentPage ? " active" : "") + "\" data-page=\"" + p + "\">" + p + "</button>";
        }
      });
      html += "<button class=\"pagination-next\" data-page=\"" + (currentPage + 1) + "\"" + (currentPage === total ? " disabled" : "") + ">&#8594;</button>";

      paginationEl.innerHTML = html;
      paginationEl.querySelectorAll("button[data-page]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (btn.disabled) return;
          currentPage = parseInt(btn.dataset.page);
          if (onPageChange) onPageChange();
          if (containerEl) containerEl.scrollIntoView({ behavior: "smooth" });
        });
      });
    }

    function reset() {
      currentPage = 1;
    }

    return { render: render, reset: reset };
  };
})();
