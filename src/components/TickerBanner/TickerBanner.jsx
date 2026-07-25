import styles from './TickerBanner.module.css'

const tickerItems = [
  '🏆 Ranked #1 CBSE School in Aligarh',
  '🎓 20+ Years of Academic Legacy',
  '🌟 98% Board Pass Rate (Class X & XII)',
  '🚌 100% Safe GPS-Tracked School Bus Fleet',
  '🤖 Concept-Based STEM & Smart Classrooms',
  '🛡️ 24/7 CCTV Monitored Secure Campus',
  '⚽ Comprehensive Sports & Extra-Curriculars'
]

export default function TickerBanner() {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.tickerTrack}>
        {/* Double the list for infinite seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className={styles.tickerItem}>
            <span>{item}</span>
            <span className={styles.bullet}>•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
