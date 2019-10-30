import { useEffect, useState } from 'react';

import header from '../Header/Headers.scss';
import SideBarMenu from '../Header/SideNav';
import Scroller from '../common/Scroller';
import Link from './ActiveLink';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.div
            animate={{ height: [0, 90] }}
            className={header['navbar__container']}
            transition={{ duration: 0.5 }}
        >
            <Scroller />
            <div className={header['navbar__logo']}>
                <Link href="/">
                    <p className={header['logo']}>Hrak Torousian</p>
                </Link>
            </div>

            <SideBarMenu />
            <motion.nav
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className={header['navbar']}
            >
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
            </motion.nav>
        </motion.div>
    );
};
export default Header;
