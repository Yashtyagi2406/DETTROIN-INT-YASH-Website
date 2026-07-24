import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaMedal, FaLeaf, FaUsers } from 'react-icons/fa'
import styles from './AboutSnippet.module.css'

const values = [
  { icon: <FaMedal />, title: 'Academic Excellence', desc: 'Consistently achieving outstanding board results with 98% pass rate.' },
  { icon: <FaLeaf />, title: 'Holistic Growth', desc: 'Sports, arts, music, and leadership programs alongside academics.' },
  { icon: <FaUsers />, title: 'Inclusive Community', desc: 'A diverse, welcoming environment where every child thrives.' },
]

export default function AboutSnippet() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`section ${styles.about}`} ref={sectionRef} id="about-snippet">
      <div className="container">
        <div className={styles.grid}>
          {/* Left - Image mosaic */}
          <div className={`reveal-left ${styles.imageCol}`}>
            <div className={styles.mosaic}>
              <div className={`${styles.mosaicCard} ${styles.mc1}`}>
                <span>🏫</span>
                <p>Modern Campus</p>
              </div>
              <div className={`${styles.mosaicCard} ${styles.mc2}`}>
                <span>📚</span>
                <p>Smart Classrooms</p>
              </div>
              <div className={`${styles.mosaicCard} ${styles.mc3}`}>
                <span>⚽</span>
                <p>Sports Ground</p>
              </div>
              <div className={`${styles.mosaicCard} ${styles.mc4}`}>
                <span>🔬</span>
                <p>Science Labs</p>
              </div>
              <div className={styles.yearBadge}>
                <strong>20+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className={`reveal-right ${styles.textCol}`}>
            <span className="section-label">About Us</span>
            <h2 className="heading-lg">
              A Legacy of Learning &amp;<br />
              <span className={styles.highlight}>Holistic Excellence</span>
            </h2>
            <p className={styles.desc}>
              Founded in 2005, Excellence International School has been at the forefront of 
              providing quality CBSE education in Aligarh. We believe that every child is 
              unique and deserves an environment that fosters their individual strengths 
              while building character, creativity, and critical thinking.
            </p>

            <div className={styles.values}>
              {values.map((v, i) => (
                <div key={i} className={styles.valueItem}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <div>
                    <strong>{v.title}</strong>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" id="about-learn-more-btn" className={`btn btn-outline ${styles.cta}`}>
              Learn More About Us <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
