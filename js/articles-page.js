document.addEventListener("DOMContentLoaded", () => {
  const articlesContainer = document.getElementById("articles-list");
  const searchTitle = document.getElementById("search-title");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sort-select");

  let allArticles = [];
  let currentSort = "newest";
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search")?.toLowerCase() || "";

  // Fetch and load articles
  fetch("data/articles.json")
    .then((res) => res.json())
    .then((data) => {
      allArticles = data;
      renderArticles();
    })
    .catch((err) => {
      articlesContainer.innerHTML = "<p>Error loading articles.</p>";
      console.error(err);
    });

  // Render articles based on search, filter, and sort
function renderArticles() {
  let filtered = allArticles;

  // Filter by search term
  if (searchQuery) {
    filtered = filtered.filter((article) =>
      article.title.toLowerCase().includes(searchQuery) ||
      article.summary.toLowerCase().includes(searchQuery)
    );
    searchTitle.textContent = `Results for "${searchQuery}"`;
  } else {
    searchTitle.textContent = "All Articles";
  }

  // Sort by date
  filtered.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return currentSort === "newest" ? dateB - dateA : dateA - dateB;
  });

  // Render
  articlesContainer.innerHTML = "";
  if (filtered.length === 0) {
    articlesContainer.innerHTML = "<p>No articles found.</p>";
    return;
  }

  filtered.forEach((article) => {
    const card = document.createElement("article");
    card.className = "article-card";

    card.className = "article-card";
    card.innerHTML = `
      <div class="article-card-inner">
        <div class="article-card-content">
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <div class="meta">
            <span class="date">${article.date}</span>
          </div>
          <a href="article.html?id=${article.id}">Read more</a>
        </div>
        <div class="article-card-image-wrapper">
          <img src="${article.image}" class="article-card-image" alt="${article.title}">
        </div>
      </div>
    `;


    articlesContainer.appendChild(card);
  });
}

});
