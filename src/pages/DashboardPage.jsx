import { useMemo, useState } from 'react'
import './DashboardPage.css'

const sidebarItems = [
  { label: 'Dashboard', icon: 'dashboard', href: '/dashboard', active: true },
  { label: 'Book Appointment', icon: 'calendar', href: '#book-appointment' },
  { label: 'My Appointments', icon: 'appointments', href: '#appointments' },
  { label: 'Queue Status', icon: 'queue', href: '#queue-status' },
  { label: 'Notifications', icon: 'bell', href: '#notifications', badge: '3' },
  { label: 'Profile', icon: 'user', href: '#profile' },
]

function Icon({ name }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    dashboard: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.3" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.3" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.3" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.3" /></>,
    calendar: <><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></>,
    appointments: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5h6M8.5 10h7M8.5 14h7M8.5 18h4" /><path d="M9 2.8h6" /></>,
    queue: <><path d="M8 5h12M8 12h12M8 19h12" /><circle cx="4" cy="5" r=".8" fill="currentColor" /><circle cx="4" cy="12" r=".8" fill="currentColor" /><circle cx="4" cy="19" r=".8" fill="currentColor" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.7-3.4 3.2-5.2 7-5.2s6.3 1.8 7 5.2" /></>,
    logout: <><path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M14 8l4 4-4 4M8 12h10" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    token: <><path d="M4 8h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4V8Z" /><path d="M13 10v1M13 13v1M13 16v.1" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></>,
    alert: <><path d="M12 3 2.8 19h18.4L12 3Z" /><path d="M12 9v4M12 16.5v.1" /></>,
    history: <><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  }

  return <svg {...props}>{paths[name] ?? paths.dashboard}</svg>
}

function DashboardPage() {
  const [notice, setNotice] = useState('')
  const dateText = useMemo(() => new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(new Date()), [])

  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <a className="dashboard-brand" href="/dashboard">
          <svg className="dashboard-brand-cap" viewBox="0 0 48 40" aria-hidden="true">
            <path d="M2.5 13.1 24 2l21.5 11.1L24 24.2 2.5 13.1Z" fill="currentColor" />
            <path d="M10 18v8.2c7.7 6.3 20.3 6.3 28 0V18L24 25.3 10 18Z" fill="currentColor" />
          </svg>
          <span>CampusQ <strong>AI</strong></span>
        </a>

        <nav className="dashboard-nav" aria-label="Student dashboard">
          {sidebarItems.map((item) => (
            <a
              className={`dashboard-nav-link${item.active ? ' is-active' : ''}`}
              href={item.href}
              key={item.label}
              aria-current={item.active ? 'page' : undefined}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.badge && <span className="dashboard-nav-badge">{item.badge}</span>}
            </a>
          ))}
        </nav>

        <a className="dashboard-logout" href="/login"><Icon name="logout" /><span>Logout</span></a>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="dashboard-topbar-spacer" />
          <button className="dashboard-notification-button" type="button" aria-label="View notifications" onClick={() => document.getElementById('notifications')?.scrollIntoView({ behavior: 'smooth' })}>
            <Icon name="bell" />
            <span>3</span>
          </button>
          <div className="dashboard-user" id="profile">
            <div className="dashboard-avatar" aria-hidden="true">AA</div>
            <div>
              <strong>Aquib Ansari</strong>
              <span>B.Tech (CSE) · 2nd Year</span>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-welcome-row">
            <div>
              <p className="dashboard-kicker">STUDENT DASHBOARD</p>
              <h1>Welcome Back, Aquib!</h1>
              <p className="dashboard-subtitle">Here’s your current appointment status.</p>
            </div>
            <time className="dashboard-date">{dateText}</time>
          </div>

          <section className="dashboard-metrics" aria-label="Queue summary">
            <article className="metric-card metric-token">
              <span>My Token</span><strong>A024</strong><Icon name="token" />
            </article>
            <article className="metric-card metric-position">
              <span>Queue Position</span><strong>5</strong><Icon name="user" />
            </article>
            <article className="metric-card metric-wait">
              <span>Estimated Wait</span><strong>24 min</strong><Icon name="clock" />
            </article>
            <article className="metric-card metric-status">
              <span>Status</span><strong>Waiting</strong><Icon name="history" />
            </article>
          </section>

          <section className="dashboard-queue-row" id="queue-status" aria-label="Queue status update">
            <article className="serving-card">
              <span>Current Serving Token</span>
              <strong>A019</strong>
              <small>Accounts Department</small>
            </article>
            <article className="turn-alert" id="notifications">
              <span className="turn-alert-icon"><Icon name="bell" /></span>
              <div>
                <strong>Your turn is approaching!</strong>
                <p>Please be ready and proceed to the<br className="dashboard-desktop-break" /> Accounts Department.</p>
              </div>
            </article>
          </section>

          <section className="dashboard-lower-grid">
            <article className="dashboard-panel appointment-panel" id="appointments">
              <div className="panel-heading">
                <h2>Today’s Appointment</h2>
                <a href="#appointments">View Details</a>
              </div>
              <div className="appointment-row"><Icon name="user" /><span>Department</span><strong>Accounts</strong></div>
              <div className="appointment-row"><Icon name="appointments" /><span>Service</span><strong>Fee Payment</strong></div>
              <div className="appointment-row"><Icon name="calendar" /><span>Date</span><strong>{dateText}</strong></div>
              <div className="appointment-row"><Icon name="clock" /><span>Time</span><strong>10:30 AM – 12:30 PM</strong></div>
            </article>

            <article className="dashboard-panel quick-actions-panel">
              <div className="panel-heading"><h2>Quick Actions</h2></div>
              <div className="quick-action-list">
                <a className="quick-action" id="book-appointment" href="#book-appointment" onClick={(event) => { event.preventDefault(); setNotice('Appointment booking is not connected yet.') }}>
                  <span className="quick-action-icon quick-action-blue"><Icon name="calendar" /></span><span>Book New Appointment</span><Icon name="arrow" />
                </a>
                <a className="quick-action" href="#queue-status">
                  <span className="quick-action-icon quick-action-orange"><Icon name="clock" /></span><span>View Queue Status</span><Icon name="arrow" />
                </a>
                <a className="quick-action" href="#notifications" onClick={() => setNotice('You have 3 unread notifications.') }>
                  <span className="quick-action-icon quick-action-red"><Icon name="bell" /></span><span>Check Notifications</span><Icon name="arrow" />
                </a>
                <a className="quick-action" href="#appointments">
                  <span className="quick-action-icon quick-action-purple"><Icon name="history" /></span><span>View History</span><Icon name="arrow" />
                </a>
              </div>
              {notice && <p className="dashboard-notice" role="status">{notice}</p>}
            </article>
          </section>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
