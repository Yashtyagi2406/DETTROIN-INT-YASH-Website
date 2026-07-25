import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaMapMarkerAlt, FaEdit, FaBolt, FaTimes } from 'react-icons/fa'
import styles from './FloatingQuickActions.module.css'

export default function FloatingQuickActions() {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.dockWrapper}>
      {open && (
        <div className={styles.dockMenu}>
          <a
            href="tel:+917055582117"
            className={styles.dockItem}
            title="Call Us Directly"
          >
            <FaPhoneAlt className={styles.iconCall} />
            <span className={styles.dockLabel}>Call +91 7055582117</span>
          </a>

          <a
            href="https://maps.google.com/maps?q=Excellence+International+School+Ramghat+Road+Aligarh+Uttar+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dockItem}
            title="Open Google Maps Directions"
          >
            <FaMapMarkerAlt className={styles.iconMap} />
            <span className={styles.dockLabel}>Google Maps Route</span>
          </a>

          <Link
            to="/admissions/enquiry"
            className={styles.dockItem}
            title="Fill Admission Enquiry"
            onClick={() => setOpen(false)}
          >
            <FaEdit className={styles.iconForm} />
            <span className={styles.dockLabel}>Admission Enquiry</span>
          </Link>
        </div>
      )}

      <button
        className={`${styles.dockToggleBtn} ${open ? styles.active : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle Quick Actions Menu"
        id="quick-actions-fab"
      >
        {open ? <FaTimes /> : <FaBolt />}
      </button>
    </div>
  )
}
