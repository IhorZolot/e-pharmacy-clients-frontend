import { createSlice } from '@reduxjs/toolkit'
import { StoreState } from './types'
import { fetchStoreAll } from './operations'

const initialState: StoreState = {
  store: [],
  isLoading: false,
  error: null,
}

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStoreAll.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchStoreAll.fulfilled, (state, { payload }) => {
        state.store = payload
        state.isLoading = false
      })
      .addCase(fetchStoreAll.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = state.error = payload?.message || 'Failed to fetch stores';
      })
  },
})

export const storeReducer = storeSlice.reducer