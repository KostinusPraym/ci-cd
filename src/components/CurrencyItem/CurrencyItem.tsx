import s from './CurrencyItem.module.scss';

interface CurrencyItemProps {
    id: string;
    setCurrency: () => void;
}

export const CurrencyItem = ({ id, setCurrency }: CurrencyItemProps) => {
    return (
        <li onClick={setCurrency} className={s.currency} key={id}>
            {id}
        </li>
    );
};
