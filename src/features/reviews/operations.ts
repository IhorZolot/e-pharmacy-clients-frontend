import { API } from '@/services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorResponse, Review } from './types';
import { AxiosError } from 'axios';


export const fetchReviews = createAsyncThunk<Review[], void, { rejectValue: ErrorResponse }>('reviews/fetch', async (_, { rejectWithValue }) => {
  try {
    const { data } = await API.get('/customer-reviews')
    return data
  } catch (error) {
    const err = error as AxiosError<ErrorResponse>
    return rejectWithValue(
      err.response?.data || { message: 'Something went wrong' }
    )
  }
})
