import { useState } from "react";
import styles from "../Header/SideNav.scss";
import cx from "classnames";

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scroll = location => {
        setIsOpen(false);
        window.scrollTo(`#${location}`);
    };
    return (
        <div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={cx(styles["navIcon"], {
                    [styles["navIcon__clicked"]]: isOpen
                })}
            >
                <div></div>
            </div>

            <div
                className={cx(styles["navContainer"], {
                    [styles["navContainer__opened"]]: isOpen
                })}
            >
                <ul className={styles["navContainer__items"]}>
                    <li onClick={scroll}>About Me</li>
                    <li href="#work">Work</li>
                    <li href="#contact">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
