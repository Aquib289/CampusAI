import { useState } from 'react'
import campusHero from '../assets/campus-hero.png'

const features = [
  {
    title: 'Book Appointment',
    description: 'Select your department and service. Book in just a few clicks.',
    icon: 'calendar',
    tone: 'blue',
  },
  {
    title: 'Get Digital Token',
    description: 'Receive your unique digital token and join the queue from anywhere.',
    icon: 'ticket',
    tone: 'purple',
  },
  {
    title: 'Track in Real Time',
    description: 'Check your queue position live and get instant updates.',
    icon: 'chart',
    tone: 'green',
  },
  {
    title: 'AI Estimated Wait',
    description: 'Know your expected wait time and plan your day better.',
    icon: 'brain',
    tone: 'violet',
  },
]

function GraduationCap() {
  return (
    <svg viewBox="0 0 48 40" aria-hidden="true" className="brand-mark">
      <path d="M2.5 13.1 24 2l21.5 11.1L24 24.2 2.5 13.1Z" fill="currentColor" />
      <path d="M10 18v8.2c7.7 6.3 20.3 6.3 28 0V18L24 25.3 10 18Z" fill="currentColor" />
      <path d="M44 14v12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="44" cy="28.5" r="2" fill="currentColor" />
    </svg>
  )
}

function FeatureIcon({ name }) {
  const common = {
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'calendar') {
    return (
      <svg {...common}>
        <rect x="5" y="7" width="22" height="21" rx="3" />
        <path d="M10 4v6M22 4v6M5 13h22" />
        <path d="m12 21 3 3 6-6" />
      </svg>
    )
  }
  if (name === 'ticket') {
    return (
      <svg {...common}>
        <path d="M5 9a3 3 0 0 0 0 6v8h22v-8a3 3 0 0 1 0-6V6H5v3Z" />
        <path d="M16 9v2M16 15v2M16 21v.1" />
      </svg>
    )
  }
  if (name === 'chart') {
    return (
      <svg {...common}>
        <path d="M5 27V17h6v10M13 27V9h6v18M21 27V4h6v23" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M12 5a5 5 0 0 0-9 3 5 5 0 0 0 0 8 5 5 0 0 0 6 8 5 5 0 0 0 9 2V6a5 5 0 0 0-6-1Z" />
      <path d="M20 5a5 5 0 0 1 9 3 5 5 0 0 1 0 8 5 5 0 0 1-6 8 5 5 0 0 1-9 2V6a5 5 0 0 1 6-1Z" />
      <path d="M9 12h3M20 12h3M10 19h2M20 19h2M16 8v16" />
    </svg>
  )
}

function ArrowIcon({ direction = 'right' }) {
  return direction === 'right' ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="landing-page" id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="CampusQ AI home" onClick={closeMenu}>
          <GraduationCap />
          <span>CampusQ <strong>AI</strong></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a className="nav-link is-active" href="#home" aria-current="page" onClick={closeMenu}>Home</a>
          <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
          <a className="nav-link" href="#services" onClick={closeMenu}>Services</a>
        </nav>

        <div className="header-actions">
          <a className="button button-outline button-login" href="/login">Log In</a>
          <a className="button button-primary button-signup" href="/register">Sign Up</a>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true">
            <img src={campusHero} alt="" />
          </div>
          <div className="hero-copy" id="about">
            <div className="eyebrow">
              <GraduationCap />
              <span>Smart Queue. Smarter Campus.</span>
            </div>
            <h1 id="hero-title">Skip the <span>Queue,</span><br />Focus on Your Future</h1>
            <p className="hero-description">
              Book appointments for college services, get digital tokens,<br className="desktop-break" />
              track your queue in real time, and save your valuable time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href="#services">
                Get Started <ArrowIcon />
              </a>
              <a className="button button-outline button-large button-learn" href="#services">
                <span className="play-icon" aria-hidden="true">▶</span> Learn More
              </a>
            </div>
            <ul className="benefit-list" aria-label="CampusQ benefits">
              <li><span className="check-icon">✓</span> Easy Booking</li>
              <li><span className="check-icon">✓</span> Real-Time Updates</li>
              <li><span className="check-icon">✓</span> A More Organized Campus</li>
            </ul>
          </div>

          <div className="time-note" aria-hidden="true">
            <span>Your Time<br />Matters</span>
            <svg viewBox="0 0 110 78">
              <path d="M8 5c4 35 28 58 67 50" />
              <path d="m69 48 9 7-8 8" />
            </svg>
          </div>
        </section>

        <section className="feature-section" id="services" aria-label="Campus services">
          <div className="feature-grid">
            {features.map((feature) => (
              <article className={`feature-card tone-${feature.tone}`} key={feature.title}>
                <div className="feature-icon"><FeatureIcon name={feature.icon} /></div>
                <span className="feature-arrow" aria-hidden="true"><ArrowIcon direction="chevron" /></span>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}

export default LandingPage
