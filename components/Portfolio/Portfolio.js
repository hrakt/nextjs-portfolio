import portfolio from '../Portfolio/Portfolio.scss';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import projects from '../../utils/projects';

const getProjects = () => {
    console.log(projects);
    return projects.map(project => {
        const picture = project.picture;
        return (
            <div
                key={project.id}
                className={portfolio['portfolio-container__section']}
            >
                <div className={portfolio['portfolio-container__box']}>
                    <h6 className={portfolio['portfolio-container__heading3']}>
                        {project.title}
                    </h6>
                    <div className={portfolio['portfolio-container__content']}>
                        <div className={portfolio['portflio-container__left']}>
                            <img
                                src={project.picture}
                                alt="Portfolio-1"
                                className={
                                    portfolio['portfolio-container__img']
                                }
                            />
                        </div>
                        <div
                            className={portfolio['portfolio-container__right']}
                        >
                            <div
                                className={
                                    portfolio[
                                        'portfolio-container__description'
                                    ]
                                }
                            >
                                {project.description}
                            </div>
                            <div
                                className={
                                    portfolio['portfolio-container__buttons']
                                }
                            >
                                <a href="https://gahackathon-95ace.firebaseapp.com/">
                                    <Button title="Visit" />
                                </a>
                                <a href="https://github.com/aBurmeseDev/LA-homelessOutreachPortal-hackathon">
                                    <Button title="Source" />
                                </a>
                            </div>
                        </div>
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
                {getProjects()}
            </div>
        </div>
    );
};

export default Portfolio;
