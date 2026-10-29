import { useState } from 'react'
import './LoginPage.css'

function CapMark() {
  return (
    <svg className="login-mark" viewBox="0 0 48 40" aria-hidden="true">
      <path d="M2.5 13.1 24 2l21.5 11.1L24 24.2 2.5 13.1Z" fill="currentColor" />
      <path d="M10 18v8.2c7.7 6.3 20.3 6.3 28 0V18L24 25.3 10 18Z" fill="currentColor" />
      <path d="M44 14v12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="44" cy="28.5" r="2" fill="currentColor" />
    </svg>
  )
}

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('Login is not connected yet. Please try again later.')
  }

  return (
    <main className="login-page">
      <a className="login-back-link" href="/">← Back to home</a>
      <section className="login-card" aria-labelledby="login-title">
        <a className="login-brand" href="/" aria-label="CampusQ AI home">
          <CapMark />
          <span>CampusQ <strong>AI</strong></span>
        </a>
        <h1 id="login-title">Login</h1>
        <p className="login-subtitle">Sign in to continue</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-field" htmlFor="login-email">
            <span>Email</span>
            <input id="login-email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
          </label>

          <label className="login-field" htmlFor="login-password">
            <span>Password</span>
            <span className="login-password-control">
              <input
                id="login-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <button
                className="login-password-toggle"
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" />
                  <circle cx="12" cy="12" r="2.5" />
                  {showPassword && <path d="m4 4 16 16" />}
                </svg>
              </button>
            </span>
          </label>

          <button className="forgot-password" type="button" onClick={() => setNotice('Password recovery is not available yet.')}>
            Forgot Password?
          </button>

          <button className="login-submit" type="submit">Login</button>
          <p className="login-notice" role="status" aria-live="polite">{notice}</p>
        </form>

        <p className="login-register-prompt">
          Don’t have an account? <a href="/register">Sign Up</a>
        </p>

        <div className="role-divider"><span>Login as</span></div>
        <div className="role-options" aria-label="Choose account type">
          <a className="role-option role-student is-selected" href="/dashboard">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 20v-1.5A4.5 4.5 0 0 1 8.5 14h7a4.5 4.5 0 0 1 4.5 4.5V20M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            </svg>
            Student
          </a>
          <a
            className="role-option role-admin"
            href="/admin"
            aria-label="Open admin dashboard"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Admin
          </a>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
