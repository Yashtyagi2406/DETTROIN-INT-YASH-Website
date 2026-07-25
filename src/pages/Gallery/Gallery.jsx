import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'
import styles from './Gallery.module.css'

const BASE_IMG = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03'

const galleryItems = [
  { id: 1,  img: `${BASE_IMG}/1.jpg`,  title: 'School Campus',           desc: 'Excellence International School main campus, Aligarh' },
  { id: 2,  img: `${BASE_IMG}/2.jpg`,  title: 'School Event',            desc: 'Students participating in school event' },
  { id: 3,  img: `${BASE_IMG}/3.jpg`,  title: 'Cultural Celebration',    desc: 'Cultural programme at Excellence International School' },
  { id: 4,  img: `${BASE_IMG}/4.jpg`,  title: 'Sports Activity',         desc: 'Students engaged in sports activities' },
  { id: 5,  img: `${BASE_IMG}/5.jpg`,  title: 'Academic Session',        desc: 'Classroom learning at Excellence International School' },
  { id: 6,  img: `${BASE_IMG}/6.jpg`,  title: 'School Celebration',      desc: 'Annual celebration event at the school' },
  { id: 7,  img: `${BASE_IMG}/7.jpg`,  title: 'Sports Day',              desc: 'Annual sports day activities' },
  { id: 8,  img: `${BASE_IMG}/8.jpg`,  title: 'Cultural Programme',      desc: 'Students performing at cultural programme' },
  { id: 9,  img: `${BASE_IMG}/9.jpg`,  title: 'School Premises',         desc: 'Beautiful school premises at Aligarh' },
  { id: 10, img: `${BASE_IMG}/11.jpg`, title: 'Prize Distribution',      desc: 'Annual prize distribution ceremony' },
  { id: 11, img: `${BASE_IMG}/12.jpg`, title: 'Classroom Learning',      desc: 'Students learning in modern classrooms' },
  { id: 12, img: `${BASE_IMG}/13.jpg`, title: 'Annual Function',         desc: 'Annual function and cultural programme' },
  { id: 13, img: `${BASE_IMG}/14.jpg`, title: 'Outdoor Sports',          desc: 'Students playing outdoor sports' },
  { id: 14, img: `${BASE_IMG}/15.jpg`, title: 'Special Event',           desc: 'Special event organized by Excellence School' },
  { id: 15, img: `${BASE_IMG}/17.jpg`, title: 'School Building',         desc: 'School building and infrastructure at Aligarh' },
  { id: 16, img: `${BASE_IMG}/18.jpg`, title: 'Cultural Show',           desc: 'Students showcasing cultural talent' },
  { id: 17, img: `${BASE_IMG}/19.jpg`, title: 'Learning Activity',       desc: 'Interactive learning activities for students' },
  { id: 18, img: `${BASE_IMG}/20.jpg`, title: 'School Function',         desc: 'School function and gathering' },
  { id: 19, img: `${BASE_IMG}/21.jpg`, title: 'Physical Education',      desc: 'Physical education and sports at school' },
  { id: 20, img: `${BASE_IMG}/22.jpg`, title: 'Dance Performance',       desc: 'Dance performance at annual day' },
  { id: 21, img: `${BASE_IMG}/23.jpg`, title: 'School Grounds',          desc: 'School grounds and play area' },
  { id: 22, img: `${BASE_IMG}/24.jpg`, title: 'Award Ceremony',          desc: 'Award ceremony recognizing student achievement' },
  { id: 23, img: `${BASE_IMG}/25.jpg`, title: 'Science Activity',        desc: 'Science and experimental learning' },
  { id: 24, img: `${BASE_IMG}/26.jpg`, title: 'Art & Craft',             desc: 'Art and craft display by students' },
  { id: 25, img: `${BASE_IMG}/27.jpg`, title: 'Team Sports',             desc: 'Team sports and cooperative learning' },
  { id: 26, img: `${BASE_IMG}/28.jpg`, title: 'Graduation Day',          desc: 'Graduation and farewell ceremony' },
  { id: 27, img: `${BASE_IMG}/29.jpg`, title: 'School Infrastructure',   desc: 'Modern infrastructure at Excellence International School' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)

  // Close lightbox on Escape & navigate with Arrow keys
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight' && lightbox !== null) {
        setLightbox(l => (l + 1) % galleryItems.length)
      }
      if (e.key === 'ArrowLeft' && lightbox !== null) {
        setLightbox(l => (l - 1 + galleryItems.length) % galleryItems.length)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link to="/">Home</Link> <span>/</span> <span>Gallery</span>
          </div>
          <h1 className={styles.heroTitle}>School Gallery</h1>
          <p className={styles.heroSub}>
            A visual journey through Excellence International School campus, events, sports, academics, and cultural celebrations.
          </p>
        </div>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </section>

      {/* Photos Grid */}
      <section className={`section-sm ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.grid}>
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className={`reveal ${styles.card}`}
                style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.cardImg}
                  loading="lazy"
                />
                <div className={styles.cardOverlay}>
                  <FaExpand className={styles.expandIcon} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={`${styles.lbBtn} ${styles.lbClose}`} onClick={() => setLightbox(null)} aria-label="Close">
            <FaTimes />
          </button>
          <button
            className={`${styles.lbBtn} ${styles.lbPrev}`}
            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l - 1 + galleryItems.length) % galleryItems.length) }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div className={styles.lbContent} onClick={e => e.stopPropagation()}>
            <div className={styles.lbImage}>
              <img
                src={galleryItems[lightbox].img}
                alt={galleryItems[lightbox].title}
                className={styles.lbImg}
              />
            </div>
            <div className={styles.lbInfo}>
              <h3>{galleryItems[lightbox].title}</h3>
              <p>{galleryItems[lightbox].desc}</p>
              <span className={styles.lbCounter}>{lightbox + 1} / {galleryItems.length}</span>
            </div>
          </div>

          <button
            className={`${styles.lbBtn} ${styles.lbNext}`}
            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l + 1) % galleryItems.length) }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
