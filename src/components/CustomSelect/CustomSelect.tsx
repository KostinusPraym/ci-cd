import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyItem } from '../CurrencyItem/CurrencyItem';
import {
    currenciesSelector,
    currentCurrencySelector,
} from '../../redux/selectors/currenciesSelectors/currenciesSelectors';
import { setCurrencyById } from '../../redux/slices';

import s from './styles.module.scss';
import ArrowDown from '../../assets/chevron-down.svg';
import { useOutsideClick } from '../../hooks/useClickOutside';

export type Currency = {
    id: string;
    name: string;
    min_size: string;
};

export const CustomSelect = () => {
    const dispatch = useDispatch();
    const currencies = useSelector(currenciesSelector);
    const { id } = useSelector(currentCurrencySelector);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dropdownRef = useOutsideClick(() => {
        setIsOpen(false);
    });

    const handleNaming = (currency: Currency) => {
        dispatch(setCurrencyById(currency));
        setIsOpen(false);
    };

    return (
        <div className={s.select}>
            <button onClick={toggleDropdown} className={s.selectButton}>
                {id}
                <ArrowDown />
            </button>
            {isOpen && (
                <ul ref={dropdownRef} className={s.list}>
                    {currencies.map((currency: Currency) => {
                        return (
                            <CurrencyItem
                                key={currency.id}
                                setCurrency={() => handleNaming(currency)}
                                id={currency.id}
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
