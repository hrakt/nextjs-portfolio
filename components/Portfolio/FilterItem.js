import styles from '../Portfolio/Filter.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

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

Projects.propTypes = {
    itemName: PropTypes.string,
    selectedItems: PropTypes.array,
};
Projects.defaultProps = {
    itemName: "",
    selectedItems: [],
};

export default FilterItem;
