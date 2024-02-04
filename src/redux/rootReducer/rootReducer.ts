import { combineReducers } from '@reduxjs/toolkit';
import { rentalCarsReducer } from '../slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const carsPersistConfig = {
    key: 'adverts',
    storage,
    whitelist: ['favorites'],
};

const rootReducer = combineReducers({
    rentalCars: persistReducer(carsPersistConfig, rentalCarsReducer),
});

export {rootReducer}

export type RootState = ReturnType<typeof rootReducer>;