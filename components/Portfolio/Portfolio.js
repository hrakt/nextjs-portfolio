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
            <div className={portfolio['portfolio-container__content']}>
                <div className={portfolio['portfolio-container__box']}>
                    <img
                        src={project.picture}
                        alt="Portfolio-1"
                        className={portfolio['portfolio-container__img']}
                    />
                    <div className={portfolio['portfolio-container__buttons']}>
                        <a href="https://gahackathon-95ace.firebaseapp.com/">
                            <Button title="Visit" />
                        </a>
                        <a href="https://github.com/aBurmeseDev/LA-homelessOutreachPortal-hackathon">
                            <Button title="Source" />
                        </a>
                    </div>
                </div>

                {/* <div
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
                        </div> */}
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
