import filter from '../Portfolio/Filter.scss';
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
        e.target.tagName == 'LI'
            ? !this.props.selectedItems.includes(e.target.innerText)
                ? selectedArr.push(e.target.innerText) &&
                  this.props.setItems([...selectedArr])
                : selectedArr.splice(selectedIndex, 1) &&
                  this.props.setItems([...selectedArr])
            : null;
    };

    render() {
        return (
            <div className={filter['filter-container']}>
                <h1 className={filter['filter-container__header']}>
                    My current technology stack is
                </h1>
                <ul
                    className={filter['filter-container__list']}
                    onClick={this.handleClick}
                >
                    {this.state.filterItems.map(item => {
                        return (
                            <li
                                className={cx(styles['filter-item'], {
                                    [styles[
                                        'filter-item__selected'
                                    ]]: this.props.selectedItems.includes(item),
                                })}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Filter;
