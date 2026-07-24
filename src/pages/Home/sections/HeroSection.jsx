import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, FaArrowRight, FaGraduationCap, FaUsers, FaTrophy, FaStar } from 'react-icons/fa'
import styles from './HeroSection.module.css'

const stats = [
  { icon: <FaGraduationCap />, value: '2500+', label: 'Students Enrolled' },
  { icon: <FaUsers />, value: '120+', label: 'Expert Faculty' },
  { icon: <FaTrophy />, value: '50+', label: 'Awards Won' },
  { icon: <FaStar />, value: '20+', label: 'Years of Excellence' },
]

const typewriterTexts = [
  'Shaping Future Leaders',
  'Building Bright Minds',
  'Nurturing Every Talent',
  'Excellence in Education',
]

export default function HeroSection() {
  const typeRef = useRef(null)

  useEffect(() => {
    let current = 0
    let charIndex = 0
    let isDeleting = false
    let timeout

    function type() {
      const el = typeRef.current
      if (!el) return
      const word = typewriterTexts[current]

      if (isDeleting) {
        charIndex--
        el.textContent = word.slice(0, charIndex)
        if (charIndex === 0) {
          isDeleting = false
          current = (current + 1) % typewriterTexts.length
          timeout = setTimeout(type, 400)
          return
        }
        timeout = setTimeout(type, 50)
      } else {
        charIndex++
        el.textContent = word.slice(0, charIndex)
        if (charIndex === word.length) {
          isDeleting = true
          timeout = setTimeout(type, 2200)
          return
        }
        timeout = setTimeout(type, 80)
      }
    }

    timeout = setTimeout(type, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      {/* Animated background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
      <div className={styles.gridOverlay} />

      <div className={`container ${styles.content}`}>
        {/* Left — Text */}
        <div className={styles.textCol}>
          <div className={`badge badge-accent ${styles.badge}`}>
            🏆 Best School in Aligarh, UP
          </div>

          <h1 className={styles.heading}>
            Excellence in Education —
            <br />
            <span className={styles.typewriter} ref={typeRef}>Shaping Future Leaders</span>
            <span className={styles.cursor}>|</span>
          </h1>

          <p className={styles.subtext}>
            At Excellence International School, we provide a world-class CBSE curriculum
            combined with holistic development to nurture well-rounded, confident, and compassionate leaders
            for tomorrow's world.
          </p>

          <div className={styles.actions}>
            <Link to="/contact" id="hero-apply-btn" className={`btn btn-primary ${styles.btnLg}`}>
              Apply for Admission <FaArrowRight />
            </Link>
            <button id="hero-tour-btn" className={`btn btn-secondary ${styles.btnLg} ${styles.tourBtn}`}>
              <span className={styles.playIcon}><FaPlay /></span>
              Virtual Tour
            </button>
          </div>

          {/* Trust badges */}
          <div className={styles.trust}>
            <span>✓ CBSE Affiliated</span>
            <span>✓ ISO Certified</span>
            <span>✓ Ranked #1 in Aligarh</span>
          </div>
        </div>

        {/* Right — Visual card */}
        <div className={styles.visualCol}>
          <div className={styles.visualCard}>
            <div className={styles.schoolImg}>
              <div className={styles.imgPlaceholder}>
                <FaGraduationCap className={styles.bigIcon} />
                <span>Excellence International School</span>
                <span className={styles.imgSub}>Aligarh, Uttar Pradesh</span>
              </div>
            </div>
            {/* Floating achievement cards */}
            <div className={`${styles.floatCard} ${styles.fc1}`}>
              <span>🏆</span>
              <div>
                <strong>Best School Award</strong>
                <p>Aligarh District 2024</p>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.fc2}`}>
              <span>📊</span>
              <div>
                <strong>98% Board Results</strong>
                <p>Class X & XII 2024</p>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.fc3}`}>
              <span>🌟</span>
              <div>
                <strong>4.9 / 5 Rating</strong>
                <p>Parent Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statIcon}>{s.icon}</span>
                <strong className={styles.statValue}>{s.value}</strong>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
