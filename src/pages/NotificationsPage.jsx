import { useMemo, useState } from 'react'
import './NotificationsPage.css'

const notifications = [
  { id: 1, type: 'appointment', title: 'Appointment Booked', message: 'Your appointment for Fee Payment has been confirmed.', time: '10:15 AM', icon: '✓', tone: 'green', unread: true },
  { id: 2, type: 'system', title: 'Token Generated', message: 'Your token number is A024.', time: '10:15 AM', icon: '♙', tone: 'blue', unread: true },
  { id: 3, type: 'appointment', title: 'Queue Update', message: 'Your estimated waiting time is 24 minutes.', time: '10:20 AM', icon: '◉', tone: 'purple', unread: true },
  { id: 4, type: 'appointment', title: 'Turn Approaching', message: 'Your turn is approaching. Please proceed to the Accounts Department.', time: '10:45 AM', icon: '♟', tone: 'orange', unread: false },
  { id: 5, type: 'system', title: 'Service Completed', message: 'Your service has been completed. Thank you!', time: '11:15 AM', icon: '✓', tone: 'green', unread: false },
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'unread', label: 'Unread' },
  { id: 'appointment', label: 'Appointments' },
  { id: 'system', label: 'System' },
]

function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [items, setItems] = useState(notifications)
  const visibleItems = useMemo(() => items.filter((item) => {
    if (activeFilter === 'unread') return item.unread
    if (activeFilter === 'all') return true
    return item.type === activeFilter
  }), [activeFilter, items])
  const unreadCount = items.filter((item) => item.unread).length

  function markAllRead() {
    setItems((current) => current.map((item) => ({ ...item, unread: false })))
  }

  function markRead(id) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, unread: false } : item))
  }

  return (
    <main className="notifications-page">
      <header className="notifications-topbar">
        <a className="notifications-brand" href="/dashboard" aria-label="CampusQ AI dashboard">
          <svg viewBox="0 0 48 40" aria-hidden="true"><path d="M2.5 13.1 24 2l21.5 11.1L24 24.2 2.5 13.1Z" fill="currentColor"/><path d="M10 18v8.2c7.7 6.3 20.3 6.3 28 0V18L24 25.3 10 18Z" fill="currentColor"/></svg>
          <span>CampusQ <strong>AI</strong></span>
        </a>
        <a className="notifications-back" href="/dashboard">← Dashboard</a>
        <button className="notifications-bell" type="button" aria-label={`${unreadCount} unread notifications`}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></svg>{unreadCount > 0 && <span>{unreadCount}</span>}</button>
        <div className="notifications-user"><span className="notifications-avatar">AA</span><span><strong>Aquib Ansari</strong><small>B.Tech (CSE) · 2nd Year</small></span></div>
      </header>

      <section className="notifications-content">
        <div className="notifications-heading-row">
          <div><p className="notifications-eyebrow">YOUR CAMPUS UPDATES</p><h1>Notifications</h1><p className="notifications-subtitle">Stay updated with your appointment status</p></div>
          {unreadCount > 0 && <button className="mark-all-read" type="button" onClick={markAllRead}>Mark all as read</button>}
        </div>

        <div className="notification-filters" role="tablist" aria-label="Filter notifications">
          {filters.map((filter) => <button key={filter.id} type="button" role="tab" aria-selected={activeFilter === filter.id} className={activeFilter === filter.id ? 'selected' : ''} onClick={() => setActiveFilter(filter.id)}>
            {filter.label}{filter.id === 'unread' && unreadCount > 0 && <span>{unreadCount}</span>}
          </button>)}
        </div>

        <section className="notification-list" aria-label={`${activeFilter} notifications`}>
          {visibleItems.length ? visibleItems.map((item) => <article className={`notification-item${item.unread ? ' unread' : ''}`} key={item.id} onClick={() => markRead(item.id)}>
            <span className={`notification-icon ${item.tone}`}>{item.icon}</span>
            <div className="notification-copy"><div className="notification-title-row"><h2>{item.title}</h2>{item.unread && <span className="unread-indicator" aria-label="Unread"/>}</div><p>{item.message}</p></div>
            <time>{item.time}</time>
          </article>) : <div className="notifications-empty"><span>✓</span><strong>You’re all caught up</strong><p>No notifications in this filter.</p></div>}
        </section>
        <p className="notifications-footer">You’re viewing your latest campus updates.</p>
      </section>
    </main>
  )
}

export default NotificationsPage
