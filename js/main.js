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
const productModal    = document.getElementById("product-modal");
const modalClose      = productModal.querySelector(".product-modal-close");
const modalOverlay    = productModal.querySelector(".product-modal-overlay");
const modalImg        = document.getElementById("modal-img");
const modalName       = document.getElementById("modal-name");
const modalPrice      = document.getElementById("modal-price");
const modalDesc       = document.getElementById("modal-desc");
const modalWhatsapp   = document.getElementById("modal-whatsapp");
const modalEmail      = document.getElementById("modal-email");

/* ── State ──────────────────────────────────────────────────────── */
let activeCategory = "todos";
let searchQuery    = "";

/* ── Helpers ────────────────────────────────────────────────────── */
const normalise = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function fallbackSrc(name) {
  return "data:image/svg+xml," +
    "<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22>" +
    "<rect width=%22400%22 height=%22300%22 fill=%22%23f0f0f0%22/>" +
    "<text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 " +
    "fill=%22%23999%22 font-size=%2218%22>" + encodeURIComponent(name) + "</text></svg>";
}

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
      <article class="product-card" data-id="${p.id}" role="button" tabindex="0" style="cursor:pointer">
        <div class="product-img-wrapper">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-price">$${p.price.toFixed(2)}</p>
          <p class="product-desc">${p.description}</p>
          <button class="btn btn-outline btn-view-detail" data-id="${p.id}">Ver detalles</button>
        </div>
      </article>`
    )
    .join("");
}

/* ── Product detail descriptions ─────────────────────────────────── */
const productDetails = {
  1: `🔥 <strong>Mielitas VIP – Potencia Extrema y Placer Duradero</strong> 💎<br><br>
Las Mielitas VIP están diseñadas para quienes buscan un efecto mucho más fuerte e intenso que la miel tradicional. Gracias a su fórmula exclusiva con ingredientes naturales de alta potencia, elevan el deseo, la energía y la resistencia al máximo nivel.<br><br>
🔥 <strong>Beneficios principales:</strong><br>
• Efecto más fuerte, intenso y prolongado.<br>
• Aumenta la energía y el rendimiento.<br>
• Estimula el deseo de manera inmediata.<br>
• Potencia la experiencia íntima para disfrutar sin límites.<br><br>
🍯 Presentación práctica y discreta de 20 gramos cada sobre.<br>
Con Mielitas VIP vivirás momentos de placer inolvidables con una potencia superior y un efecto que dura más tiempo.`,
  2: `✨ <strong>Pink Pussy Cat – Miel Afrodisíaca Femenina</strong> 💗✨<br><br>
Descubre el secreto natural para despertar tu lado más atrevido y sensual. Pink Pussy Cat es una miel afrodisíaca especialmente formulada para mujeres, elaborada con ingredientes naturales que estimulan el deseo, aumentan la energía y mejoran la sensibilidad en cada momento íntimo.<br><br>
🌸 <strong>Beneficios principales:</strong><br>
• Estimula el deseo y la pasión femenina.<br>
• Aumenta la energía y vitalidad.<br>
• Intensifica la sensibilidad y el placer.<br>
• Elaborada con ingredientes naturales y de acción rápida.<br><br>
Ideal para mujeres que desean vivir experiencias más intensas y conectar con su sensualidad de manera natural y deliciosa.<br><br>
🍯 Presentación práctica y lista para disfrutar.<br>
¡Atrévete a probarla y despierta la diosa que llevas dentro!`
};

/* ── Modal functions ────────────────────────────────────────────── */
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  modalImg.src = product.image;
  modalImg.alt = product.name;
  modalName.textContent = product.name;
  modalPrice.textContent = "$" + product.price.toFixed(2);
  modalDesc.innerHTML = productDetails[productId] || product.description;

  const whatsappMsg = encodeURIComponent("Hola, me interesa: " + product.name + " ($" + product.price.toFixed(2) + ")");
  modalWhatsapp.href = "https://wa.me/50247126194?text=" + whatsappMsg;

  const emailSubject = encodeURIComponent("Consulta sobre: " + product.name);
  const emailBody = encodeURIComponent("Hola, me interesa el producto: " + product.name + " ($" + product.price.toFixed(2) + "). ¿Podrían darme más información?");
  modalEmail.href = "mailto:jaretgarcia@gmail.com?subject=" + emailSubject + "&body=" + emailBody;

  productModal.classList.add("active");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  productModal.classList.remove("active");
  productModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ── Event delegation ───────────────────────────────────────────── */
// Image error fallback (delegated)
productGrid.addEventListener("error", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.src = fallbackSrc(e.target.alt);
  }
}, true);

// Product card click — open modal (delegated)
productGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (!card) return;
  const id = parseInt(card.dataset.id, 10);
  openProductModal(id);
});

// Modal close handlers
modalClose.addEventListener("click", closeProductModal);
modalOverlay.addEventListener("click", closeProductModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProductModal();
});

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
