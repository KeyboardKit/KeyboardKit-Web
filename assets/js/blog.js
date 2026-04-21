(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const tagButtons = document.querySelectorAll(".blog .tags .tag");
    const posts = document.querySelectorAll(".blog-post");
    if (!tagButtons.length || !posts.length) return;

    let activeTag = null;

    tagButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const tag = btn.dataset.tag;
        if (activeTag === tag) {
          activeTag = null;
        } else {
          activeTag = tag;
        }
        tagButtons.forEach(function (b) {
          b.classList.toggle("active", b.dataset.tag === activeTag);
          b.classList.toggle("inactive", !!activeTag && b.dataset.tag !== activeTag);
        });
        posts.forEach(function (post) {
          const tags = post.dataset.tags ? post.dataset.tags.split(",") : [];
          post.style.display = !activeTag || tags.includes(activeTag) ? "" : "none";
        });
      });
    });
  });
})();
