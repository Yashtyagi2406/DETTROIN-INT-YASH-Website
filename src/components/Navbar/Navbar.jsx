import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from 'react-icons/fa'
import styles from './Navbar.module.css'

const BASE = 'https://excellenceinternationalschool.com'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Academics',
    dropdown: [
      { label: 'Pre Primary School', href: `${BASE}/best-pre-primary-school-in-aligarh/` },
      { label: 'Primary School',     href: `${BASE}/best-primary-school-in-aligarh/` },
      { label: 'Middle School',      href: `${BASE}/best-middle-school-in-aligarh/` },
      { label: 'Daycare',            href: `${BASE}/best-daycare-school-in-aligarh/` },
    ],
  },
  {
    label: 'Admissions',
    dropdown: [
      { label: 'Admission Enquiry Form', href: `${BASE}/admission-enquiry-form/` },
      { label: 'Admission Procedure',    href: `${BASE}/admission-procedure/` },
    ],
  },
  { label: 'School Facilities', href: `${BASE}/school-facilities/` },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', href: `${BASE}/blog/` },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [openDropdown, setOpenDropdown] = useState(null)
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

  useEffect(() => {
    setProgress(0)
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [location])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (!e.target.closest('#mobile-overlay') && !e.target.closest('#hamburger-btn')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <span><FaPhoneAlt /> +91 7055582117</span>
            <span>📍 Ramghat Road, Aligarh, Uttar Pradesh</span>
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
            <Link to="/" className={styles.logo} id="navbar-logo">
              <img
                src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Excellence-Logo.png"
                alt="Excellence International School Logo"
                className={styles.logoImg}
              />
              <div className={styles.logoText}>
                <span className={styles.logoMain}>Excellence</span>
                <span className={styles.logoSub}>International School</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className={styles.navList}>
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className={`${styles.navItem} ${item.dropdown ? styles.hasDropdown : ''}`}
                  onMouseEnter={() => item.dropdown && setOpenDropdown(i)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  {item.to ? (
                    <NavLink
                      to={item.to}
                      id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                      }
                      end={item.to === '/'}
                    >
                      {item.label}
                      {item.dropdown && <FaChevronDown className={styles.chevron} />}
                    </NavLink>
                  ) : (
                    <a
                      href={item.href || '#'}
                      id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className={styles.navLink}
                      target={item.href ? '_blank' : undefined}
                      rel={item.href ? 'noopener noreferrer' : undefined}
                    >
                      {item.label}
                      {item.dropdown && <FaChevronDown className={styles.chevron} />}
                    </a>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && (
                    <ul className={`${styles.dropdown} ${openDropdown === i ? styles.dropdownOpen : ''}`}>
                      {item.dropdown.map((sub, j) => (
                        <li key={j}>
                          <a
                            href={sub.href}
                            id={`nav-sub-${sub.label.toLowerCase().replace(/\s+/g, '-')}`}
                            className={styles.dropdownLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div id="mobile-overlay" className={styles.mobileOverlay}>
          <ul className={styles.mobileList}>
            {navItems.map((item, i) => (
              <li key={i}>
                {item.dropdown ? (
                  <>
                    <button
                      className={styles.mobileGroup}
                      onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                    >
                      {item.label}
                      <FaChevronDown className={`${styles.chevron} ${openDropdown === i ? styles.chevronOpen : ''}`} />
                    </button>
                    {openDropdown === i && (
                      <ul className={styles.mobileSub}>
                        {item.dropdown.map((sub, j) => (
                          <li key={j}>
                            <a href={sub.href} className={styles.mobileSubLink} target="_blank" rel="noopener noreferrer">
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.to ? (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${styles.mobileLink} ${isActive ? styles.active : ''}`
                    }
                    end={item.to === '/'}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a href={item.href} className={styles.mobileLink} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
