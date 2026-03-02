export default function MobileCompanyCard() {
  return (
    <main className="page-shell">
      <section className="mobile-shell">
        <header className="mobile-shell__header">
          <div className="mobile-shell__logo">
            <span className="mobile-shell__logo-main">HBC</span>
            <span className="mobile-shell__logo-sub">High Beam Contracting</span>
            <span className="mobile-shell__logo-tagline">
              YOU DREAM <span>We Build</span>
            </span>
          </div>

          <div className="mobile-shell__actions">
            <button className="mobile-shell__action" aria-label="Email">
              ✉️
            </button>
            <button className="mobile-shell__action" aria-label="Phone">
              📱
            </button>
            <button className="mobile-shell__action" aria-label="WhatsApp">
              💬
            </button>
          </div>
        </header>

        <div className="mobile-links-card">
          <div className="mobile-links-card__header">
            <h2>Company Links</h2>
          </div>

          <nav className="mobile-links-list" aria-label="Company links">
            <a href="#" className="mobile-links-list__item">
              <span className="mobile-links-list__icon mobile-links-list__icon--blue">🌐</span>
              <span className="mobile-links-list__label">Website</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
            <a href="#" className="mobile-links-list__item">
              <span className="mobile-links-list__icon mobile-links-list__icon--red">🏢</span>
              <span className="mobile-links-list__label">Profile</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
            <a href="#" className="mobile-links-list__item">
              <span className="mobile-links-list__icon mobile-links-list__icon--instagram">📸</span>
              <span className="mobile-links-list__label">Instagram</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
            <a href="#" className="mobile-links-list__item">
              <span className="mobile-links-list__icon mobile-links-list__icon--whatsapp">💬</span>
              <span className="mobile-links-list__label">Whatsapp</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
            <a href="#" className="mobile-links-list__item">
              <span className="mobile-links-list__icon mobile-links-list__icon--location">📍</span>
              <span className="mobile-links-list__label">Location</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
          </nav>
        </div>
      </section>
    </main>
  )
}
