import { useState } from 'react'
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa'
import styles from './FAQSection.module.css'

const faqs = [
  {
    q: 'What is the admission procedure at Excellence International School?',
    a: 'Admissions begin with filling an online or physical enquiry form, followed by an interaction session, campus tour, document submission, and fee payment. Our admissions team guides parents through every step of the process.'
  },
  {
    q: 'Which curriculum is followed at the school?',
    a: 'We follow the CBSE (Central Board of Secondary Education) curriculum from Playgroup to Middle School, focusing on concept-based learning, practical understanding, and holistic child development.'
  },
  {
    q: 'What age group is eligible for Pre-Primary admission?',
    a: 'Children aged 2 to 5 years are eligible for Playgroup, Nursery, LKG, and UKG admissions. Age criteria strictly follow government and CBSE educational guidelines.'
  },
  {
    q: 'Are safe transport facilities available for students across Aligarh?',
    a: 'Yes, we operate a fleet of modern, GPS-tracked school buses with CCTV surveillance cameras and female bus attendants covering all key routes across Aligarh.'
  },
  {
    q: 'What safety and security measures are implemented on campus?',
    a: 'The campus is equipped with 24/7 CCTV camera monitoring, round-the-clock security guards, verified staff, structured discipline policies, and safe entry/exit systems.'
  },
  {
    q: 'How does the school support individual student growth?',
    a: 'With optimum student-teacher ratios, regular doubt-clearing sessions, concept-based teaching, and continuous performance tracking, every child receives personalized care and mentorship.'
  }
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section className={`section ${styles.faqSection}`} id="faqs">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">Got Questions?</span>
          <h2 className="heading-lg">Frequently Asked <span className={styles.highlight}>Questions</span></h2>
          <p className={styles.subtext}>
            Find answers to common questions about admissions, academics, transport, and campus facilities.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className={`${styles.faqCard} ${isOpen ? styles.open : ''} reveal`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <button
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.qText}>
                    <FaQuestionCircle className={styles.qIcon} />
                    {faq.q}
                  </span>
                  <FaChevronDown className={`${styles.arrowIcon} ${isOpen ? styles.rotated : ''}`} />
                </button>

                {isOpen && (
                  <div className={styles.answerBox}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
