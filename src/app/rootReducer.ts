// app/rootReducer.ts
import { reviewsReducer } from '@/features/reviews/reviewsSlice';
import { storeNearestReducer } from '@/features/store/storeNearestSlice';
import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
 storeNearest: storeNearestReducer,
 reviews: reviewsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
