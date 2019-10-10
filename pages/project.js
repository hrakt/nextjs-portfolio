import { useRouter } from 'next/router';
import Layout from '../layouts/main';
import ProjectPage from '../components/Portfolio/ProjectPage';
import projects from '../utils/projects';

const Project = () => {
    const router = useRouter();
    const project = projects.find(element => {
        return element.title == router.query.title;
    });

    return <Layout>{project && <ProjectPage project={project} />}</Layout>;
};

export default Project;
