import filter from '../Portfolio/Filter.scss';
import cx from 'classnames';

const FilterItem = ({ itemName, selectedItems }) => {
    return (
        <li
            className={cx(filter['filter-item'], {
                [filter['filter-item__selected']]: selectedItems.includes(
                    itemName
                ),
            })}
        >
            {itemName}
        </li>
    );
};

export default FilterItem;
