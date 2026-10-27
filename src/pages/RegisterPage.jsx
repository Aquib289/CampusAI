import { useState } from 'react'
import './RegisterPage.css'

function CapMark() {
  return (
    <svg className="register-mark" viewBox="0 0 48 40" aria-hidden="true">
      <path d="M2.5 13.1 24 2l21.5 11.1L24 24.2 2.5 13.1Z" fill="currentColor" />
      <path d="M10 18v8.2c7.7 6.3 20.3 6.3 28 0V18L24 25.3 10 18Z" fill="currentColor" />
      <path d="M44 14v12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="44" cy="28.5" r="2" fill="currentColor" />
    </svg>
  )
}

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('Registration is not available yet. Please try again later.')
  }

  return (
    <main className="register-page">
      <a className="register-back-link" href="/">← Back to home</a>
      <section className="register-card" aria-labelledby="register-title">
        <a className="register-brand" href="/" aria-label="CampusQ AI home">
          <CapMark />
          <span>CampusQ <strong>AI</strong></span>
        </a>
        <h1 id="register-title">Create Student Account</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <label className="form-field" htmlFor="full-name">
            <span>Full Name</span>
            <input id="full-name" name="fullName" type="text" placeholder="Enter your full name" autoComplete="name" required />
          </label>

          <label className="form-field" htmlFor="email">
            <span>Email</span>
            <input id="email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
          </label>

          <label className="form-field" htmlFor="student-id">
            <span>Student ID</span>
            <input id="student-id" name="studentId" type="text" placeholder="e.g. CS2021001" autoComplete="off" required />
          </label>

          <div className="register-select-row">
            <label className="form-field" htmlFor="course">
              <span>Course</span>
              <select id="course" name="course" defaultValue="" required>
                <option value="" disabled>Select Course</option>
                <option value="computer-science">Computer Science</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business</option>
                <option value="arts">Arts &amp; Humanities</option>
                <option value="science">Science</option>
              </select>
            </label>

            <label className="form-field" htmlFor="year">
              <span>Year</span>
              <select id="year" name="year" defaultValue="" required>
                <option value="" disabled>Select Year</option>
                <option value="1">Year 1</option>
                <option value="2">Year 2</option>
                <option value="3">Year 3</option>
                <option value="4">Year 4</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
            </label>
          </div>

          <label className="form-field" htmlFor="password">
            <span>Password</span>
            <span className="password-control">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={8}
                required
              />
              <button
                className="password-toggle"
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

          <button className="register-submit" type="submit">Register</button>
          <p className="register-notice" role="status" aria-live="polite">{notice}</p>
        </form>

        <p className="register-login-prompt">
          Already have an account?{' '}
          <a href="/login">Login</a>
        </p>
      </section>
    </main>
  )
}

export default RegisterPage
