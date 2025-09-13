document.addEventListener("DOMContentLoaded", () => {

  // ====== MOBILE HAMBURGER MENU FUNCTIONALITY ======
  // Only runs when hamburger elements exist (mobile view)
  const hamburger = document.getElementById('hamburger-btn');
  const navMobile = document.getElementById('nav-mobile');
  const navOverlay = document.getElementById('nav-overlay');
  const navClose = document.getElementById('nav-close');

  // Only initialize hamburger menu if elements exist
  if (hamburger && navMobile && navOverlay && navClose) {
    
    // Function to open mobile menu
    function openMobileMenu() {
      hamburger.classList.add('active');
      navMobile.classList.add('active');
      navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close mobile menu
    function closeMobileMenu() {
      hamburger.classList.remove('active');
      navMobile.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }

    // Hamburger button click handler
    hamburger.addEventListener('click', function() {
      if (navMobile.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close when clicking overlay
    navOverlay.addEventListener('click', closeMobileMenu);

    // Close when clicking close button
    navClose.addEventListener('click', closeMobileMenu);

    // Close when clicking any mobile menu link
    const mobileLinks = document.querySelectorAll('.nav-mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when resizing from mobile to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMobile.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  // ====== YOUR EXISTING ARTICLES PAGE FUNCTIONALITY ======
  const articlesContainer = document.getElementById("articles-list");
  const searchTitle = document.getElementById("search-title");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sort-select");

  let allArticles = [];
  let currentSort = "newest";
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search")?.toLowerCase() || "";

  // Sort select change handler
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderArticles();
    });
  }

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

      card.innerHTML = `
        <div class="article-card-inner">
          <div class="article-card-content">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <div class="meta">
              <span class="date">${article.date}</span>
            </div>
            <a href="article.html?id=${article.id}" class="read-more">Read more</a>
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