import { useState } from "react";
import styles from "../Header/SideNav.scss";
import cx from "classnames";

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={styles["navIcon"]}
            >
                <div></div>
            </div>

            <div
                className={cx(styles["navContainer"], {
                    [styles["navContainer__opened"]]: isOpen
                })}
            >
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
