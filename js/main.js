/**
 * Main application logic — rendering, search, filtering, event delegation
 */
import { products, categories } from "./database.js";

/* ── DOM references ─────────────────────────────────────────────── */
const productGrid     = document.getElementById("product-grid");
const filterContainer = document.getElementById("filter-buttons");
const searchInput     = document.getElementById("search-input");
const heroBtn         = document.getElementById("hero-cta");
const navToggle       = document.getElementById("nav-toggle");
const navMenu         = document.getElementById("nav-menu");
const yearEl          = document.getElementById("current-year");

/* ── State ──────────────────────────────────────────────────────── */
let activeCategory = "todos";
let searchQuery    = "";

/* ── Helpers ────────────────────────────────────────────────────── */
const normalise = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function filteredProducts() {
  return products.filter((p) => {
    const matchCategory = activeCategory === "todos" || p.category === activeCategory;
    const q = normalise(searchQuery);
    const matchSearch = !q
      || normalise(p.name).includes(q)
      || normalise(p.description).includes(q)
      || normalise(p.category).includes(q);
    return matchCategory && matchSearch;
  });
}

/* ── Render functions ───────────────────────────────────────────── */
function renderFilters() {
  filterContainer.innerHTML = categories
    .map(
      (c) =>
        `<button class="filter-btn${c.id === activeCategory ? " active" : ""}" data-category="${c.id}">${c.label}</button>`
    )
    .join("");
}

function renderProducts() {
  const list = filteredProducts();
  if (list.length === 0) {
    productGrid.innerHTML = `<p class="no-results">No se encontraron productos.</p>`;
    return;
  }
  productGrid.innerHTML = list
    .map(
      (p) => `
      <article class="product-card" data-id="${p.id}">
        <div class="product-img-wrapper">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect width=%22400%22 height=%22300%22 fill=%22%23f0f0f0%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2218%22>${encodeURIComponent(p.name)}</text></svg>';">
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-price">$${p.price.toFixed(2)}</p>
          <p class="product-desc">${p.description}</p>
          <a href="https://wa.me/?text=${encodeURIComponent("Hola, me interesa: " + p.name + " ($" + p.price.toFixed(2) + ")")}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Consultar disponibilidad</a>
        </div>
      </article>`
    )
    .join("");
}

/* ── Event delegation ───────────────────────────────────────────── */
// Category filter clicks (delegated)
filterContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  activeCategory = btn.dataset.category;
  renderFilters();
  renderProducts();
});

// Search input
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

// Hero CTA — smooth scroll
heroBtn.addEventListener("click", () => {
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
});

// Mobile nav toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", navMenu.classList.contains("open"));
});

// Close mobile menu on link click (delegated)
navMenu.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Smooth scroll for anchor links (delegated on document)
document.addEventListener("click", (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const target = document.querySelector(anchor.getAttribute("href"));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  }
});

// Navbar glassmorphism intensity on scroll
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

/* ── Init ───────────────────────────────────────────────────────── */
if (yearEl) yearEl.textContent = new Date().getFullYear();
renderFilters();
renderProducts();
