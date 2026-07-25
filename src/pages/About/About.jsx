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

      {/* Mission & Vision */}
      <section className={`section ${styles.mvSection}`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={`reveal ${styles.mvCard} ${styles.mission}`}>
              <span className={styles.mvIcon}>🎯</span>
              <h3>Our Mission</h3>
              <p>To provide an exceptional, learner-centred CBSE education that develops intellectual curiosity, moral character, physical well-being, and social responsibility in every student — empowering them to excel in a rapidly changing global world.</p>
            </div>
            <div className={`reveal reveal-delay-2 ${styles.mvCard} ${styles.vision}`}>
              <span className={styles.mvIcon}>🌟</span>
              <h3>Our Vision</h3>
              <p>To be Aligarh's most trusted institution of learning — a place where every child is known, valued, and inspired to discover the unique gifts they carry within them, building a future that is bright for them and for society.</p>
            </div>
            <div className={`reveal reveal-delay-3 ${styles.mvCard} ${styles.philosophy}`}>
              <span className={styles.mvIcon}>📚</span>
              <h3>Our Philosophy</h3>
              <p>We believe education is not merely the transfer of knowledge, but the awakening of the mind. Through inquiry-based learning, critical thinking, and compassionate mentorship, we prepare students for life — not just examinations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className={`section ${styles.principalSection}`}>
        <div className="container">
          <div className={styles.principalGrid}>
            <div className={`reveal-left ${styles.principalCard}`}>
              <div className={styles.principalAvatar}>RP</div>
              <div className={styles.principalBadge}>🏆 Distinguished Educator Award 2023</div>
            </div>
            <div className={`reveal-right ${styles.principalText}`}>
              <span className="section-label">From the Principal's Desk</span>
              <h2 className="heading-lg">A Message from<br /><span className={styles.highlight}>Dr. Rajendra Prasad</span></h2>
              <p>
                "Welcome to Excellence International School — a place where we celebrate the uniqueness of every child. Our school is more than classrooms and textbooks; it is a vibrant community of learners, explorers, and dreamers.
              </p>
              <p>
                Over the past twenty years, we have watched thousands of students walk through our gates as curious young minds and leave as confident, compassionate, and capable individuals ready to make their mark on the world.
              </p>
              <p>
                We invite you to join our family and be a part of this incredible journey of excellence."
              </p>
              <div className={styles.principalSig}>
                <strong>Dr. Rajendra Prasad</strong>
                <span>Principal, Excellence International School</span>
                <span>M.Ed., Ph.D. — Education Leadership</span>
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
                className={`reveal ${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className={styles.timelineDot} />
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
