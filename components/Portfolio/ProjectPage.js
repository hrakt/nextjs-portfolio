import Button from '../common/Button';

const ProjectPage = ({ project }) => {
    console.log(project.title);
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={project.picture}></img>
            <div>
                <Button href={project.visit} title="Visit" />
                <Button href={project.source} title="Source" />
            </div>
        </div>
    );
};

export default ProjectPage;
