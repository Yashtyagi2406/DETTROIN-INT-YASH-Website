import { Link } from 'react-router-dom'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  return (
    <section className={styles.cta} id="cta-banner">
      <div className={styles.bg} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <h2 className={styles.heading}>
              Begin Your Child's <span className={styles.highlight}>Extraordinary Journey</span> Today
            </h2>
            <p className={styles.sub}>
              Admissions for the academic year 2025–26 are now open. 
              Limited seats available across all grades.
            </p>
          </div>
          <div className={styles.actions}>
            <Link to="/contact" id="cta-apply-btn" className={`btn btn-primary ${styles.btnLg}`}>
              Apply Now <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/917055582117"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-btn"
              className={`btn ${styles.waBtn}`}
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
