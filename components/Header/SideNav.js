import { useState } from "react";
import styles from "../Header/SideNav.scss";
import cx from "classnames";
import Link from "next/link";

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <Link href="/">
                        <li>About Me</li>
                    </Link>
                    <Link href="/work">
                        <li>Work</li>
                    </Link>
                    <Link href="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
