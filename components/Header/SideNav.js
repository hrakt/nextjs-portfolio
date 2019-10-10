import { useState } from 'react';
import styles from '../Header/SideNav.scss';
import cx from 'classnames';
import Link from 'next/link';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeSide = () => {
        setIsOpen(false);
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
                    <Link onClick={closeSide} href="/about">
                        <li>About Me</li>
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="/work">
                        <li>Work</li>
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
