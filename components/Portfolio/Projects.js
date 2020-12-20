import projects from '../../utils/projects';
import { motion } from 'framer-motion';

import styles from '../Portfolio/Portfolio.module.scss';
import Link from 'next/link';
import Button from '../common/Button';
import PropTypes from 'prop-types';


let render = 0;

const getProjects = filters => {
    if (filters.length > 0) {
        return projects.filter(item =>
            item.stack.some(r => filters.includes(r))
        );
    }
    return projects;
};

const Projects = ({ filters }) => {
    const filteredProjects = getProjects(filters);
    render++;


    if (filteredProjects.length > 0) {
        return filteredProjects.map(project => {
            const tagString =
                `#` +
                project.stack.toString().replace(new RegExp(',', 'g'), ' #');
            const url = `/projects/${project.id}`;
            return (
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    key={`${render}_${project.id}`}
                    className={styles['portfolio-container__content']}
                >
                    <div
                        className={styles['portfolio-container__box']}
                        href={`/project?title=${project.title}`}
                    >
                        <Link href={url.toString()}>
                            <div>
                                <img
                                    src={project.picture}
                                    alt="Portfolio-1"
                                    className={
                                        styles['portfolio-container__img']
                                    }
                                />

                                <div
                                    className={
                                        styles['portfolio-container__buttons']
                                    }
                                >
                                    <div
                                        className={
                                            styles['portfolio-container__tags']
                                        }
                                    >
                                        {tagString}
                                    </div>
                                    <Button
                                        id={project.id}
                                        type="internal"
                                        title="Learn More"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            );
        });
    } else {
        return (
            <React.Fragment>
                <p className={styles['portfolio-container__error']}>
                    No results were found
                </p>
            </React.Fragment>
        );
    }
};

Projects.propTypes = {
    filters: PropTypes.array,

  
};

export default Projects;
