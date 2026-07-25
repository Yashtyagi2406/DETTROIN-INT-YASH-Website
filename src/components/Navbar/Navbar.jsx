import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaGraduationCap, FaPhoneAlt } from 'react-icons/fa'
import styles from './Navbar.module.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reset progress on route change
  useEffect(() => {
    setProgress(0)
    setMenuOpen(false)
  }, [location])

  // Close menu on route change or outside click
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Top announcement bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <span><FaPhoneAlt /> +91-571-123-4567</span>
            <span>📍 Civil Lines, Aligarh, Uttar Pradesh</span>
            <span>🕒 Mon–Sat: 8:00 AM – 4:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {/* Scroll Progress Bar */}
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        <div className="container">
          <div className={styles.navInner}>
            {/* Logo */}
            <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
              <div className={styles.logoIcon}>
                <FaGraduationCap />
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>Excellence</span>
                <span className={styles.logoSub}>International School</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className={styles.navLinks}>
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className={`btn btn-primary ${styles.ctaBtn}`}
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </Link>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenu}>
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.activeMobile : ''}`
              }
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  )
}
