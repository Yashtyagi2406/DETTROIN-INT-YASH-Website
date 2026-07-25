import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube,
  FaPaperPlane, FaCheckCircle
} from 'react-icons/fa'
import styles from './Contact.module.css'

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Our Address',
    lines: ['Civil Lines, Near MG Road', 'Aligarh, Uttar Pradesh — 202001'],
    color: '#0D3B2E',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone Numbers',
    lines: ['+91-571-123-4567', '+91-571-765-4321'],
    color: '#3b82f6',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Us',
    lines: ['info@excellenceinternationalschool.com', 'admissions@excellenceinternationalschool.com'],
    color: '#f59e0b',
  },
  {
    icon: <FaClock />,
    title: 'Office Hours',
    lines: ['Mon – Sat: 8:00 AM – 4:00 PM', 'Sunday: Closed'],
    color: '#8b5cf6',
  },
]

const faqs = [
  { q: 'What is the admission process?', a: 'Fill out the enquiry form, attend a campus tour, submit required documents, and complete the registration fee payment. Our admissions team will guide you through each step.' },
  { q: 'Which curriculum does the school follow?', a: 'We follow the CBSE (Central Board of Secondary Education) curriculum from Nursery to Class XII, with an emphasis on experiential and holistic learning.' },
  { q: 'Are transport facilities available?', a: 'Yes, we have GPS-tracked school buses covering all major areas of Aligarh. Route details are provided during the admission process.' },
  { q: 'What are the school timings?', a: 'School hours are 8:00 AM to 2:30 PM for all classes. Extra-curricular activities run until 4:00 PM.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', grade: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div ref={ref}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link to="/">Home</Link> <span>/</span> <span>Contact Us</span>
          </div>
          <h1 className={styles.heroTitle}>Get In Touch</h1>
          <p className={styles.heroSub}>
            Have questions about admissions, fees, or school programs? 
            We&apos;re here to help. Reach out to us anytime.
          </p>
        </div>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </section>

      {/* Contact Info Cards */}
      <section className={`section-sm ${styles.infoSection}`}>
        <div className="container">
          <div className={styles.infoGrid}>
            {contactInfo.map((c, i) => (
              <div
                key={i}
                className={`reveal ${styles.infoCard}`}
                style={{ '--card-color': c.color, transitionDelay: `${i * 0.08}s` }}
              >
                <div className={styles.infoIcon} style={{ background: `${c.color}18`, color: c.color }}>
                  {c.icon}
                </div>
                <h4>{c.title}</h4>
                {c.lines.map((line, j) => <p key={j}>{line}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Contact Form */}
            <div className={`reveal-left ${styles.formCol}`}>
              <span className="section-label">Send a Message</span>
              <h2 className="heading-lg">
                Admission <span className={styles.highlight}>Enquiry Form</span>
              </h2>
              <p className={styles.formDesc}>
                Fill out the form below and our admissions team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className={styles.successMsg}>
                  <FaCheckCircle className={styles.successIcon} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out to Excellence International School. Our team will contact you within 24 hours.</p>
                  <button
                    id="contact-send-another-btn"
                    className={`btn btn-outline ${styles.resetBtn}`}
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', grade: '', message: '' }) }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-phone">Phone Number *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-grade">Grade Applying For</label>
                      <select
                        id="contact-grade"
                        name="grade"
                        value={form.grade}
                        onChange={handleChange}
                      >
                        <option value="">Select grade</option>
                        <option value="nursery">Nursery</option>
                        <option value="kg">KG</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i} value={`class-${i + 1}`}>Class {i + 1}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message">Your Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your child, any specific requirements, or questions you have..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className={styles.spinner} />
                    ) : (
                      <><FaPaperPlane /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map + WhatsApp */}
            <div className={`reveal-right ${styles.mapCol}`}>
              <div className={styles.mapWrapper}>
                <iframe
                  title="Excellence International School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56944.37!2d78.0880!3d27.8974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5e8f2a34455%3A0x4d1a0b3d8c7a9f2e!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1720000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/915711234567?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Excellence%20International%20School."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className={styles.waCard}
              >
                <div className={styles.waIcon}><FaWhatsapp /></div>
                <div>
                  <strong>Chat on WhatsApp</strong>
                  <p>Get instant answers to your queries</p>
                </div>
                <span className={styles.waArrow}>›</span>
              </a>

              {/* Socials */}
              <div className={styles.socialRow}>
                <span>Follow us:</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" id="contact-fb" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" id="contact-ig" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" id="contact-yt" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="heading-lg">Frequently Asked <span className={styles.highlight}>Questions</span></h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal ${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <button
                  id={`faq-btn-${i}`}
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={styles.faqA}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/915711234567"
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className={styles.floatingWa}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}
