import { useEffect, useRef } from 'react'
import styles from './ProgramsSection.module.css'

const programs = [
  {
    emoji: '🌱',
    level: 'Pre-Primary',
    grades: 'Nursery – KG',
    color: '#10b981',
    desc: 'Building the foundation through play-based learning, creativity, and early childhood education.',
    features: ['Activity-based curriculum', 'Story & art sessions', 'Social skill development'],
  },
  {
    emoji: '📖',
    level: 'Primary School',
    grades: 'Grade I – V',
    color: '#3b82f6',
    desc: 'Developing core literacy and numeracy skills with a strong emphasis on curiosity and inquiry.',
    features: ['CBSE curriculum', 'English & Hindi medium', 'Science & Maths focus'],
  },
  {
    emoji: '🔭',
    level: 'Middle School',
    grades: 'Grade VI – VIII',
    color: '#8b5cf6',
    desc: 'Nurturing analytical thinking and deepening conceptual understanding across all subjects.',
    features: ['Lab-based learning', 'Project work', 'Debate & public speaking'],
  },
  {
    emoji: '🎓',
    level: 'Secondary',
    grades: 'Grade IX – X',
    color: '#f59e0b',
    desc: 'Rigorous board preparation with expert faculty and comprehensive subject coverage.',
    features: ['CBSE board prep', 'Olympiad training', 'Career counselling'],
  },
  {
    emoji: '🚀',
    level: 'Senior Secondary',
    grades: 'Grade XI – XII',
    color: '#ef4444',
    desc: 'Specialized streams in Science, Commerce, and Humanities with expert mentorship.',
    features: ['PCM / PCB / Commerce', 'JEE/NEET guidance', 'Internship programs'],
  },
  {
    emoji: '⚽',
    level: 'Co-Curricular',
    grades: 'All Grades',
    color: '#06b6d4',
    desc: 'Sports, music, dance, drama, and digital arts for well-rounded holistic development.',
    features: ['25+ sports & clubs', 'Annual cultural fest', 'Inter-school competitions'],
  },
]

export default function ProgramsSection() {
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
    <section className={`section ${styles.programs}`} ref={ref} id="programs">
      <div className="container">
        <div className={`text-center reveal ${styles.header}`}>
          <span className="section-label">Academic Programs</span>
          <h2 className="heading-lg">
            Nurturing Every Stage of <span className={styles.highlight}>Learning</span>
          </h2>
          <p className={styles.subtitle}>
            From the first day of nursery to the final board exam — we guide every student 
            with care, expertise, and passion.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((p, i) => (
            <div
              key={i}
              className={`reveal ${styles.card}`}
              style={{ '--card-color': p.color, transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.emoji}>{p.emoji}</span>
                <div className={styles.badge} style={{ background: `${p.color}18`, color: p.color }}>
                  {p.grades}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{p.level}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <ul className={styles.features}>
                {p.features.map((f, j) => (
                  <li key={j}><span className={styles.dot} style={{ background: p.color }} />{f}</li>
                ))}
              </ul>
              <div className={styles.cardBar} style={{ background: p.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
