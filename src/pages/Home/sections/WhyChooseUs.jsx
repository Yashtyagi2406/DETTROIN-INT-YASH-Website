import { useEffect, useRef } from 'react'
import {
  FaGraduationCap, FaFlask, FaBus, FaWifi,
  FaHeartbeat, FaTrophy
} from 'react-icons/fa'
import styles from './WhyChooseUs.module.css'

const reasons = [
  { icon: <FaGraduationCap />, title: 'CBSE Excellence', desc: '98% board result rate with top rankers every year at district and state level.', color: '#0D3B2E' },
  { icon: <FaFlask />, title: 'Modern Labs', desc: 'Fully equipped Physics, Chemistry, Biology, and Computer labs for hands-on learning.', color: '#3b82f6' },
  { icon: <FaBus />, title: 'Safe Transport', desc: 'GPS-tracked school buses with trained drivers covering all areas of Aligarh.', color: '#f59e0b' },
  { icon: <FaWifi />, title: 'Smart Campus', desc: 'High-speed Wi-Fi, smart boards, and digital library across the entire campus.', color: '#8b5cf6' },
  { icon: <FaHeartbeat />, title: 'Student Wellness', desc: 'On-campus medical room, counsellor, and mental health support for all students.', color: '#ef4444' },
  { icon: <FaTrophy />, title: 'Award Winning', desc: '50+ national and state-level awards in academics, sports, and cultural activities.', color: '#10b981' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`section ${styles.section}`} ref={ref} id="why-us">
      <div className="container">
        <div className={`text-center reveal ${styles.header}`}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="heading-lg">
            What Sets Us <span className={styles.highlight}>Apart</span>
          </h2>
          <p className={styles.subtitle}>
            More than just academics — we offer a complete environment for every child to thrive.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`reveal ${styles.card}`}
              style={{ '--c': r.color, transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.iconWrap}>
                {r.icon}
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
