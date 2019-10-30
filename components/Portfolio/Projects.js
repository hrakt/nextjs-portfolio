import projects from '../../utils/projects';
import { motion } from 'framer-motion';
import portfolio from '../Portfolio/Portfolio.scss';
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
        const tagsString = project.toString().replace(/[,]/g, ' ');
        return (
            <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                key={`${render}_${project.id}`}
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
                                <div
                                    className={
                                        portfolio['portfolio-container__tags']
                                    }
                                >
                                    {project.stack
                                        .toString(' ')
                                        .replace(',', ' ')}
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
