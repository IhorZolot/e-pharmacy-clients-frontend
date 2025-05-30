import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

// reducers
// import userReducer from '@/features/user/userSlice'
// import cartReducer from '@/features/cart/cartSlice'

const rootReducer = combineReducers({
  // user: userReducer,
  // cart: cartReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], 
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
