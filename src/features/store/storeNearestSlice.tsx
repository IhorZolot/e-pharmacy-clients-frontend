import { createSlice } from '@reduxjs/toolkit'
import { fetchStoreNearest } from './operations'
import { Store } from './types'

export interface StoreNearestState {
  storeNearest: Store[]
  isLoading: boolean
  error: string | null
}
const initialState: StoreNearestState = {
  storeNearest: [],
  isLoading: false,
  error: null,
}

const storeNearestSlice = createSlice({
	name: 'storeNearest',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchStoreNearest.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchStoreNearest.fulfilled, (state, { payload }) => {
				state.storeNearest = payload
				state.isLoading = false
			})
			.addCase(fetchStoreNearest.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = state.error = payload?.message || 'Failed to fetch stores';
			})
	},
})

export const storeNearestReducer = storeNearestSlice.reducer
