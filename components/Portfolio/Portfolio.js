import portfolio from "../Portfolio/Portfolio.scss";
import Button from "../common/Button";
import Filter from "../Portfolio/Filter";
import { useState } from "react";

import Projects from "./Projects";

const Portfolio = () => {
    const [filters, setFilters] = useState([]);
    return (
        <React.Fragment>
            <Filter selectedItems={filters} setItems={setFilters} />
            {/* <Button type="internal" title="Apply" /> */}
            <div className={portfolio["container-3"]} id="portfolio">
                <div className={portfolio["portfolio-container"]}>
                    <h4 className={portfolio["portfolio-container__heading"]}>
                        Portfolio
                    </h4>
                    <h5 className={portfolio["portfolio-container__heading2"]}>
                        Check out my latest projects
                    </h5>
                    <div className={portfolio["portfolio-container__projects"]}>
                        <Projects filters={filters} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
