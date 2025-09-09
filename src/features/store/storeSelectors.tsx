import { RootState } from '@/app/store'


export const selectStore = (state: RootState) => state.store.store
export const selectStoreLoading = (state: RootState) => state.store.isLoading
export const selectStoreError = (state: RootState) => state.store.error