import styles from './ReviewCard.module.scss'

const ReviewCard = () => {
  return (
    <div className={styles.reviewCard}>
      <img className={styles.reviewCardImage} src="" alt="" />
      <h3 className={styles.reviewCardTitle}>Maria Tkachuk</h3>
      <p className={styles.reviewCardText}>I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!</p>
    </div>
  )
}

export default ReviewCard