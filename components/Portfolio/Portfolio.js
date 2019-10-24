import portfolio from '../Portfolio/Portfolio.scss';
import Button from '../common/Button';
import projects from '../../utils/projects';
import Link from 'next/link';
import Filter from '../Portfolio/Filter';
import { useState } from 'react';

const getProjects = filters => {
    if (filters.length > 0) {
        return projects.filter(item =>
            item.stack.some(r => filters.includes(r))
        );
    }
    return projects;
};

const returnProjects = filteredProjects => {
    return filteredProjects.map(project => {
        return (
            <div
                key={project.id}
                className={portfolio['portfolio-container__content']}
            >
                <div
                    className={portfolio['portfolio-container__box']}
                    href={`/project?title=${project.title}`}
                >
                    <Link href={`/projects/${project.id}`}>
                        <div>
                            <img
                                src={project.picture}
                                alt="Portfolio-1"
                                className={
                                    portfolio['portfolio-container__img']
                                }
                            />
                            <img
                                src="../../public/_up_icon.svg"
                                className={
                                    portfolio['portfolio-container__cursorImg']
                                }
                            />

                            <div
                                className={
                                    portfolio['portfolio-container__box']
                                }
                            ></div>

                            <div
                                className={
                                    portfolio['portfolio-container__buttons']
                                }
                            >
                                <Button
                                    id={project.id}
                                    type="internal"
                                    title="Learn More"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    });
};

const Portfolio = () => {
    const [filters, setFilters] = useState([]);
    return (
        <React.Fragment>
            <Filter selectedItems={filters} setItems={setFilters} />
            <div className={portfolio['container-3']} id="portfolio">
                <div className={portfolio['portfolio-container']}>
                    <h4 className={portfolio['portfolio-container__heading']}>
                        Portfolio
                    </h4>
                    <h5 className={portfolio['portfolio-container__heading2']}>
                        Check out my latest projects
                    </h5>
                    <div className={portfolio['portfolio-container__projects']}>
                        {returnProjects(getProjects(filters))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
