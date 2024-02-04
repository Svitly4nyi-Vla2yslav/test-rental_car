import { rootReducer } from './rootReducer';

import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
    reducer: rootReducer,

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;