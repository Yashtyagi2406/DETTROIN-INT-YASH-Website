import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, FaArrowRight, FaGraduationCap, FaUsers, FaTrophy, FaStar, FaTimes, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './HeroSection.module.css'

const stats = [
  { icon: <FaGraduationCap />, value: '2500+', label: 'Students Enrolled' },
  { icon: <FaUsers />, value: '120+', label: 'Expert Faculty' },
  { icon: <FaTrophy />, value: '50+', label: 'Awards Won' },
  { icon: <FaStar />, value: '20+', label: 'Years of Excellence' },
]

const typewriterTexts = [
  'Shaping Future Leaders',
  'Building Bright Minds',
  'Nurturing Every Talent',
  'Excellence in Education',
]

const bannerSlides = [
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-02.jpg.jpeg', alt: 'Excellence International School Admissions Open 2026-2027' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-1.png', alt: 'Excellence International School Campus' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-4-1.png', alt: 'Holistic Education & Sports Facilities' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-002.jpg.jpeg', alt: 'Creative & Confident Learning' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-003-scaled.png', alt: 'State of the Art Facilities & Labs' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Home-Banner-5-1-scaled.png', alt: 'Pre-Primary to Middle School Excellence' }
]

const tourImages = [
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/1.jpg', title: 'Main School Campus & Entry' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Pre-Primary-School.png', title: 'Pre-Primary Play Area & Activity Classrooms' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Primary-School.png', title: 'Smart Interactive Classrooms' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Middle.png', title: 'Science & Computer Technology Labs' },
  { img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/4.jpg', title: 'Sports Field & Outdoor Activities' }
]

export default function HeroSection() {
  const typeRef = useRef(null)
  const [showTour, setShowTour] = useState(false)
  const [activeTourIndex, setActiveTourIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance banner slides every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % bannerSlides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  // Typewriter effect
  useEffect(() => {
    let current = 0
    let charIndex = 0
    let isDeleting = false
    let timeout

    function type() {
      const el = typeRef.current
      if (!el) return
      const word = typewriterTexts[current]

      if (isDeleting) {
        charIndex--
        el.textContent = word.slice(0, charIndex)
        if (charIndex === 0) {
          isDeleting = false
          current = (current + 1) % typewriterTexts.length
          timeout = setTimeout(type, 400)
          return
        }
        timeout = setTimeout(type, 50)
      } else {
        charIndex++
        el.textContent = word.slice(0, charIndex)
        if (charIndex === word.length) {
          isDeleting = true
          timeout = setTimeout(type, 2200)
          return
        }
        timeout = setTimeout(type, 80)
      }
    }

    timeout = setTimeout(type, 600)
    return () => clearTimeout(timeout)
  }, [])

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % bannerSlides.length)
  }

  return (
    <section className={styles.hero} id="hero">
      {/* Animated background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
      <div className={styles.gridOverlay} />

      <div className={`container ${styles.content}`}>
        {/* Left — Text */}
        <div className={styles.textCol}>
          <div className={`badge badge-accent ${styles.badge}`}>
            🏆 Best School in Aligarh, UP
          </div>

          <h1 className={styles.heading}>
            Excellence in Education —
            <br />
            <span className={styles.typewriter} ref={typeRef}>Shaping Future Leaders</span>
            <span className={styles.cursor}>|</span>
          </h1>

          <p className={styles.subtext}>
            At Excellence International School, we provide a world-class CBSE curriculum
            combined with holistic development to nurture well-rounded, confident, and compassionate leaders
            for tomorrow's world.
          </p>

          <div className={styles.actions}>
            <Link to="/contact" id="hero-apply-btn" className={`btn btn-primary ${styles.btnLg}`}>
              Apply for Admission <FaArrowRight />
            </Link>
            <button
              id="hero-tour-btn"
              className={`btn btn-secondary ${styles.btnLg} ${styles.tourBtn}`}
              onClick={() => setShowTour(true)}
            >
              <span className={styles.playIcon}><FaPlay /></span>
              Virtual Tour
            </button>
          </div>

          {/* Trust badges */}
          <div className={styles.trust}>
            <span>✓ CBSE Affiliated</span>
            <span>✓ ISO Certified</span>
            <span>✓ Ranked #1 in Aligarh</span>
          </div>
        </div>

        {/* Right — Sliding Original Banners */}
        <div className={styles.visualCol}>
          <div className={styles.visualCard}>
            <div className={styles.schoolImg}>
              <div className={styles.sliderContainer}>
                {bannerSlides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide.img}
                    alt={slide.alt}
                    className={`${styles.realSchoolImg} ${idx === currentSlide ? styles.slideActive : styles.slideHidden}`}
                  />
                ))}

                {/* Navigation Arrows */}
                <button className={`${styles.sliderNavBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous Slide">
                  <FaChevronLeft />
                </button>
                <button className={`${styles.sliderNavBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next Slide">
                  <FaChevronRight />
                </button>

                {/* Slide Dots */}
                <div className={styles.dotsRow}>
                  {bannerSlides.map((_, idx) => (
                    <button
                      key={idx}
                      className={`${styles.dot} ${idx === currentSlide ? styles.dotActive : ''}`}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.imgBadgeRow}>
                <span className={styles.imgBadge}>CBSE Affiliated</span>
                <span className={styles.imgBadge}>Est. 2005</span>
              </div>
            </div>

            {/* Floating achievement cards */}
            <div className={`${styles.floatCard} ${styles.fc1}`}>
              <span>🏆</span>
              <div>
                <strong>Best School Award</strong>
                <p>Aligarh District 2024</p>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.fc2}`}>
              <span>📊</span>
              <div>
                <strong>98% Board Results</strong>
                <p>Class X & XII 2024</p>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.fc3}`}>
              <span>🌟</span>
              <div>
                <strong>4.9 / 5 Rating</strong>
                <p>Parent Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statIcon}>{s.icon}</span>
                <strong className={styles.statValue}>{s.value}</strong>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Virtual Tour Modal */}
      {showTour && (
        <div className={styles.tourModalOverlay} onClick={() => setShowTour(false)}>
          <div className={styles.tourModalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowTour(false)} aria-label="Close modal">
              <FaTimes />
            </button>

            <div className={styles.modalHeader}>
              <h2><FaMapMarkerAlt className={styles.modalIcon} /> Excellence Campus Virtual Tour</h2>
              <p>Explore our campus facilities, smart classrooms, and sports grounds in Aligarh</p>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.tourMainView}>
                <img
                  src={tourImages[activeTourIndex].img}
                  alt={tourImages[activeTourIndex].title}
                  className={styles.tourMainImg}
                />
                <div className={styles.tourImgCaption}>
                  <span>{activeTourIndex + 1} / {tourImages.length}</span>
                  <h4>{tourImages[activeTourIndex].title}</h4>
                </div>
              </div>

              <div className={styles.tourThumbs}>
                {tourImages.map((t, idx) => (
                  <button
                    key={idx}
                    className={`${styles.thumbBtn} ${activeTourIndex === idx ? styles.thumbActive : ''}`}
                    onClick={() => setActiveTourIndex(idx)}
                  >
                    <img src={t.img} alt={t.title} />
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.modalFooter}>
              <Link to="/gallery" className="btn btn-outline" onClick={() => setShowTour(false)}>
                View Full Photo Gallery
              </Link>
              <Link to="/contact" className="btn btn-primary" onClick={() => setShowTour(false)}>
                Book Physical Campus Visit
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
