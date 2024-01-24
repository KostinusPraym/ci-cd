import { createSlice } from '@reduxjs/toolkit';

type CurrenciesType = {
    id: string;
    min_size: string;
    name: string;
};

export interface currenciesState {
    currencies: CurrenciesType[];
    currentCurrency: CurrenciesType;
}

const initialState: currenciesState = {
    currencies: [],
    currentCurrency: {
        id: ',',
        min_size: '',
        name: '',
    },
};

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        setCurrencies(state, action) {
            state.currencies = action.payload;
        },
        setCurrencyById(state, action) {
            state.currentCurrency = action.payload;
        },
    },
});

export default currenciesSlice.reducer;

export const { setCurrencies, setCurrencyById } = currenciesSlice.actions;
