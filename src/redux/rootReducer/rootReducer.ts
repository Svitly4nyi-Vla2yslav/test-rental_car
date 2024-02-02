import { combineReducers } from '@reduxjs/toolkit';
import { rentalCarsReducer } from '../slice';

const rootReducer = combineReducers({
    rentalCars: rentalCarsReducer,
});

export {rootReducer}

export type RootState = ReturnType<typeof rootReducer>;