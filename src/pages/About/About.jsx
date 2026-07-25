import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle, FaHeart, FaLightbulb, FaStar, FaShieldAlt, FaLeaf, FaUsers } from 'react-icons/fa'
import styles from './About.module.css'

const timeline = [
  { year: '2005', title: 'Founded', desc: 'Excellence International School established in Civil Lines, Aligarh with 200 students and a vision for quality education.' },
  { year: '2009', title: 'CBSE Affiliation', desc: 'Received permanent CBSE affiliation and expanded to Secondary level (Class X). First board batch produced 100% results.' },
  { year: '2013', title: 'Senior Secondary', desc: 'Launched Science and Commerce streams in Classes XI–XII with dedicated labs and expert faculty.' },
  { year: '2017', title: 'Digital Campus', desc: 'Transformed into a fully digital campus with smart classrooms, biometric attendance, and online parent portal.' },
  { year: '2020', title: 'Award Recognition', desc: 'Awarded "Best School in Aligarh District" by the UP Education Board. 2000+ students enrolled.' },
  { year: '2024', title: 'Today & Beyond', desc: 'Over 2500 students, 120 faculty members, and an expanding infrastructure with a new sports complex.' },
]

const values = [
  { icon: <FaHeart />, title: 'Integrity', desc: 'We cultivate honesty, transparency, and moral courage in all our students and staff.', color: '#ef4444' },
  { icon: <FaLightbulb />, title: 'Innovation', desc: 'We embrace technology, creativity, and modern pedagogy to make learning engaging.', color: '#f59e0b' },
  { icon: <FaStar />, title: 'Excellence', desc: 'We set high standards and support every student to reach their fullest potential.', color: '#8b5cf6' },
  { icon: <FaShieldAlt />, title: 'Safety', desc: 'A safe, inclusive, and nurturing environment where every child belongs.', color: '#3b82f6' },
  { icon: <FaLeaf />, title: 'Sustainability', desc: 'We instill environmental responsibility and global citizenship in every learner.', color: '#10b981' },
  { icon: <FaUsers />, title: 'Community', desc: 'Building strong bonds between school, parents, and the wider Aligarh community.', color: '#ec4899' },
]



export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link to="/">Home</Link> <span>/</span> <span>About Us</span>
          </div>
          <h1 className={styles.heroTitle}>About Excellence<br />International School</h1>
          <p className={styles.heroSub}>
            Two decades of nurturing brilliant minds, building strong characters, and
            shaping the future leaders of India — one student at a time.
          </p>
        </div>
        {/* Decorative circles */}
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </section>

      {/* 4 Official Educational Pillars from Original Website */}
      <section className={`section ${styles.mvSection}`}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Our Educational Pillars</span>
            <h2 className="heading-lg">Why Parents Trust <span className={styles.highlight}>Excellence</span></h2>
          </div>
          <div className={styles.pillarsGrid}>
            <div className={`reveal ${styles.pillarCard}`}>
              <div className={styles.pillarIcon}>📘</div>
              <h3>Strong Academic System</h3>
              <p>Structured daily lessons, concept-focused teaching, regular revision sessions, periodic assessments, and doubt-clearing sessions for continuous monitoring.</p>
            </div>
            <div className={`reveal reveal-delay-1 ${styles.pillarCard}`}>
              <div className={styles.pillarIcon}>💡</div>
              <h3>Concept-Based Learning</h3>
              <p>Focuses on deep understanding rather than memorization. Develops analytical thinking, logical reasoning, problem-solving, and practical knowledge.</p>
            </div>
            <div className={`reveal reveal-delay-2 ${styles.pillarCard}`}>
              <div className={styles.pillarIcon}>👨‍🏫</div>
              <h3>Experienced & Dedicated Faculty</h3>
              <p>Qualified educators committed to interactive discussions, activity-based learning, real-life examples, and technology-supported education.</p>
            </div>
            <div className={`reveal reveal-delay-3 ${styles.pillarCard}`}>
              <div className={styles.pillarIcon}>🛡️</div>
              <h3>Safe & Secure Campus</h3>
              <p>Comprehensive CCTV monitoring, supervised campus areas, structured discipline policies, and secure entry/exit protocols for complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Vision & Mission Section from Original Website */}
      <section className={`section ${styles.principalSection}`}>
        <div className="container">
          <div className={styles.principalGrid}>
            <div className={`reveal-left ${styles.principalCard}`}>
              <img
                src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Vision-Mission.png"
                alt="Excellence International School Vision & Mission"
                className={styles.visionMissionImg}
              />
            </div>
            <div className={`reveal-right ${styles.principalText}`}>
              <span className="section-label">Our Core Purpose</span>
              <h2 className="heading-lg">School <span className={styles.highlight}>Vision & Mission</span></h2>

              <div className={styles.vmBlock}>
                <h3>🎯 Vision</h3>
                <p>
                  To create confident, responsible, and innovative individuals who contribute positively to society.
                </p>
              </div>

              <div className={styles.vmBlock}>
                <h3>🚀 Mission</h3>
                <ul className={styles.missionList}>
                  <li>✓ Deliver high-quality education</li>
                  <li>✓ Encourage curiosity and creativity</li>
                  <li>✓ Develop strong academic foundations</li>
                  <li>✓ Promote discipline and ethical values</li>
                  <li>✓ Prepare students for future opportunities</li>
                </ul>
                <p style={{ marginTop: '0.75rem', fontStyle: 'italic' }}>
                  Every learner receives personalized attention and encouragement to achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">Our Journey</span>
            <h2 className="heading-lg">Two Decades of <span className={styles.highlight}>Growth & Excellence</span></h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`reveal ${styles.timelineItem}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Our Values</span>
            <h2 className="heading-lg">The Principles That <span className={styles.highlight}>Guide Us</span></h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div
                key={i}
                className={`reveal ${styles.valueCard}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={styles.valueIcon} style={{ background: `${v.color}18`, color: v.color }}>
                  {v.icon}
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={`section ${styles.bottomCta}`}>
        <div className="container text-center">
          <h2 className="heading-lg text-white" style={{ marginBottom: '1rem' }}>
            Ready to Be Part of Our Story?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
            Admissions for 2025–26 are open. Join the Excellence family today.
          </p>
          <Link to="/contact" id="about-cta-btn" className={`btn btn-primary`} style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Apply for Admission <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}
