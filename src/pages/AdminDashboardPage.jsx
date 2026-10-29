import './AdminDashboardPage.css'
import PageHeader from '../components/PageHeader.jsx'

const stats = [
  { label: 'Total Students', value: '1,234', icon: '♙', tone: 'blue', note: '+8.2% this month' },
  { label: 'Departments', value: '6', icon: '▦', tone: 'purple', note: 'Across campus' },
  { label: 'Active Services', value: '18', icon: '◉', tone: 'green', note: 'All systems available' },
  { label: "Today's Appointments", value: '152', icon: '▣', tone: 'orange', note: '24 pending review' },
]

const days = [
  ['8 AM', 34, 19, 8], ['9 AM', 55, 35, 14], ['10 AM', 76, 46, 19], ['11 AM', 60, 38, 13],
  ['12 PM', 42, 28, 9], ['1 PM', 57, 34, 15], ['2 PM', 80, 49, 20], ['3 PM', 63, 39, 12],
]

const departments = [
  ['Accounts', '35%', 'dept-blue'], ['Admission', '20%', 'dept-orange'], ['Examination', '15%', 'dept-green'],
  ['Library', '10%', 'dept-purple'], ['Scholarship', '10%', 'dept-pink'], ['Student Section', '10%', 'dept-cyan'],
]

function AdminDashboardPage() {
  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/admin" aria-label="CampusQ AI admin dashboard">
          <svg className="admin-brand-mark" viewBox="0 0 48 40" aria-hidden="true">
            <path d="M2.5 13.1 24 2l21.5 11.1L24 24.2 2.5 13.1Z" fill="currentColor" />
            <path d="M10 18v8.2c7.7 6.3 20.3 6.3 28 0V18L24 25.3 10 18Z" fill="currentColor" />
            <path d="M44 14v12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="44" cy="28.5" r="2" fill="currentColor" />
          </svg>
          <span>CampusQ <b>AI</b></span>
        </a>
        <nav className="admin-nav" aria-label="Admin dashboard">
          {['Dashboard', 'Manage Students', 'Manage Departments', 'Manage Services', 'Manage Appointments', 'Manage Counters', 'Reports & Analytics', 'Notifications', 'Settings'].map((item, index) => (
            <a href={index === 0 ? '/admin' : `#${item.toLowerCase().replaceAll(' ', '-')}`} className={`admin-nav-item${index === 0 ? ' active' : ''}`} key={item}>
              <span className="admin-nav-icon">{['▦', '♙', '▧', '◇', '▣', '⊞', '▥', '♧', '⚙'][index]}</span>{item}
              {item === 'Notifications' && <span className="admin-nav-badge">3</span>}
            </a>
          ))}
        </nav>
        <a className="admin-logout" href="/login"><span>↪</span>Logout</a>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <a className="admin-mobile-brand" href="/admin" aria-label="CampusQ AI admin dashboard">
            <svg className="admin-brand-mark" viewBox="0 0 48 40" aria-hidden="true">
              <path d="M2.5 13.1 24 2l21.5 11.1L24 24.2 2.5 13.1Z" fill="currentColor" />
              <path d="M10 18v8.2c7.7 6.3 20.3 6.3 28 0V18L24 25.3 10 18Z" fill="currentColor" />
              <path d="M44 14v12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="44" cy="28.5" r="2" fill="currentColor" />
            </svg>
            <span>CampusQ <b>AI</b></span>
          </a>
          <button className="admin-bell" aria-label="Notifications">♧<i>3</i></button>
          <div className="admin-profile"><span className="admin-avatar">AD</span><span><strong>Dr. Faisal Ahmed</strong><small>Administrator</small></span></div>
        </header>

        <div className="admin-content">
          <div className="admin-heading-row">
            <PageHeader title="Welcome, Admin!" subtitle="Monitor and manage all college services, appointments and system activity." />
            <time className="admin-date">Tuesday, 29 October 2026 <span>10:25 AM</span></time>
          </div>

          <section className="admin-stat-grid" aria-label="Campus summary">
            {stats.map((stat) => <article className={`admin-stat-card ${stat.tone}`} key={stat.label}>
              <span className="admin-stat-icon">{stat.icon}</span><div className="admin-stat-copy"><span>{stat.label}</span><strong>{stat.value}</strong><small>{stat.note}</small></div>
              <span className="admin-stat-arrow">↗</span>
            </article>)}
          </section>

          <section className="admin-secondary-stats" aria-label="Appointment status">
            <article className="status-card waiting"><span className="status-dot"/><div><strong>97</strong><span>Waiting</span></div><small>In queues now</small></article>
            <article className="status-card completed"><span className="status-dot"/><div><strong>40</strong><span>Completed</span></div><small>Today so far</small></article>
            <article className="status-card cancelled"><span className="status-dot"/><div><strong>7</strong><span>Cancelled</span></div><small>Today so far</small></article>
            <article className="status-card wait-time"><span className="status-dot"/><div><strong>24 min</strong><span>Avg. Wait Time</span></div><small>Across departments</small></article>
          </section>

          <section className="admin-chart-grid" aria-label="Appointment analytics">
            <article className="admin-chart-card appointments-chart">
              <header className="admin-chart-heading"><div><h2>Today's Appointments</h2><p>Appointment activity by hour</p></div><button type="button" className="chart-period">Today⌄</button></header>
              <div className="chart-legend"><span><i className="legend-total"/>Total</span><span><i className="legend-completed"/>Completed</span><span><i className="legend-cancelled"/>Cancelled</span></div>
              <div className="bar-chart" role="img" aria-label="Bar chart comparing total, completed, and cancelled appointments by hour">
                <div className="chart-y-labels"><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span></div>
                <div className="bar-chart-plot"><div className="chart-grid-lines"><i/><i/><i/><i/><i/></div>{days.map(([label, total, complete, cancelled]) => <div className="bar-group" key={label}>
                  <div className="bar-stack"><i className="bar-total" style={{ height: `${total}%` }}/><i className="bar-completed" style={{ height: `${complete}%` }}/><i className="bar-cancelled" style={{ height: `${cancelled}%` }}/></div><span>{label}</span>
                </div>)}</div>
              </div>
            </article>

            <article className="admin-chart-card department-chart">
              <header className="admin-chart-heading"><div><h2>Department-wise Queue</h2><p>Current student distribution</p></div><button type="button" className="chart-more" aria-label="More options">•••</button></header>
              <div className="department-chart-body"><div className="donut-chart" role="img" aria-label="Donut chart showing queue distribution across six departments"><div className="donut-hole"><strong>97</strong><span>in queue</span></div></div>
                <div className="department-legend">{departments.map(([name, percent, tone]) => <div className="department-legend-row" key={name}><i className={tone}/><span>{name}</span><strong>{percent}</strong></div>)}</div>
              </div>
              <footer className="department-chart-footer"><span className="live-indicator"/>Live queue data <span>Updated just now</span></footer>
            </article>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboardPage
