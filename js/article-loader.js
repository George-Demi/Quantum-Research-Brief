document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = parseInt(urlParams.get("id"));

  const titleEl = document.getElementById("article-title");
  const imageEl = document.getElementById("article-image");
  // ( name of author anonymous for now) const authorEl = document.getElementById("article-author");
  const dateEl = document.getElementById("article-date");
  
  const contentEl = document.getElementById("article-content");

  if (!articleId || isNaN(articleId)) {
    titleEl.textContent = "Invalid article ID.";
    return;
  }

  fetch("data/articles.json")
    .then(res => res.json())
    .then(articles => {
      const article = articles.find(a => a.id === articleId);

      if (!article) {
        titleEl.textContent = "Article not found.";
        return;
      }

      // Set article metadata
      titleEl.textContent = article.title;
    if (article.image && !article.hideImage) {
        imageEl.src = article.image;
        imageEl.alt = article.title;
        imageEl.style.display = "block";
      } else {
        imageEl.style.display = "none";  // hide image if not available and if hideImage is true in json file
      }
      // ( name of author anonymous for now) authorEl.textContent = article.author;
      dateEl.textContent = article.date;



      // Load .md content from path
      fetch(article.contentPath)
        .then(res => res.text())
        .then(markdown => {
          // Convert Markdown to HTML
          contentEl.innerHTML = marked.parse(markdown);


          // ✅ Trigger MathJax to typeset the LaTeX content
          if (window.MathJax) {
            MathJax.typesetPromise([contentEl]).catch((err) => {
              console.error("MathJax rendering failed:", err);
            });
          }
        })
        .catch(err => {
          console.error("Failed to load article content:", err);
          contentEl.innerHTML = "<p>Could not load article content.</p>";
        });
    })
    .catch(err => {
      console.error("Failed to load article metadata:", err);
      titleEl.textContent = "Error loading article.";
    });
});
