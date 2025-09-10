export interface Medicine {
  _id: number
  photo?: string | null
  name: string
  suppliers: string
  stock: string
  price: number
  category: string
  description?: string | null
}


export interface ErrorResponse {
  message: string
}
export interface MedicineState {
  medicines: Medicine[]
  isLoading: boolean
  error: string | null
}