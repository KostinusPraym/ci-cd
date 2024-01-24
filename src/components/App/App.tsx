import { useEffect } from 'react';
import { useGetCurrenciesQuery } from '../../redux/api';
import { SelectOptions } from '../SelectOptions';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrencies, setCurrencyById } from '../../redux/slices';
import { currentCurrencySelector } from '../../redux/selectors/currenciesSelectors/currenciesSelectors';

import kitten from '../../assets/Kitten.png';
import s from './styles.module.scss';

export const App = () => {
    const dispatch = useDispatch();
    const currentCurrency = useSelector(currentCurrencySelector);
    const { data, error, isLoading } = useGetCurrenciesQuery();

    useEffect(() => {
        if (!data) return;
        const { data: currencies } = data;
        dispatch(setCurrencies(currencies));
        dispatch(setCurrencyById(currencies[0]));
    }, [data]);

    if (error) {
        return <p>Error</p>;
    }

    if (isLoading) {
        return <p>Loading</p>;
    }

    return (
        <div className={s.content}>
            <SelectOptions />
            <footer className={s.currencyNameWrapper}>
                <span className={s.currencyName}>{currentCurrency.name}</span>
                <img className={s.kittenPng} src={kitten} alt="kitten" />
            </footer>
        </div>
    );
};
