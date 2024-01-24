import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Currency } from '../../components/CustomSelect';

const BASE_URL = 'https://api.coinbase.com/v2/currencies';

interface CurrencyResponse {
    data: Currency[];
}

export const currenciesApi = createApi({
    reducerPath: 'currenciesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getCurrencies: builder.query<CurrencyResponse, void>({
            query: () => `${BASE_URL}`,
        }),
    }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
