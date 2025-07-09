import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { fetchStoreNearest } from './operations'

const initialState = {
	storeNearest: [],
  isLoading: false,
  error: null,
}

const storeNearestSlice = createSlice({
	name: 'store',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
    .addCase(fetchStoreNearest.fulfilled,(state, {payload}) => {
			state.storeNearest = payload
		})
    .addMatcher(
    	isAnyOf(fetchStoreNearest.pending),
				state => {
					state.isLoading = true
				})
    .addMatcher(
      isAnyOf(fetchStoreNearest.rejected),
        (state, { payload }) => {
          state.isLoading = false
          state.error = payload
      }
    )
	},
})

export const storeNearestReducer = storeNearestSlice.reducer

