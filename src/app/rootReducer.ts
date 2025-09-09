// app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import { reviewsReducer } from '@/features/reviews/reviewsSlice';
import { storeNearestReducer } from '@/features/store/storeNearestSlice';
import { storeReducer } from '@/features/store/storeSlice';

const rootReducer = combineReducers({
 storeNearest: storeNearestReducer,
 reviews: reviewsReducer,
 store: storeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
