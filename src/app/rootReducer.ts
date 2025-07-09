// app/rootReducer.ts
import { storeNearestReducer } from '@/features/store/storeNearestSlice';
import { combineReducers } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
 storeNearest: storeNearestReducer,
});

export default rootReducer;
