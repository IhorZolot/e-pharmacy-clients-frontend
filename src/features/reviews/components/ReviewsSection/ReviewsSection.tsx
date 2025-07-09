import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import ReviewCard from './ReviewCard'
import styles from './ReviewsSection.module.scss'
import { selectReviews, selectReviewsError, selectReviewsLoading } from '../../reviewsSelectors'
import { useEffect } from 'react'
import { fetchReviews } from '../../operations'
const ReviewsSection = () => {
  const dispatch = useAppDispatch()
  const reviews = useAppSelector(selectReviews)
  const isLoading = useAppSelector(selectReviewsLoading)
  const error = useAppSelector(selectReviewsError)

  useEffect(() => {
    dispatch(fetchReviews())
  }, [dispatch])

if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    console.log(error)
  }

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsSectionHeader}>
        <h1 className={styles.reviewsSectionTitle}>Reviews</h1>
      <p className={styles.reviewsSectionText}>Search for Medicine, Filter by your location</p>
      </div>
      {reviews.map(review => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </section>
  )
}

export default ReviewsSection