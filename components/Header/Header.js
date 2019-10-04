import { useEffect, useState } from "react";
import logo from "../../img/favicon.png";
import header from "../Header/Headers.scss";
import SideBarMenu from "../Header/SideNav";
import Scroller from "../common/Scroller";
import Link from "next/link";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    return (
        <div className={header["navbar__container"]}>
            {/* <img src={logo} alt="Logo" className={header["logo"]} /> */}
            <Scroller />
            <Link href="/">
                <a className={header["logo"]}>hrak.to</a>
            </Link>

            {isMobile ? (
                <SideBarMenu />
            ) : (
                <nav className={header["navbar"]}>
                    <div className={header["navbar__item"]}>
                        <Link href="/about">
                            <a className={header["navbar__item-link"]}>
                                About Me
                            </a>
                        </Link>
                    </div>
                    <div className={header["navbar__item"]}>
                        <Link href="/work">
                            <a className={header["navbar__item-link"]}>Work</a>
                        </Link>
                    </div>
                    <div className={header["navbar__item"]}>
                        <Link href="/contact">
                            <a className={header["navbar__item-link"]}>
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
