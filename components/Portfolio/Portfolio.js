import portfolio from '../Portfolio/Portfolio.scss';
import Button from '../common/Button';
import projects from '../../utils/projects';

const getProjects = () => {
    return projects.map(project => {
        return (
            <div
                key={project.id}
                className={portfolio['portfolio-container__content']}
            >
                <div className={portfolio['portfolio-container__box']}>
                    <img
                        src={project.picture}
                        alt="Portfolio-1"
                        className={portfolio['portfolio-container__img']}
                    />
                    <div className={portfolio['portfolio-container__buttons']}>
                        <Button
                            id={project.id}
                            type="internal"
                            title="Learn More"
                            href={`/project?title=${project.title}`}
                        />
                    </div>
                </div>
            </div>
        );
    });
};

const Portfolio = () => {
    return (
        <div className={portfolio['container-3']} id="portfolio">
            <div className={portfolio['portfolio-container']}>
                <h4 className={portfolio['portfolio-container__heading']}>
                    Portfolio
                </h4>
                <h5 className={portfolio['portfolio-container__heading2']}>
                    Check out my latest projects
                </h5>
                <div className={portfolio['portfolio-container__projects']}>
                    {getProjects()}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
