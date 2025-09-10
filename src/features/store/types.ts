
export interface Store {
  _id: string
  name: string
  address: string
  city: string
  phone: string
  rating: number
  work?: string
}

export type ErrorResponse = {
  message: string;
};
export interface StoreNearestState {
  storeNearest: Store[]
  isLoading: boolean
  error: string | null
}
export interface StoreState {
  store: Store[]
  isLoading: boolean
  error: string | null
}