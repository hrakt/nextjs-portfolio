import projects from '../../utils/projects';
import { motion } from 'framer-motion';
import styles from '../Portfolio/Portfolio.scss';
import Link from 'next/link';
import Button from '../common/Button';

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
    return filteredProjects.map(project => {
        const tagString =
            `#` + project.stack.toString().replace(new RegExp(',', 'g'), ' #');

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
                    <Link href={`/projects/${project.id}`}>
                        <div>
                            <img
                                src={project.picture}
                                alt="Portfolio-1"
                                className={styles['portfolio-container__img']}
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
};

export default Projects;
