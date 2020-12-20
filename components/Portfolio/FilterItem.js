import styles from '../Portfolio/Filter.module.scss';
import cx from 'classnames';

const FilterItem = ({ itemName, selectedItems }) => {
    return (
        <li
            className={cx(styles['filter-item'], {
                [styles['filter-item__selected']]: selectedItems.includes(
                    itemName
                ),
            })}
        >
            {itemName}
        </li>
    );
};

export default FilterItem;
