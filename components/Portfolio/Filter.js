import FilterItem from '../Portfolio/FilterItem';
import cx from 'classnames';
import { useState } from 'react';
import styles from './Filter.scss';

const Filter = ({ selectedItems, setItems }) => {
    const [filterItems, setFitlerItems] = useState([
        'React',
        'HTML5',
        'CSS3',
        'Redux',
        'SASS',
        'Javascript',
        'Express',
        'Node.JS',
        'Firebase',
    ]);

    const handleClick = e => {
        const selectedArr = [...selectedItems];
        const selectedIndex = selectedArr.indexOf(e.target.innerText);
        const tag = e.target.innerText.split('\n')[0];
        console.log(tag);
        e.target.tagName == 'LI'
            ? !selectedItems.includes(tag)
                ? selectedArr.push(tag) && setItems([...selectedArr])
                : selectedArr.splice(selectedIndex, 1) &&
                  setItems([...selectedArr])
            : null;
    };

    return (
        <div className={styles['filter-container']}>
            <h1 className={styles['filter-container__header']}>
                My current technology stack is
            </h1>
            <div className={styles['filter-container__items']}>
                <ul className={styles['filter-container__list']}>
                    {filterItems.map(item => {
                        return (
                            <li
                                onClick={handleClick}
                                className={cx(styles['filter-item'], {
                                    [styles[
                                        'filter-item__selected'
                                    ]]: selectedItems.includes(item),
                                })}
                            >
                                {item}
                                <span
                                    className={styles['filter-item__tooltip']}
                                >
                                    Click to filter
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Filter;
