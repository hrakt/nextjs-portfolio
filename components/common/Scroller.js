import { useEffect, useState } from "react";
import svgStyle from "../common/Scroller.scss";
// import icon from "../../img/_up_icon.svg";
import cx from "classnames";

const Scroller = () => {
    const [scrollHit, setScrollHit] = useState(false);
    const visibleStyle = svgStyle["icon__visible"];

    useEffect(() => window.addEventListener("scroll", handleScroll));

    const handleScroll = () => {
        if (!(window.scrollY < 250)) {
            setScrollHit(true);
        } else {
            setScrollHit(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div onClick={scrollTop} className={svgStyle["container"]}>
            <img
                // src={icon}
                className={cx(svgStyle["icon"], {
                    [svgStyle["icon__visible"]]: scrollHit
                })}
            ></img>
        </div>
    );
};

export default Scroller;
