import { RootState } from '@/app/store';

export const selectReviews = (state: RootState) => state.reviews.reviews
export const selectReviewsLoading = (state: RootState) => state.reviews.isLoading
export const selectReviewsError = (state: RootState) => state.reviews.error