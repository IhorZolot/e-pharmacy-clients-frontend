import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '@/services/api';

import { ErrorResponse, Medicine } from './types';
import { AxiosError } from 'axios';


export const fetchMedicines = createAsyncThunk<Medicine[], void, { rejectValue: ErrorResponse }>('medicine/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get<Medicine[]>('/products')
      return data
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>
      return rejectWithValue(
        err.response?.data || { message: 'Something went wrong' }
      )
    }
  } 
)