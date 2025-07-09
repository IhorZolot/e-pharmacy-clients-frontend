import { createSlice } from '@reduxjs/toolkit'
import { Review } from './types'
import { fetchReviews } from './operations'

export interface ReviewState {
  reviews: Review[]
  isLoading: boolean
  error: string | null
}
const initialState: ReviewState = {
  reviews: [],
  isLoading: false,
  error: null,
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchReviews.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchReviews.fulfilled, (state, { payload }) => {
        state.reviews = payload
        state.isLoading = false
      })
      .addCase(fetchReviews.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = state.error = payload?.message || 'Failed to fetch stores'
      })
  },
})

export const reviewsReducer = reviewsSlice.reducer