import styles from '../Portfolio/Portfolio.scss';
import Filter from '../Portfolio/Filter';
import { useState } from 'react';

import Projects from './Projects';

const Portfolio = () => {
    const [filters, setFilters] = useState([]);
    return (
        <React.Fragment>
            <Filter selectedItems={filters} setItems={setFilters} />
            <div className={styles['container-3']} id="portfolio">
                <div className={styles['portfolio-container']}>
                    <h4 className={styles['portfolio-container__heading']}>
                        Portfolio
                    </h4>
                    <h5 className={styles['portfolio-container__heading2']}>
                        Check out my latest projects
                    </h5>
                    <div className={styles['portfolio-container__projects']}>
                        <Projects filters={filters} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
