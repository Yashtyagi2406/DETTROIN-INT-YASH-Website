import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './Gallery.module.css'

const BASE_IMG = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03'

const galleryItems = [
  { id: 1,  img: `${BASE_IMG}/1.jpg` },
  { id: 2,  img: `${BASE_IMG}/2.jpg` },
  { id: 3,  img: `${BASE_IMG}/3.jpg` },
  { id: 4,  img: `${BASE_IMG}/4.jpg` },
  { id: 5,  img: `${BASE_IMG}/5.jpg` },
  { id: 6,  img: `${BASE_IMG}/6.jpg` },
  { id: 7,  img: `${BASE_IMG}/7.jpg` },
  { id: 8,  img: `${BASE_IMG}/8.jpg` },
  { id: 9,  img: `${BASE_IMG}/9.jpg` },
  { id: 10, img: `${BASE_IMG}/11.jpg` },
  { id: 11, img: `${BASE_IMG}/12.jpg` },
  { id: 12, img: `${BASE_IMG}/13.jpg` },
  { id: 13, img: `${BASE_IMG}/14.jpg` },
  { id: 14, img: `${BASE_IMG}/15.jpg` },
  { id: 15, img: `${BASE_IMG}/17.jpg` },
  { id: 16, img: `${BASE_IMG}/18.jpg` },
  { id: 17, img: `${BASE_IMG}/19.jpg` },
  { id: 18, img: `${BASE_IMG}/20.jpg` },
  { id: 19, img: `${BASE_IMG}/21.jpg` },
  { id: 20, img: `${BASE_IMG}/22.jpg` },
  { id: 21, img: `${BASE_IMG}/23.jpg` },
  { id: 22, img: `${BASE_IMG}/24.jpg` },
  { id: 23, img: `${BASE_IMG}/25.jpg` },
  { id: 24, img: `${BASE_IMG}/26.jpg` },
  { id: 25, img: `${BASE_IMG}/27.jpg` },
  { id: 26, img: `${BASE_IMG}/28.jpg` },
  { id: 27, img: `${BASE_IMG}/29.jpg` },
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

      {/* Pure Photos Grid */}
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
                  alt={`Excellence International School photo ${item.id}`}
                  className={styles.cardImg}
                  loading="lazy"
                />
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
                alt={`Photo ${lightbox + 1}`}
                className={styles.lbImg}
              />
            </div>
            <div className={styles.lbInfo}>
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
