import { Link } from 'react-router-dom'
import {
  FaGraduationCap, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp,
  FaHeart
} from 'react-icons/fa'
import styles from './Footer.module.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const programs = [
  'Pre-Primary (Nursery–KG)',
  'Primary School (I–V)',
  'Middle School (VI–VIII)',
  'Secondary (IX–X)',
  'Senior Secondary (XI–XII)',
  'Co-Curricular Activities',
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Wave SVG top */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--primary-dark)" />
        </svg>
      </div>

      <div className={styles.footerBody}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link to="/" className={styles.logo}>
                <div className={styles.logoIcon}><FaGraduationCap /></div>
                <div>
                  <span className={styles.logoMain}>Excellence</span>
                  <span className={styles.logoSub}>International School</span>
                </div>
              </Link>
              <p className={styles.tagline}>
                Nurturing tomorrow's leaders with world-class education and holistic development since 2005.
              </p>
              <div className={styles.socials}>
                <a href="https://www.facebook.com/share/1GvbBbZqN5/" target="_blank" rel="noopener noreferrer" id="footer-facebook" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://www.instagram.com/excellence_school_aligarh?igsh=a2NudW0zcnlqeTVu" target="_blank" rel="noopener noreferrer" id="footer-instagram" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com/@excellenceschoolinternational?si=cAvfCyy3WWmRWkg6" target="_blank" rel="noopener noreferrer" id="footer-youtube" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://api.whatsapp.com/send?phone=917055582117" target="_blank" rel="noopener noreferrer" id="footer-twitter" aria-label="WhatsApp"><FaWhatsapp /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={styles.colHeading}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className={styles.footerLink}>
                      <span className={styles.arrow}>›</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className={styles.colHeading}>Programs</h4>
              <ul className={styles.linkList}>
                {programs.map(p => (
                  <li key={p}>
                    <span className={styles.programItem}>
                      <span className={styles.arrow}>›</span> {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={styles.colHeading}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>Ramghat Road, Aligarh, Uttar Pradesh — 202001</span>
                </li>
                <li>
                  <FaPhoneAlt className={styles.contactIcon} />
                  <a href="tel:+917055582117">+91 7055582117</a>
                </li>
                <li>
                  <FaEnvelope className={styles.contactIcon} />
                  <a href="mailto:info@excellenceinternationalschool.com">info@excellenceinternationalschool.com</a>
                </li>
              </ul>

              <Link to="/contact" className={`btn btn-primary ${styles.admissionsBtn}`} id="footer-admissions-btn">
                Admission Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span>© {new Date().getFullYear()} Excellence International School. All rights reserved.</span>
            <span className={styles.madeWith}>
              Made with <FaHeart className={styles.heart} /> by Yash Tyagi
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
