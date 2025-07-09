import { FC } from 'react'
import { Review } from '../../types'
import styles from './ReviewCard.module.scss'

interface ReviewCardProps {
  review: Review
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const { name, testimonial, photo } = review
  return (
    <div className={styles.reviewCard}>
      <img className={styles.reviewCardImage} src={photo} alt="Card image" />
      <h3 className={styles.reviewCardTitle}>{name}</h3>
      <p className={styles.reviewCardText}>{testimonial}</p>
    </div>
  )
}

export default ReviewCard