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

  // ====== YOUR EXISTING FUNCTIONALITY ======
  // Search form redirect functionality
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

  // Load latest articles functionality
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