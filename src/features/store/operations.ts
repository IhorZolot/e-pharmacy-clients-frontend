import { API } from '@/services/api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchStoreNearest = createAsyncThunk('storeNearest/fetch', async (_, { rejectWithValue }) => {
	try {
		const { data } = await API.get('/stores/nearest')
		return data
	} catch (error) {
		return rejectWithValue(error)
	}
})
