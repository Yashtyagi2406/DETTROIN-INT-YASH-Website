import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaGraduationCap, FaBookReader, FaChild, FaBaby, FaCheckCircle, FaAward } from 'react-icons/fa'
import styles from './Academics.module.css'

const academicStages = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary School',
    subtitle: 'Playgroup, Nursery, LKG & UKG',
    icon: <FaChild />,
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Pre-Primary-School.png',
    overview: 'Our Pre-Primary section provides a nurturing, play-based foundation designed to instill joy in learning, curiosity, and early socialization.',
    highlights: [
      'Activity-based play & learn methodology',
      'Phonics and early literacy development',
      'Motor skills & creative arts activities',
      'Caring and certified early childhood educators',
      'Safe, child-friendly colorful classrooms'
    ]
  },
  {
    id: 'primary',
    title: 'Primary School',
    subtitle: 'Classes I to V',
    icon: <FaBookReader />,
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Primary-School.png',
    overview: 'Primary education focuses on building strong fundamentals in mathematics, science, languages, and moral values through experiential learning.',
    highlights: [
      'CBSE integrated curriculum',
      'Interactive smart board enabled classes',
      'Focus on reading comprehension & problem solving',
      'Environmental studies & practical experiments',
      'Co-curricular activities: Music, Dance, Sports & Art'
    ]
  },
  {
    id: 'middle',
    title: 'Middle School',
    subtitle: 'Classes VI to VIII',
    icon: <FaGraduationCap />,
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Middle.png',
    overview: 'Middle school prepares students for higher academic challenges with concept-driven science, mathematics, computer applications, and analytical thinking.',
    highlights: [
      'Concept-based STEM teaching',
      'Well-equipped Physics, Chemistry & Bio labs',
      'Advanced computer literacy and coding basics',
      'Communication & public speaking programs',
      'Inter-house competitions & leadership opportunities'
    ]
  },
  {
    id: 'daycare',
    title: 'Daycare Facility',
    subtitle: 'After-School Safe Care',
    icon: <FaBaby />,
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/day-care.png',
    overview: 'Our Daycare facility offers working parents peace of mind with a safe, loving, and engaging environment for children after regular school hours.',
    highlights: [
      'Supervised homework assistance & tutoring',
      'Nutritious meal options & rest zones',
      'Indoor games, story-telling & creative play',
      'CCTV monitored safe infrastructure',
      'Flexible hourly and monthly care packages'
    ]
  }
]

export default function Academics() {
  const location = useLocation()

  const getInitialTab = () => {
    if (location.pathname.includes('daycare')) return 'daycare'
    if (location.pathname.includes('middle')) return 'middle'
    if (location.pathname.includes('primary') && !location.pathname.includes('pre-primary')) return 'primary'
    if (location.pathname.includes('pre-primary')) return 'pre-primary'
    return 'pre-primary'
  }

  const [activeTab, setActiveTab] = useState(getInitialTab)

  useEffect(() => {
    if (location.pathname.includes('daycare')) setActiveTab('daycare')
    else if (location.pathname.includes('middle')) setActiveTab('middle')
    else if (location.pathname.includes('primary') && !location.pathname.includes('pre-primary')) setActiveTab('primary')
    else if (location.pathname.includes('pre-primary')) setActiveTab('pre-primary')
  }, [location.pathname])

  const currentStage = academicStages.find(s => s.id === activeTab) || academicStages[0]

  return (
    <div className={styles.academicsPage}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link to="/">Home</Link> <span>/</span> <span>Academics</span>
          </div>
          <h1 className={styles.heroTitle}>Academic Programs & Stages</h1>
          <p className={styles.heroSub}>
            Empowering students with a robust CBSE curriculum, holistic development, and world-class learning infrastructure.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.tabsNav}>
            {academicStages.map(stage => (
              <button
                key={stage.id}
                className={`${styles.tabBtn} ${activeTab === stage.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(stage.id)}
              >
                <span className={styles.tabIcon}>{stage.icon}</span>
                <span className={styles.tabText}>
                  <strong>{stage.title}</strong>
                  <small>{stage.subtitle}</small>
                </span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className={styles.stageCard}>
            <div className={styles.stageGrid}>
              <div className={styles.stageText}>
                <div className={styles.stageBadge}>
                  <FaAward /> Academic Stage
                </div>
                <h2>{currentStage.title}</h2>
                <p className={styles.subtitleText}>{currentStage.subtitle}</p>
                <p className={styles.overviewText}>{currentStage.overview}</p>

                <h3 className={styles.highlightTitle}>Key Features & Highlights</h3>
                <ul className={styles.highlightsList}>
                  {currentStage.highlights.map((h, i) => (
                    <li key={i}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.ctaBox}>
                  <Link to="/admissions" className="btn btn-primary">
                    Enquire for Admission
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Schedule School Visit
                  </Link>
                </div>
              </div>

              <div className={styles.stageImageWrapper}>
                <img
                  src={currentStage.img}
                  alt={currentStage.title}
                  className={styles.stageImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
