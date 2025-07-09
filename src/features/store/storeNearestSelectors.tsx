import { RootState } from '@/app/store';


export const selectStoreNearest = (state: RootState) => state.storeNearest.storeNearest
export const selectStoreNearestLoading = (state: RootState) => state.storeNearest.isLoading
export const selectStoreNearestError = (state: RootState) => state.storeNearest.error