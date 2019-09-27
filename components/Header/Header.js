import logo from "../../img/favicon.png";
import header from "../Header/Headers.scss";

const Header = () => {
    return (
        <div className={header["navbar__container"]}>
            <img src={logo} alt="Logo" className={header["logo"]} />
            <nav className={header["navbar"]}>
                <div className={header["navbar__item"]}>
                    <a href="#about" className={header["navbar__item-link"]}>
                        About Me
                    </a>
                </div>
                <div className={header["navbar__item"]}>
                    <a
                        href="#portfolio"
                        className={header["navbar__item-link"]}
                    >
                        Work
                    </a>
                </div>
                <div className={header["navbar__item"]}>
                    <a href="#contact" className={header["navbar__item-link"]}>
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
};
export default Header;
