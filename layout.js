/**
 * gastrowerke – layout.js
 * Header + Footer HTML Injection (professional, no emojis)
 */

'use strict';

(function injectLayout() {
  const headerHTML = `
<div class="topbar">
  <div class="container">
    <div class="topbar-inner">
      <div class="topbar-left">
        <span>Telefon: +49 (0) 631 123 45 67</span>
        <span>Mo–Fr 8–17 Uhr</span>
      </div>
      <div class="topbar-right">
        <a href="preisliste.html">Preisliste</a>
        <a href="kontakt.html">Kontakt</a>
        <a href="login.html" class="hdr-login-link">Anmelden</a>
        <a href="konto.html" class="hdr-account-link" style="display:none">Konto</a>
      </div>
    </div>
  </div>
</div>
<header id="main-header">
  <div class="container">
    <div class="header-inner">
      <a href="index.html" class="logo">gastro<em>werke</em></a>
      <div class="search-wrap">
        <form class="search-form" id="searchForm" role="search">
          <input type="search" id="searchInput" placeholder="Produkt, Kategorie oder SKU suchen" autocomplete="off">
          <button type="submit" aria-label="Suchen">🔍</button>
        </form>
        <div class="search-dropdown" id="searchDropdown"></div>
      </div>
      <div class="header-actions">
        <button class="mobile-toggle" id="menuToggle" aria-label="Menü">☰</button>
        <a href="wishlist.html" class="hdr-btn" style="position:relative">
          <span class="hdr-label">Wunschliste</span>
          <span class="wish-badge" id="wishBadge" style="display:none">0</span>
        </a>
        <a href="login.html" class="hdr-btn hdr-login-link">
          <span class="hdr-label">Konto</span>
        </a>
        <a href="konto.html" class="hdr-btn hdr-account-link" style="display:none">
          <span class="hdr-label">Konto</span>
        </a>
        <button class="hdr-btn hdr-btn-cart" id="cartBtn">
          <span class="hdr-label">Warenkorb</span>
          <span class="cart-badge" id="cartBadge" style="display:none">0</span>
        </button>
      </div>
    </div>
  </div>
  <div class="mobile-search-bar" id="mobileSearchBar" style="display:none">
    <div class="container">
      <form class="search-form" id="mobileSearchForm">
        <input type="search" id="mobileSearchInput" placeholder="Produkt suchen" autocomplete="off">
        <button type="submit">🔍</button>
      </form>
      <div class="search-dropdown" id="mobileSearchDropdown"></div>
    </div>
  </div>
</header>
<nav class="main-nav" aria-label="Hauptnavigation">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-link">Start</a>
      <a href="kategorie.html?cat=Edelstahlm%C3%B6bel" class="nav-link">Edelstahlmöbel</a>
      <a href="kategorie.html?cat=Gastrotechnik" class="nav-link">Gastrotechnik</a>
      <a href="kategorie.html?cat=K%C3%BChlung+%26+Tiefk%C3%BChl" class="nav-link">Kühlung</a>
      <a href="kategorie.html?sale=true" class="nav-link">SALE <span class="nav-badge">Aktionen</span></a>
      <a href="kategorie.html?new=true" class="nav-link">Neuheiten</a>
      <a href="preisliste.html" class="nav-link">Preisliste</a>
      <a href="ueber-uns.html" class="nav-link">Über uns</a>
      <a href="kontakt.html" class="nav-link">Kontakt</a>
    </div>
  </div>
</nav>
<div class="nav-overlay" id="navOverlay" aria-hidden="true"></div>
<nav class="nav-drawer" id="navDrawer" aria-label="Mobile Navigation">
  <div class="drawer-header">
    <div class="drawer-logo">gastro<em>werke</em></div>
    <button class="drawer-close" id="drawerClose" aria-label="Schließen">✕</button>
  </div>
  <div class="drawer-links">
    <a href="index.html">Startseite</a>
    <div class="drawer-section-label">Kategorien</div>
    <a href="kategorie.html?cat=Edelstahlm%C3%B6bel">Edelstahlmöbel</a>
    <a href="kategorie.html?cat=Gastrotechnik">Gastrotechnik</a>
    <a href="kategorie.html?cat=K%C3%BChlung+%26+Tiefk%C3%BChl">Kühlung & Tiefkühl</a>
    <a href="kategorie.html?sale=true">SALE</a>
    <a href="kategorie.html?new=true">Neuheiten</a>
    <div class="drawer-section-label">Service</div>
    <a href="preisliste.html">Preisliste</a>
    <a href="ueber-uns.html">Über uns</a>
    <a href="kontakt.html">Kontakt</a>
    <a href="konditionen.html">Konditionen</a>
    <a href="wishlist.html">Wunschliste</a>
    <a href="cart.html">Warenkorb</a>
    <a href="login.html" class="hdr-login-link">Anmelden</a>
    <a href="konto.html" class="hdr-account-link" style="display:none">Mein Konto</a>
    <div class="drawer-section-label">Rechtliches</div>
    <a href="impressum.html">Impressum</a>
    <a href="datenschutz.html">Datenschutz</a>
    <a href="agb.html">AGB</a>
    <a href="widerrufsrecht.html">Widerrufsrecht</a>
  </div>
</nav>
<div class="cart-overlay" id="cartOverlay"></div>
<aside class="cart-sidebar" id="cartSidebar" aria-label="Warenkorb">
  <div class="cart-sidebar-header">
    <h3>Ihr Warenkorb</h3>
    <button class="cart-sidebar-close" id="closeSidebar" aria-label="Schließen">✕</button>
  </div>
  <div class="cart-sidebar-items"></div>
  <div class="cart-sidebar-footer">
    <div class="cart-sidebar-totals">
      <div class="cart-sidebar-totals-row"><span>Netto</span><span class="cart-sidebar-net-val">–</span></div>
      <div class="cart-sidebar-totals-row"><span>Versand</span><span class="cart-sidebar-shipping-val">–</span></div>
      <div class="cart-sidebar-totals-row total"><span>Gesamt</span><span class="cart-sidebar-total-val">–</span></div>
    </div>
    <a href="checkout.html" class="btn-go-checkout">Zur Kasse</a>
    <a href="cart.html" class="btn-go-cart">Warenkorb anzeigen</a>
  </div>
</aside>`;

  const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">gastro<em>werke</em></div>
        <p class="footer-desc">Ihr Profi-Partner für Gastrotechnik, Edelstahlmöbel und Großküchenbedarf. Über 3.000 Artikel für Restaurants, Hotels und Großküchen.</p>
        <div class="payment-icons" style="display:flex;gap:8px;margin-top:16px">
          <span style="background:rgba(255,255,255,0.1);padding:4px 10px;border-radius:20px;font-size:0.7rem">SSL</span>
          <span style="background:rgba(255,255,255,0.1);padding:4px 10px;border-radius:20px;font-size:0.7rem">PayPal</span>
          <span style="background:rgba(255,255,255,0.1);padding:4px 10px;border-radius:20px;font-size:0.7rem">DHL</span>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Shop</div>
        <ul class="footer-links">
          <li><a href="kategorie.html">Alle Produkte</a></li>
          <li><a href="kategorie.html?sale=true">Sale</a></li>
          <li><a href="kategorie.html?new=true">Neuheiten</a></li>
          <li><a href="preisliste.html">Preisliste</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Service</div>
        <ul class="footer-links">
          <li><a href="ueber-uns.html">Über uns</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
          <li><a href="konditionen.html">Konditionen</a></li>
          <li><a href="agb.html">AGB</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Kontakt</div>
        <ul class="footer-contact">
          <li><span>📍</span><span>Industriestraße 14, 67655 Kaiserslautern</span></li>
          <li><span>📞</span><span>+49 (0) 631 123 45 67</span></li>
          <li><span>✉</span><span>info@gastrowerke.de</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 gastrowerke GmbH. Alle Rechte vorbehalten.</span>
      <nav class="footer-legal">
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="agb.html">AGB</a>
        <a href="widerrufsrecht.html">Widerrufsrecht</a>
      </nav>
    </div>
  </div>
</footer>
<button class="back-to-top" id="backToTop" aria-label="Nach oben">↑</button>`;

  const headerRoot = document.getElementById('gw-header-root');
  const footerRoot = document.getElementById('gw-footer-root');
  if (headerRoot) headerRoot.outerHTML = headerHTML;
  if (footerRoot) footerRoot.outerHTML = footerHTML;

  // Aktiven Nav-Link markieren
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    try {
      const lp = new URL(link.href, location.href).pathname.split('/').pop();
      if (lp === path) link.classList.add('active');
    } catch(e) {}
  });
})();
