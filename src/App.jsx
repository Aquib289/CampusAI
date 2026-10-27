import './App.css'
import DashboardPage from './pages/DashboardPage.jsx'
import LandingPage from './pages/landingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '')

  if (currentPath === '/register') return <RegisterPage />
  if (currentPath === '/login') return <LoginPage />
  if (currentPath === '/dashboard') return <DashboardPage />
  return <LandingPage />
}

export default App
