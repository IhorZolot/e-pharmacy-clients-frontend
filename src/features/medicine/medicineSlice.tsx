import { createSlice } from '@reduxjs/toolkit'
import { MedicineState } from './types'
import { fetchMedicines } from './operations'

const initialState: MedicineState = {
  medicines: [],
  isLoading: false,
  error: null
}

const medicinesSlice = createSlice({
  name: 'medicine',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMedicines.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMedicines.fulfilled, (state, { payload }) => {
        state.medicines = payload
        state.isLoading = false
      })
      .addCase(fetchMedicines.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = state.error = payload?.message || 'Failed to fetch medicines';
      })
  },
})

export const medicinesReducer = medicinesSlice.reducer