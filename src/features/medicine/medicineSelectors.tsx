import { RootState } from '@/app/store'

export const selectMedicine = (state: RootState) => state.medicines.medicines
export const selectMedicineLoading = (state: RootState) => state.medicines.isLoading
export const selectMedicineError = (state: RootState) => state.medicines.error