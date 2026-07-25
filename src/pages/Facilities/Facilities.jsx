import { Link } from 'react-router-dom'
import { FaFlask, FaLaptopCode, FaBook, FaRunning, FaBus, FaShieldAlt, FaUtensils, FaMusic } from 'react-icons/fa'
import styles from './Facilities.module.css'

const facilities = [
  {
    icon: <FaFlask />,
    title: 'Science Laboratories',
    desc: 'Fully equipped Physics, Chemistry, and Biology labs with modern apparatus enabling safe, hands-on scientific experiments for middle and senior students.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Computer & IT Lab',
    desc: 'High-speed internet-connected computer lab with 80+ workstations, digital learning modules, and coding workshops.'
  },
  {
    icon: <FaBook />,
    title: 'Library & Resource Centre',
    desc: 'An extensive collection of over 10,000 books, journals, encyclopedias, and digital subscriptions promoting lifelong reading habits.'
  },
  {
    icon: <FaRunning />,
    title: 'Sports & Athletics Complex',
    desc: 'Spacious football field, basketball court, badminton hall, table tennis arena, and trained physical education coaches.'
  },
  {
    icon: <FaBus />,
    title: 'Safe GPS-Tracked Transport',
    desc: 'Fleet of modern buses covering key routes in Aligarh with GPS tracking, CCTV cameras, and female bus attendants for child safety.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Campus Security & CCTV',
    desc: '24/7 security personnel, comprehensive CCTV coverage, biometric access control, and strict visitor verification protocols.'
  },
  {
    icon: <FaMusic />,
    title: 'Performing Arts & Music Studio',
    desc: 'Dedicated soundproof rooms for classical music, western instruments, vocal training, and theatrical performances.'
  },
  {
    icon: <FaUtensils />,
    title: 'Hygienic Cafeteria',
    desc: 'Clean cafeteria serving fresh, nutritious, and wholesome snacks and meals prepared under strict hygiene guidelines.'
  }
]

export default function Facilities() {
  return (
    <div className={styles.facilitiesPage}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link to="/">Home</Link> <span>/</span> <span>Facilities</span>
          </div>
          <h1 className={styles.heroTitle}>School Facilities</h1>
          <p className={styles.heroSub}>
            World-class infrastructure designed to foster intellectual growth, physical fitness, creativity, and safety.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {facilities.map((f, i) => (
              <div key={i} className={styles.facilityCard}>
                <div className={styles.iconBox}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
