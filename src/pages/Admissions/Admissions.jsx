import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaClipboardList, FaFileAlt, FaCheckCircle, FaPaperPlane } from 'react-icons/fa'
import styles from './Admissions.module.css'

export default function Admissions() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('enquiry')) {
      const el = document.getElementById('enquiry-form')
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname])

  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    grade: 'Playgroup / Nursery',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={styles.admissionsPage}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link to="/">Home</Link> <span>/</span> <span>Admissions</span>
          </div>
          <h1 className={styles.heroTitle}>Admissions 2025–26</h1>
          <p className={styles.heroSub}>
            Join Excellence International School, Aligarh. Discover our step-by-step admission procedure or fill out an instant enquiry form below.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left: Procedure */}
            <div className={styles.procedureCol}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionBadge}><FaClipboardList /> Step-by-Step Guide</span>
                <h2>Admission Procedure</h2>
                <p>Simple and transparent admission process for all grades.</p>
              </div>

              <div className={styles.stepsList}>
                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>1</span>
                  <div className={styles.stepInfo}>
                    <h4>Online / Offline Registration</h4>
                    <p>Submit the Enquiry Form or visit the school campus to collect the prospectus and registration form.</p>
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>2</span>
                  <div className={styles.stepInfo}>
                    <h4>Interaction & Assessment</h4>
                    <p>An informal interaction for Pre-Primary applicants; a basic skill assessment test for Classes I to VIII.</p>
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>3</span>
                  <div className={styles.stepInfo}>
                    <h4>Document Verification</h4>
                    <p>Submit Birth Certificate, Transfer Certificate (TC), Passport Photos, and Previous Report Card.</p>
                  </div>
                </div>

                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>4</span>
                  <div className={styles.stepInfo}>
                    <h4>Confirmation & Fee Payment</h4>
                    <p>Pay admission fees to secure the child's seat. Receive welcome kit and uniform/books details.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className={styles.formCol} id="enquiry-form">
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <FaFileAlt className={styles.formIcon} />
                  <h3>Admission Enquiry Form</h3>
                  <p>Fill in your details and our admission counselor will call you back within 24 hours.</p>
                </div>

                {submitted ? (
                  <div className={styles.successBox}>
                    <FaCheckCircle className={styles.successIcon} />
                    <h4>Enquiry Submitted Successfully!</h4>
                    <p>Thank you, <strong>{formData.parentName}</strong>. Our admissions team will get in touch with you shortly at {formData.phone}.</p>
                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label>Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.parentName}
                        onChange={e => setFormData({...formData, parentName: e.target.value})}
                      />
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 Mobile number"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Child's Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Child's full name"
                          value={formData.childName}
                          onChange={e => setFormData({...formData, childName: e.target.value})}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Grade Seeking Admission *</label>
                        <select
                          value={formData.grade}
                          onChange={e => setFormData({...formData, grade: e.target.value})}
                        >
                          <option>Playgroup / Nursery</option>
                          <option>LKG / UKG</option>
                          <option>Primary (Class I - V)</option>
                          <option>Middle (Class VI - VIII)</option>
                          <option>Daycare Program</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Any Specific Questions or Requirements?</label>
                      <textarea
                        rows="3"
                        placeholder="Mention any queries about transport, fees, curriculum etc."
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                      <FaPaperPlane /> Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
