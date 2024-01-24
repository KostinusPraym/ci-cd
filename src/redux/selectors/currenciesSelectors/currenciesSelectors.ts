import { RootState } from '../../store';

export const currenciesSelector = (state: RootState) => state.currencies.currencies;
export const currentCurrencySelector = (state: RootState) => state.currencies.currentCurrency;
