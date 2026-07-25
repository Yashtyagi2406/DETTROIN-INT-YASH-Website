import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=917055582117&text=Hello%20Excellence%20International%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Chat on WhatsApp"
      id="floating-whatsapp-btn"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
      <span className={styles.tooltip}>Chat with us on WhatsApp</span>
    </a>
  )
}
