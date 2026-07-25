import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCalculator, FaCheckCircle, FaArrowRight, FaChild, FaGraduationCap, FaBookReader, FaBaby } from 'react-icons/fa'
import styles from './AdmissionCalculator.module.css'

const gradeData = {
  'playgroup': {
    stage: 'Pre-Primary School',
    ageGroup: '2 - 3 Years',
    icon: <FaBaby />,
    timing: '9:00 AM – 1:00 PM',
    focus: 'Play-based sensory activities, basic motor skills, socialization, and storytelling.',
    highlights: ['Zero Exam Pressure', '1:10 Teacher-Child Ratio', 'Colorful Playrooms', 'Safe Rubberized Playgrounds']
  },
  'nursery': {
    stage: 'Pre-Primary School',
    ageGroup: '3 - 4 Years',
    icon: <FaChild />,
    timing: '9:00 AM – 1:30 PM',
    focus: 'Phonics introduction, shape recognition, basic vocabulary, and creative arts.',
    highlights: ['Phonics & Language Labs', 'Art & Craft Sessions', 'Daily Story Circle', 'Caring Female Staff']
  },
  'lkg-ukg': {
    stage: 'Pre-Primary School',
    ageGroup: '4 - 5.5 Years',
    icon: <FaChild />,
    timing: '8:30 AM – 1:45 PM',
    focus: 'Early reading, number concepts, environmental awareness, and confidence building.',
    highlights: ['Early Literacy & Numeracy', 'Stage Performance Practice', 'Basic Computer Exposure', 'Activity Worksheets']
  },
  'class-1-5': {
    stage: 'Primary School',
    ageGroup: '5.5 - 10.5 Years',
    icon: <FaBookReader />,
    timing: '8:00 AM – 2:15 PM',
    focus: 'CBSE foundation in Math, Science, English, Hindi, EVS, and digital literacy.',
    highlights: ['Smart Board Classrooms', 'Language & Math Clubs', 'Sports & Swimming', 'Experiential Learning']
  },
  'class-6-8': {
    stage: 'Middle School',
    ageGroup: '10.5 - 14 Years',
    icon: <FaGraduationCap />,
    timing: '8:00 AM – 2:30 PM',
    focus: 'Advanced STEM subjects, Physics/Chem/Bio labs, Coding, and Olympiad prep.',
    highlights: ['Dedicated Science & Computer Labs', 'Robotics & STEM Program', 'Inter-House Competitions', 'Public Speaking & Debate']
  }
}

export default function AdmissionCalculator() {
  const [selectedGrade, setSelectedGrade] = useState('nursery')
  const current = gradeData[selectedGrade]

  return (
    <section className={`section ${styles.calcSection}`} id="admission-calculator">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <span className="section-label">Interactive Tool</span>
          <h2 className="heading-lg">Admission &amp; <span className={styles.highlight}>Eligibility Calculator</span></h2>
          <p className={styles.subtext}>
            Select your child's expected class to check age eligibility, academic stage, timings, and key learning focus.
          </p>
        </div>

        <div className={styles.calcCard}>
          {/* Grade Selector Tabs */}
          <div className={styles.selectorBar}>
            <button
              className={`${styles.selBtn} ${selectedGrade === 'playgroup' ? styles.active : ''}`}
              onClick={() => setSelectedGrade('playgroup')}
            >
              Playgroup
            </button>
            <button
              className={`${styles.selBtn} ${selectedGrade === 'nursery' ? styles.active : ''}`}
              onClick={() => setSelectedGrade('nursery')}
            >
              Nursery
            </button>
            <button
              className={`${styles.selBtn} ${selectedGrade === 'lkg-ukg' ? styles.active : ''}`}
              onClick={() => setSelectedGrade('lkg-ukg')}
            >
              LKG / UKG
            </button>
            <button
              className={`${styles.selBtn} ${selectedGrade === 'class-1-5' ? styles.active : ''}`}
              onClick={() => setSelectedGrade('class-1-5')}
            >
              Class I – V
            </button>
            <button
              className={`${styles.selBtn} ${selectedGrade === 'class-6-8' ? styles.active : ''}`}
              onClick={() => setSelectedGrade('class-6-8')}
            >
              Class VI – VIII
            </button>
          </div>

          {/* Result Panel */}
          <div className={styles.resultGrid}>
            <div className={styles.infoCol}>
              <div className={styles.badgeRow}>
                <span className={styles.stageTag}>{current.stage}</span>
                <span className={styles.ageTag}>Age: {current.ageGroup}</span>
                <span className={styles.timeTag}>Timing: {current.timing}</span>
              </div>

              <h3 className={styles.resultTitle}>Learning Focus &amp; Curriculum</h3>
              <p className={styles.resultFocus}>{current.focus}</p>

              <div className={styles.highlightsGrid}>
                {current.highlights.map((h, i) => (
                  <div key={i} className={styles.hlItem}>
                    <FaCheckCircle className={styles.checkIcon} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.ctaCol}>
              <div className={styles.ctaBox}>
                <span className={styles.ctaIcon}>🎓</span>
                <h4>Ready to Join Excellence?</h4>
                <p>Admissions open for 2025–26 session. Limited seats per class to maintain personal attention.</p>
                <Link to="/admissions/enquiry" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Apply For Admission <FaArrowRight />
                </Link>
                <Link to="/contact" className={styles.contactSubLink}>
                  Or Book a Physical Campus Visit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
