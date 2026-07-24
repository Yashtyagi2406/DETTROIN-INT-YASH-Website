import { useEffect, useRef, useState } from 'react'
import styles from './StatsSection.module.css'

const stats = [
  { value: 2500, suffix: '+', label: 'Students Enrolled', emoji: '🎓', desc: 'from Aligarh & surrounding districts' },
  { value: 120, suffix: '+', label: 'Expert Faculty', emoji: '👩‍🏫', desc: 'qualified & experienced educators' },
  { value: 98, suffix: '%', label: 'Board Pass Rate', emoji: '📊', desc: 'in CBSE X & XII examinations' },
  { value: 50, suffix: '+', label: 'Awards & Honors', emoji: '🏆', desc: 'national & state level recognitions' },
  { value: 25, suffix: '+', label: 'Clubs & Sports', emoji: '⚽', desc: 'co-curricular programs offered' },
  { value: 20, suffix: '+', label: 'Years of Legacy', emoji: '🌟', desc: 'serving Aligarh since 2005' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const duration = 1800
        const steps = 60
        const step = value / steps
        let current = 0
        const timer = setInterval(() => {
          current += step
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
      }
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <strong ref={ref} className={styles.num}>{count}{suffix}</strong>
}

export default function StatsSection() {
  return (
    <section className={styles.stats} id="stats">
      <div className={styles.bg} />
      <div className="container">
        <div className="text-center reveal" style={{ position: 'relative', zIndex: 1, marginBottom: '3rem' }}>
          <span className="section-label" style={{ color: 'var(--accent-light)' }}>By The Numbers</span>
          <h2 className="heading-lg text-white">
            Excellence That Speaks <span style={{ color: 'var(--accent-light)' }}>For Itself</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className={styles.emoji}>{s.emoji}</span>
              <Counter value={s.value} suffix={s.suffix} />
              <span className={styles.label}>{s.label}</span>
              <span className={styles.desc}>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
