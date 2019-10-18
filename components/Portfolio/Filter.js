import filter from '../Portfolio/Filter.scss';
import FilterItem from '../Portfolio/FilterItem';

import cx from 'classnames';
import { useState } from 'react';

const useForceUpdate = () => useState()[1];

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
            ],
            selectedItems: [],
        };
    }

    handleClick = e => {
        const selectedArr = [...this.state.selectedItems];
        const selectedIndex = selectedArr.indexOf(e.target.innerText);
        e.target.tagName == 'LI'
            ? !this.state.selectedItems.includes(e.target.innerText)
                ? selectedArr.push(e.target.innerText) &&
                  this.setState({
                      selectedItems: [...selectedArr],
                  })
                : selectedArr.splice(selectedIndex, 1) &&
                  this.setState({ selectedItems: [...selectedArr] })
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
                                className={cx(filter['filter-item'], {
                                    [filter[
                                        'filter-item__selected'
                                    ]]: this.state.selectedItems.includes(item),
                                })}
                            >
                                {item}
                            </li>
                        );
                    })}
                    {/* {filterItems.map(item => {
                    return (
                        <FilterItem
                            itemName={item}
                            selectedItems={selectedItems}
                        />
                    );
                })} */}
                </ul>
            </div>
        );
    }
}

export default Filter;
