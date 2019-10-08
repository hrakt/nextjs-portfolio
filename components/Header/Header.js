import { useEffect, useState } from 'react';

import header from '../Header/Headers.scss';
import SideBarMenu from '../Header/SideNav';
import Scroller from '../common/Scroller';
import Link from './ActiveLink';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeLink, setActive] = useState('');

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    });

    return (
        <div className={header['navbar__container']}>
            <Scroller />
            <div className={header['navbar__item']}>
                <Link href="/">
                    <p className={header['logo']}>Hrak Torousian</p>
                </Link>
            </div>

            {isMobile ? (
                <SideBarMenu />
            ) : (
                <nav className={header['navbar']}>
                    <div className={header['navbar__item']}>
                        <Link href="/about" activeClassName="active">
                            <a className={header['navbar__item-link']}>
                                About Me
                            </a>
                        </Link>
                    </div>
                    <div className={header['navbar__item']}>
                        <Link href="/work" activeClassName="active">
                            <a className={header['navbar__item-link']}>Work</a>
                        </Link>
                    </div>
                    <div className={header['navbar__item']}>
                        <Link href="/contact" activeClassName="active">
                            <a className={header['navbar__item-link']}>
                                Contact
                            </a>
                        </Link>
                    </div>
                </nav>
            )}
        </div>
    );
};
export default Header;
