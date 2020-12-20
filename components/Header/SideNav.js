import { useState } from 'react';
import styles from '../Header/SideNav.module.scss';
import cx from 'classnames';
import Link from './ActiveLink';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeSide = () => {
        setIsOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={cx(styles['navIcon'], {
                    [styles['navIcon__clicked']]: isOpen,
                })}
            ></div>

            <div
                className={cx(styles['navContainer'], {
                    [styles['navContainer__opened']]: isOpen,
                })}
            >
                <ul className={styles['navContainer__items']}>
                    <Link href="/about">
                        <li onClick={closeSide}>About Me</li>
                    </Link>
                    <Link href="/work">
                        <li onClick={closeSide}>Work</li>
                    </Link>
                    <Link href="/contact">
                        <li onClick={closeSide}>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
