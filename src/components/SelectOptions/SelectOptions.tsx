import { CustomSelect } from '../CustomSelect/CustomSelect';

import s from './SelectOptions.module.scss';

export const SelectOptions = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.headerGroup}>
                <h1>Cat</h1>
                <ul className={s.optionsList}>
                    <li>currencies</li>
                    <li>academic</li>
                    <li>terms</li>
                </ul>
            </div>
            <CustomSelect />
        </div>
    );
};
