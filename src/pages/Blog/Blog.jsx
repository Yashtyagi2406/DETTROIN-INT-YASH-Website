import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaUser, FaArrowRight, FaTag } from 'react-icons/fa'
import styles from './Blog.module.css'

const posts = [
  {
    id: 1,
    title: 'How Experiential Learning Shapes Young Minds in Primary Education',
    category: 'Pedagogy & Learning',
    date: 'March 15, 2025',
    author: 'Academic Team',
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Primary-School.png',
    excerpt: 'Discover why moving beyond rote memorization into activity-based learning builds deeper comprehension, problem-solving skills, and lifelong curiosity.'
  },
  {
    id: 2,
    title: '5 Essential Tips for Parents Preparing Children for Pre-Primary Admission',
    category: 'Parenting & Admissions',
    date: 'February 28, 2025',
    author: 'Early Childhood Wing',
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Pre-Primary-School.png',
    excerpt: 'Entering school for the first time is a milestone. Here are actionable ways to build emotional readiness, independence, and social confidence in toddlers.'
  },
  {
    id: 3,
    title: 'The Role of STEM Education and Modern Labs in Middle School',
    category: 'STEM & Technology',
    date: 'February 10, 2025',
    author: 'Science Department',
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Middle.png',
    excerpt: 'An inside look at how hands-on experiments, robotics, and computer literacy equip students for 21st-century careers and scientific thinking.'
  },
  {
    id: 4,
    title: 'Annual Day & Cultural Fest 2024: Celebrating Student Talent',
    category: 'School Events',
    date: 'January 20, 2025',
    author: 'Cultural Committee',
    img: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/3.jpg',
    excerpt: 'Highlights, photos, and award stories from our vibrant annual day celebrations featuring music, drama, dance, and academic honours.'
  }
]

export default function Blog() {
  return (
    <div className={styles.blogPage}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link to="/">Home</Link> <span>/</span> <span>Blog & Updates</span>
          </div>
          <h1 className={styles.heroTitle}>School Blog & Articles</h1>
          <p className={styles.heroSub}>
            Insights on education, parenting, student achievements, and latest news from Excellence International School.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {posts.map(post => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.imgWrapper}>
                  <img src={post.img} alt={post.title} className={styles.postImg} />
                  <span className={styles.catBadge}><FaTag /> {post.category}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span><FaCalendarAlt /> {post.date}</span>
                    <span><FaUser /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog`} className={styles.readMore}>
                    Read Article <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
