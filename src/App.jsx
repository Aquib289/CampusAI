import './App.css'
import DashboardPage from './pages/DashboardPage.jsx'
import LandingPage from './pages/landingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import AdminDashboardPage from './pages/AdminDashboardPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '')

  if (currentPath === '/register') return <RegisterPage />
  if (currentPath === '/login') return <LoginPage />
  if (currentPath === '/dashboard') return <DashboardPage />
  if (currentPath === '/admin') return <AdminDashboardPage />
  if (currentPath === '/notifications') return <NotificationsPage />
  return <LandingPage />
}


export default App;