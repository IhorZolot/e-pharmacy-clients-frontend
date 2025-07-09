import ReviewCard from './ReviewCard'
import styles from './ReviewsSection.module.scss'
const ReviewsSection = () => {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsSectionHeader}>
        <h1 className={styles.reviewsSectionTitle}>Reviews</h1>
      <p className={styles.reviewsSectionText}>Search for Medicine, Filter by your location</p>
      </div>
      <ReviewCard />
    </section>
  )
}

export default ReviewsSection