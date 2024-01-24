import { configureStore } from '@reduxjs/toolkit';

import { currenciesApi } from './api/index';
import { currenciesSlice } from './slices/index';

export const store = configureStore({
    reducer: {
        [currenciesApi.reducerPath]: currenciesApi.reducer,
        currencies: currenciesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currenciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
