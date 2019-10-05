import portfolio from "../Portfolio/Portfolio.scss";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
var data = require("../../resources/projects.js");

const getJson = () => {
    console.log("being calleds");
    data.map(project => console.log(project[0]));
};

const Portfolio = () => {
    useEffect(() => getJson());
    return (
        <div className={portfolio["container-3"]} id="portfolio">
            <div className={portfolio["portfolio-container"]}>
                <h4 className={portfolio["portfolio-container__heading"]}>
                    Portfolio
                </h4>
                <h5 className={portfolio["portfolio-container__heading2"]}>
                    Check out my latest projects
                </h5>
                <div className={portfolio["portfolio-container__section"]}>
                    <div className={portfolio["portfolio-container__box"]}>
                        <h6
                            className={
                                portfolio["portfolio-container__heading3"]
                            }
                        >
                            LA-HOP
                        </h6>
                        <div
                            className={
                                portfolio["portfolio-container__content"]
                            }
                        >
                            <div
                                className={
                                    portfolio["portflio-container__left"]
                                }
                            >
                                <img
                                    src={require("../../img/LA-HOP.png")}
                                    alt="Portfolio-1"
                                    className={
                                        portfolio["portfolio-container__img"]
                                    }
                                />
                            </div>
                            <div
                                className={
                                    portfolio["portfolio-container__right"]
                                }
                            >
                                <div
                                    className={
                                        portfolio[
                                            "portfolio-container__description"
                                        ]
                                    }
                                >
                                    The initiative behind this project was to
                                    create a product that helps one of the
                                    biggest issues the City of Los Angeles is
                                    facing currently. During a 3 day hackathon a
                                    group of 6 people(3 Web Dev/3 UX/UI) were
                                    tasked to redesign and create a better
                                    solution for the LA-HOP system.
                                </div>
                                <div
                                    className={
                                        portfolio[
                                            "portfolio-container__buttons"
                                        ]
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

                <div className={portfolio["portfolio-container__section"]}>
                    <div className={portfolio["portfolio-container__box"]}>
                        <h6
                            className={
                                portfolio["portfolio-container__heading3"]
                            }
                        >
                            Event Scheduling App
                        </h6>
                        <div
                            className={
                                portfolio["portfolio-container__content"]
                            }
                        >
                            <div
                                className={
                                    portfolio["portflio-container__left"]
                                }
                            >
                                <img
                                    src={require("../../img/Event.png")}
                                    alt="Portfolio-1"
                                    className={
                                        portfolio["portfolio-container__img"]
                                    }
                                />
                            </div>

                            <div
                                className={
                                    portfolio["portfolio-container__right"]
                                }
                            >
                                <div
                                    className={
                                        portfolio[
                                            "portfolio-container__description"
                                        ]
                                    }
                                >
                                    The second project at GA was a new but
                                    challenging start to my journey. This was
                                    when team of 3 was tasked to create full
                                    stack MERN application. Our group came up
                                    with an idea of creating a web application
                                    where a user will be able to create, add
                                    update upcoming events such as music
                                    festivals, etc.
                                </div>
                                <div
                                    className={
                                        portfolio[
                                            "portfolio-container__buttons"
                                        ]
                                    }
                                >
                                    <a href="https://still-taiga-70572.herokuapp.com/">
                                        <Button title="Visit" />
                                    </a>
                                    <a href="https://github.com/hrakt/groupProject">
                                        <Button title="Source" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={portfolio["portfolio-container__section"]}>
                    <div className={portfolio["portfolio-container__box"]}>
                        <h6
                            className={
                                portfolio["portfolio-container__heading3"]
                            }
                        >
                            Travel Itinerary with Amadeus API
                        </h6>
                        <div
                            className={
                                portfolio["portfolio-container__content"]
                            }
                        >
                            <div
                                className={
                                    portfolio["portflio-container__left"]
                                }
                            >
                                <img
                                    src={require("../../img/Planer.png")}
                                    alt="Portfolio-1"
                                    className={
                                        portfolio["portfolio-container__img"]
                                    }
                                />
                            </div>
                            <div
                                className={
                                    portfolio["portfolio-container__right"]
                                }
                            >
                                <div
                                    className={
                                        portfolio[
                                            "portfolio-container__description"
                                        ]
                                    }
                                >
                                    It was the third project that after creating
                                    a full stack application I was tasked to not
                                    only consume an application implementing
                                    full CRUD functionality but also implement a
                                    third party API. After days of research I
                                    came upon one of the greatest travel
                                    information API. But finding the suitable
                                    API was only the beggining of this
                                    challenge.
                                </div>
                                <div
                                    className={
                                        portfolio[
                                            "portfolio-container__buttons"
                                        ]
                                    }
                                >
                                    <a href="https://thawing-island-39695.herokuapp.com">
                                        <Button title="Visit" />
                                    </a>
                                    <a href="https://github.com/hrakt/project3-react-backend">
                                        <Button title="Source" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={portfolio["portfolio-container__section"]}>
                    <div className={portfolio["portfolio-container__box"]}>
                        <h6
                            className={
                                portfolio["portfolio-container__heading3"]
                            }
                        >
                            Photo Portal App
                        </h6>
                        <div
                            className={
                                portfolio["portfolio-container__content"]
                            }
                        >
                            <div
                                className={
                                    portfolio["portflio-container__left"]
                                }
                            >
                                <img
                                    src={require("../../img/PhotoPort.png")}
                                    alt="Portfolio-1"
                                    className={
                                        portfolio["portfolio-container__img"]
                                    }
                                />
                            </div>
                            <div
                                className={
                                    portfolio["portfolio-container__right"]
                                }
                            >
                                <div
                                    className={
                                        portfolio[
                                            "portfolio-container__description"
                                        ]
                                    }
                                >
                                    For the next project I was introduced to
                                    switching from Express.js and Node.js to
                                    Python and Flask for back-end. For the front
                                    end we decided to stick with React and in
                                    order to speed up the design portion of the
                                    project we implemented React-Boostrap to
                                    crunch the one week deadline of learning a
                                    new programming language and framework and
                                    delivering a MVP.{" "}
                                </div>
                                <div
                                    className={
                                        portfolio[
                                            "portfolio-container__buttons"
                                        ]
                                    }
                                >
                                    <a href="http://immense-plains-23468.herokuapp.com/">
                                        <Button title="Visit" />
                                    </a>
                                    <a href="https://github.com/rbhidalgo/photo-port-react">
                                        <Button title="Source" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
