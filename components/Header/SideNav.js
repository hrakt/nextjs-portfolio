import { useState } from "react";
import styles from "../Header/SideNav.scss";

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
            {isOpen ? (
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
            ) : null}
        </div>
    );
};

export default SideNav;
