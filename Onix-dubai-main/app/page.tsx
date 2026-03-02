import Image from 'next/image'

export default function Home() {
  return (
    <div className="page-shell page-shell--centered">
      <main className="mobile-shell">
        <header className="mobile-shell__header">
          <Image
            src="/assets/ONIX_GROUP_0002.png"
            alt="ONIX GROUP"
            width={220}
            height={130}
            priority
          />
          <div className="mobile-brand-grid">
            <div className="mobile-brand-card">
              <Image
                src="/assets/ONIX Engineering Consultancy White.webp"
                alt="ONIX Engineering Consultancy"
                width={140}
                height={60}
                className="mobile-brand-card__logo"
              />
            </div>
            <div className="mobile-brand-card">
              <Image
                src="/assets/onix-plus-logo.png"
                alt="ONIX PLUS"
                width={140}
                height={60}
                className="mobile-brand-card__logo"
              />
            </div>
            <div className="mobile-brand-card">
              <Image
                src="/assets/Onix Prime Logo White[1].webp"
                alt="ONIX PRIME"
                width={140}
                height={60}
                className="mobile-brand-card__logo"
              />
            </div>
            <div className="mobile-brand-card">
              <Image
                src="/assets/onix-design-studio-logo.png"
                alt="ONIX Design Studio"
                width={140}
                height={60}
                className="mobile-brand-card__logo"
              />
            </div>
            <div className="mobile-brand-card">
              <Image
                src="/assets/CRIMSON 001[1].webp"
                alt="CRIMSON Steel Contracting"
                width={140}
                height={60}
                className="mobile-brand-card__logo"
              />
            </div>
          </div>

          <div className="mobile-shell__actions">
            <a
              className="mobile-shell__action"
              href="mailto:info@onixgroup.ae"
              aria-label="Email Onix Group"
            >
              <svg className="mobile-shell__action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </a>
            <a
              className="mobile-shell__action"
              href="tel:+97142838880"
              aria-label="Call Onix Group"
            >
              <svg className="mobile-shell__action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              className="mobile-shell__action"
              href="https://wa.me/97142838880"
              aria-label="WhatsApp Onix Group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="mobile-shell__action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </header>

        <section className="mobile-links-card">
          <div className="mobile-links-card__header">
            <h2>Company Links</h2>
          </div>

          <nav className="mobile-links-list" aria-label="Onix Group links">
            <a
              href="https://www.onixgroup.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-links-list__item"
            >
              <span className="mobile-links-list__icon mobile-links-list__icon--blue">🌐</span>
              <span className="mobile-links-list__label">Website</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
            <a
              href="/assets/company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-links-list__item"
            >
              <span className="mobile-links-list__icon mobile-links-list__icon--red">🏢</span>
              <span className="mobile-links-list__label">Company Profile</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
            <a
              href="https://www.instagram.com/onixgroup.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-links-list__item"
            >
              <span className="mobile-links-list__icon mobile-links-list__icon--instagram">📸</span>
              <span className="mobile-links-list__label">Instagram</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
            <a
              href="https://wa.me/97142838880"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-links-list__item"
            >
              <span className="mobile-links-list__icon mobile-links-list__icon--whatsapp">💬</span>
              <span className="mobile-links-list__label">WhatsApp</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
            <a
              href="https://www.google.com/maps/place/Onix+engineering+consultancy/@25.1763494,55.2421577,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f6950cab81057:0x64e84a568d8bd8e1!8m2!3d25.1763446!4d55.2447326!16s%2Fg%2F11vytgw0z5?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-links-list__item"
            >
              <span className="mobile-links-list__icon mobile-links-list__icon--location">📍</span>
              <span className="mobile-links-list__label">Location</span>
              <span className="mobile-links-list__chevron">›</span>
            </a>
          </nav>
        </section>
      </main>
    </div>
  )
}
