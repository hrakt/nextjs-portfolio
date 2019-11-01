import FilterItem from '../Portfolio/FilterItem';
import cx from 'classnames';
import { useState } from 'react';
import styles from './Filter.scss';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterItems: [
                'React',
                'HTML5',
                'CSS3',
                'Redux',
                'SASS',
                'Javascript',
                'Express',
                'Node.JS',
                'Firebase',
            ],
        };
    }

    handleClick = e => {
        const selectedArr = [...this.props.selectedItems];
        const selectedIndex = selectedArr.indexOf(e.target.innerText);
        const tag = e.target.innerText.split('\n')[0];
        console.log(tag);
        e.target.tagName == 'LI'
            ? !this.props.selectedItems.includes(tag)
                ? selectedArr.push(tag) && this.props.setItems([...selectedArr])
                : selectedArr.splice(selectedIndex, 1) &&
                  this.props.setItems([...selectedArr])
            : null;
    };

    render() {
        return (
            <div className={styles['filter-container']}>
                <h1 className={styles['filter-container__header']}>
                    My current technology stack is
                </h1>
                <div className={styles['filter-container__items']}>
                    <ul className={styles['filter-container__list']}>
                        {this.state.filterItems.map(item => {
                            return (
                                <li
                                    onClick={this.handleClick}
                                    className={cx(styles['filter-item'], {
                                        [styles[
                                            'filter-item__selected'
                                        ]]: this.props.selectedItems.includes(
                                            item
                                        ),
                                    })}
                                >
                                    {item}
                                    <span
                                        className={
                                            styles['filter-item__tooltip']
                                        }
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
    }
}

export default Filter;
