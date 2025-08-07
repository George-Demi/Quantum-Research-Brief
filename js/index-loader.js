document.addEventListener("DOMContentLoaded", () => {
  //  Search form redirect
  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = document.getElementById("search-input").value.trim();
      if (query) {
        window.location.href = `articles.html?search=${encodeURIComponent(query)}`;
      }
    });
  }

  //  Load latest articles
  const container = document.getElementById("latest-articles");
  if (!container) return;

  fetch("data/articles.json")
    .then(res => res.json())
    .then(articles => {
      container.innerHTML = ""; // Clear loading text

      const sorted = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = sorted.slice(0, 6); // Show latest 6

      latest.forEach(article => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
          <img src="${article.image}" alt="${article.title}" class="card-image" />
          <div class="card-content">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="article.html?id=${article.id}">Read more</a>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Failed to load latest articles:", err);
      container.innerHTML = "<p>Error loading articles.</p>";
    });
});
