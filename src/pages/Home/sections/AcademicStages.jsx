import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import styles from './AcademicStages.module.css'

const stages = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary School',
    subtitle: 'Playgroup, Nursery, LKG & UKG',
    desc: 'Early childhood education focuses on nurturing curiosity, creativity, and basic learning abilities in a joyful, supportive environment.',
    focusTitle: 'Key focus areas include:',
    points: [
      'Play-based learning methodology',
      'Language development & phonics',
      'Basic numeracy & motor skills',
      'Social interaction & teamwork',
      'Creative exploration & arts'
    ],
    footerText: 'Children learn through engaging activities, storytelling, educational games, and interactive sessions that make learning enjoyable.',
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Pre-Primary-School.png',
    link: '/academics/pre-primary',
    reverse: false
  },
  {
    id: 'primary',
    title: 'Primary School',
    subtitle: 'Classes I to V',
    desc: 'Primary education is designed to strengthen core academic skills, conceptual clarity, and independent thinking through CBSE curriculum.',
    focusTitle: 'Key focus areas include:',
    points: [
      'Conceptual understanding in Math & Science',
      'Language comprehension & communication',
      'Environmental awareness & social studies',
      'Interactive smart board learning',
      'Co-curricular physical & creative development'
    ],
    footerText: 'Students build confidence through hands-on learning, practical experiments, collaborative projects, and structured classroom activities.',
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Primary-School.png',
    link: '/academics/primary',
    reverse: true
  },
  {
    id: 'middle',
    title: 'Middle School',
    subtitle: 'Classes VI to VIII',
    desc: 'Middle school prepares students for higher academic challenges with concept-driven science, mathematics, computer applications, and analytical thinking.',
    focusTitle: 'Key focus areas include:',
    points: [
      'Concept-based STEM teaching',
      'Physics, Chemistry & Biology lab practicals',
      'Computer applications & coding fundamentals',
      'Public speaking & analytical reasoning',
      'Sports competitions & student leadership'
    ],
    footerText: 'Comprehensive academic mentorship ensures every student develops critical thinking skills and prepares for board-level academic excellence.',
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Middle.png',
    link: '/academics/middle',
    reverse: false
  },
  {
    id: 'daycare',
    title: 'Daycare Facility',
    subtitle: 'After-School Safe Care',
    desc: 'Our Daycare facility offers working parents complete peace of mind with a safe, loving, and engaging environment for children after regular school hours.',
    focusTitle: 'Key features include:',
    points: [
      'Supervised homework assistance & tutoring',
      'Nutritious snacks & quiet rest areas',
      'Creative games, reading & storytelling',
      'Continuous CCTV monitoring & trained caretakers'
    ],
    footerText: 'A warm, home-like atmosphere where children relax, complete their schoolwork, and engage in constructive recreational activities.',
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/day-care.png',
    link: '/academics/daycare',
    reverse: true
  }
]

export default function AcademicStages() {
  return (
    <section className={`section ${styles.stagesSection}`} id="academic-stages">
      <div className="container">
        {/* Section Header */}
        <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
          <span className="section-label">Structured Educational Journey</span>
          <h2 className="heading-lg">Academic <span className={styles.highlight}>Stages</span></h2>
          <p className={styles.sectionDesc}>
            At <strong>Excellence International School</strong>, the academic journey is structured to support students at every stage of their development. Each stage focuses on age-appropriate learning methods that help children build strong academic skills, confidence, and personal growth.
          </p>
        </div>

        {/* Stages List */}
        <div className={styles.stagesList}>
          {stages.map((stage, idx) => (
            <div
              key={stage.id}
              className={`${styles.stageRow} ${stage.reverse ? styles.reverse : ''} reveal`}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              {/* Text Column */}
              <div className={styles.stageTextCol}>
                <span className={styles.stageBadge}>{stage.subtitle}</span>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
                <p className={styles.stageDesc}>{stage.desc}</p>

                <h4 className={styles.focusTitle}>{stage.focusTitle}</h4>
                <ul className={styles.pointsList}>
                  {stage.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <p className={styles.footerText}>{stage.footerText}</p>

                <Link to={stage.link} className={`btn btn-outline ${styles.learnBtn}`}>
                  Explore {stage.title} <FaArrowRight />
                </Link>
              </div>

              {/* Image Column */}
              <div className={styles.stageImgCol}>
                <div className={styles.imgWrapper}>
                  <img
                    src={stage.img}
                    alt={`${stage.title} at Excellence International School Aligarh`}
                    className={styles.stageImg}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
