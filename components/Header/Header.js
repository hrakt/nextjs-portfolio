import { useEffect, useState } from 'react';

import header from '../Header/Headers.scss';
import SideBarMenu from '../Header/SideNav';
import Scroller from '../common/Scroller';
import Link from './ActiveLink';

const Header = () => {
    return (
        <div className={header['navbar__container']}>
            <Scroller />
            <div className={header['navbar__item']}>
                <Link href="/">
                    <p className={header['logo']}>Hrak Torousian</p>
                </Link>
            </div>

            <SideBarMenu />
            <nav className={header['navbar']}>
                <div className={header['navbar__item']}>
                    <Link href="/about" activeClassName="active">
                        <a className={header['navbar__item-link']}>About Me</a>
                    </Link>
                </div>
                <div className={header['navbar__item']}>
                    <Link href="/work" activeClassName="active">
                        <a className={header['navbar__item-link']}>Work</a>
                    </Link>
                </div>
                <div className={header['navbar__item']}>
                    <Link href="/contact" activeClassName="active">
                        <a className={header['navbar__item-link']}>Contact</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
};
export default Header;
