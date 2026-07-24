import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Mrs. Priya Sharma',
    role: 'Parent of Class X Student',
    rating: 5,
    text: 'Excellence International School has transformed my daughter\'s approach to learning. The teachers are incredibly dedicated, and the holistic environment has helped her discover her passion for science and debate.',
    avatar: 'PS',
    color: '#10b981',
  },
  {
    name: 'Mr. Rakesh Agarwal',
    role: 'Parent of Class XII Student',
    rating: 5,
    text: 'My son secured admission to IIT Delhi after studying here. The faculty\'s guidance and the school\'s emphasis on conceptual clarity made all the difference. I\'m eternally grateful to this institution.',
    avatar: 'RA',
    color: '#3b82f6',
  },
  {
    name: 'Mrs. Sunita Verma',
    role: 'Parent of Class VII Student',
    rating: 5,
    text: 'The co-curricular program is exceptional. My child participates in dance, robotics club, and football — all at the same school! The balance between academics and activities is perfect.',
    avatar: 'SV',
    color: '#8b5cf6',
  },
  {
    name: 'Mr. Amit Gupta',
    role: 'Alumni (Batch of 2020)',
    rating: 5,
    text: 'Looking back, Excellence School gave me more than education — it gave me confidence, values, and lifelong friendships. The teachers were mentors who genuinely cared about our futures.',
    avatar: 'AG',
    color: '#f59e0b',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const ref = useRef(null)

  useEffect(() => {
    if (!auto) return
    const timer = setInterval(() => {
      setActive(a => (a + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [auto])

  const go = (dir) => {
    setAuto(false)
    setActive(a => (a + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section className={`section ${styles.section}`} ref={ref} id="testimonials">
      <div className="container">
        <div className={`text-center reveal ${styles.header}`}>
          <span className="section-label">Testimonials</span>
          <h2 className="heading-lg">
            What <span className={styles.highlight}>Parents & Alumni</span> Say
          </h2>
        </div>

        <div className={styles.carousel}>
          <button id="testimonial-prev" className={styles.navBtn} onClick={() => go(-1)} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className={styles.track}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${styles.card} ${i === active ? styles.cardActive : ''}`}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.stars}>
                  {'★'.repeat(t.rating)}
                </div>
                <div className={styles.author}>
                  <div className={styles.avatar} style={{ background: t.color }}>{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button id="testimonial-next" className={styles.navBtn} onClick={() => go(1)} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => { setAuto(false); setActive(i) }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
