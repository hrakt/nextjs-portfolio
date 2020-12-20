import { useEffect } from 'react';
import Button from '../common/Button';
import styles from '../Portfolio/ProjectPage.module.scss';

const ProjectPage = ({ project }) => {
    useEffect(() => scrollToTop());

    const scrollToTop = () => {
        console.log('being called');
    };
    return (
        <div className={styles['projectPage__container']}>
            <h1 className={styles['projectPage__heading']}>{project.title}</h1>
            <img className={styles['projectPage__img']} src={project.picture} />
            <p className={styles['projectPage__textBox']}>
                {project.description}
            </p>
            <div className={styles['projectPage__buttons']}>
                <Button type="external" href={project.visit} title="Visit" />
                <Button type="external" href={project.source} title="Source" />
            </div>
        </div>
    );
};

export default ProjectPage;
