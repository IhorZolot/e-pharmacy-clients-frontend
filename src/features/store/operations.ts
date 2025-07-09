import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { ErrorResponse, Store } from './types'
import { API } from '@/services/api'

export const fetchStoreNearest = createAsyncThunk<Store[], void, { rejectValue: ErrorResponse }>(
  'storeNearest/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get<Store[]>('/stores/nearest')
      return data
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>
      return rejectWithValue(
        err.response?.data || { message: 'Something went wrong' }
      )
    }
  }
)
