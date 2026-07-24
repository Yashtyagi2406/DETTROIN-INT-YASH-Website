import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'
import styles from './Gallery.module.css'

const categories = ['All', 'Campus', 'Events', 'Sports', 'Academics', 'Cultural']

const galleryItems = [
  { id: 1, cat: 'Campus', emoji: '🏛️', title: 'Main School Building', desc: 'Our iconic 4-story campus with modern architecture', span: 'wide' },
  { id: 2, cat: 'Sports', emoji: '⚽', title: 'Football Ground', desc: 'Full-size football ground with well-maintained turf', span: '' },
  { id: 3, cat: 'Academics', emoji: '🔬', title: 'Science Laboratory', desc: 'State-of-the-art physics and chemistry labs', span: '' },
  { id: 4, cat: 'Cultural', emoji: '🎭', title: 'Annual Day Celebration', desc: 'Students performing at the annual cultural fest', span: 'tall' },
  { id: 5, cat: 'Campus', emoji: '📚', title: 'School Library', desc: '10,000+ books across all genres and subjects', span: '' },
  { id: 6, cat: 'Events', emoji: '🎉', title: 'Founders Day 2024', desc: 'Celebrating 19 years of excellence together', span: '' },
  { id: 7, cat: 'Sports', emoji: '🏸', title: 'Indoor Badminton Court', desc: 'Professional-grade indoor sports complex', span: '' },
  { id: 8, cat: 'Academics', emoji: '💻', title: 'Computer Lab', desc: '80-seat digital lab with high-speed internet', span: 'wide' },
  { id: 9, cat: 'Cultural', emoji: '🎵', title: 'Music & Dance Room', desc: 'Dedicated space for classical and western music', span: '' },
  { id: 10, cat: 'Events', emoji: '🏆', title: 'Prize Distribution 2024', desc: 'Annual awards ceremony recognizing student achievement', span: '' },
  { id: 11, cat: 'Campus', emoji: '🌳', title: 'School Garden', desc: 'Lush green garden promoting eco-consciousness', span: '' },
  { id: 12, cat: 'Sports', emoji: '🏊', title: 'Swimming Pool', desc: 'Olympic-size pool for swimming training', span: 'tall' },
  { id: 13, cat: 'Academics', emoji: '🎨', title: 'Art & Craft Studio', desc: 'Creative studio for painting, sculpture, and design', span: '' },
  { id: 14, cat: 'Events', emoji: '🎓', title: 'Graduation Ceremony', desc: 'Class XII farewell and graduation 2024', span: '' },
  { id: 15, cat: 'Cultural', emoji: '🪔', title: 'Diwali Celebrations', desc: 'Students celebrating the festival of lights at school', span: '' },
]

const colorMap = {
  Campus: '#0D3B2E',
  Sports: '#10b981',
  Academics: '#3b82f6',
  Cultural: '#8b5cf6',
  Events: '#f59e0b',
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.cat === activeCategory)

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight' && lightbox !== null) {
        setLightbox(l => (l + 1) % filtered.length)
      }
      if (e.key === 'ArrowLeft' && lightbox !== null) {
        setLightbox(l => (l - 1 + filtered.length) % filtered.length)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, filtered.length])

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [activeCategory])

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
            A visual journey through our campus, events, sports, academics, and cultural celebrations.
          </p>
        </div>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterTabs}>
            {categories.map(cat => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase()}`}
                className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className={`section-sm ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.grid}>
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`reveal ${styles.card} ${item.span === 'wide' ? styles.wide : ''} ${item.span === 'tall' ? styles.tall : ''}`}
                style={{
                  '--item-color': colorMap[item.cat] || '#0D3B2E',
                  transitionDelay: `${(i % 6) * 0.07}s`
                }}
                onClick={() => setLightbox(i)}
              >
                <div className={styles.cardInner}>
                  <span className={styles.cardEmoji}>{item.emoji}</span>
                </div>
                <div className={styles.cardOverlay}>
                  <div className={styles.catBadge}>{item.cat}</div>
                  <FaExpand className={styles.expandIcon} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.noItems}>No items in this category yet.</p>
          )}
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
            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l - 1 + filtered.length) % filtered.length) }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div className={styles.lbContent} onClick={e => e.stopPropagation()}>
            <div
              className={styles.lbImage}
              style={{ background: `linear-gradient(135deg, ${colorMap[filtered[lightbox].cat]}22, ${colorMap[filtered[lightbox].cat]}44)` }}
            >
              <span className={styles.lbEmoji}>{filtered[lightbox].emoji}</span>
            </div>
            <div className={styles.lbInfo}>
              <span className={styles.lbCat}>{filtered[lightbox].cat}</span>
              <h3>{filtered[lightbox].title}</h3>
              <p>{filtered[lightbox].desc}</p>
              <span className={styles.lbCounter}>{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>

          <button
            className={`${styles.lbBtn} ${styles.lbNext}`}
            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l + 1) % filtered.length) }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
