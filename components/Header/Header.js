import styles from '../Header/Header.module.scss';
import SideBarMenu from '../Header/SideNav';
import Scroller from '../common/Scroller';
import Link from './ActiveLink';

const Header = () => {
    return (

        <div className={styles['navbar__container']}>

            <Scroller />
            <div className={styles['navbar__logo']}>
                <Link href="/">
                    <p className={styles['logo']}>Hrak Torousian</p>
                </Link>
            </div>

            <SideBarMenu />


            <nav className={styles['navbar']}>
                <div className={styles['navbar__item']}>

                    <Link href="/about" activeClassName="active">
                        <a className={styles['navbar__item-link']}>About Me</a>
                    </Link>
                </div>
                <div className={styles['navbar__item']}>
                    <Link href="/work" activeClassName="active">
                        <a className={styles['navbar__item-link']}>Work</a>
                    </Link>
                </div>
                <div className={styles['navbar__item']}>
                    <Link href="/contact" activeClassName="active">
                        <a className={styles['navbar__item-link']}>Contact</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
};
export default Header;
