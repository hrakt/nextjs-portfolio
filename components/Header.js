import css from "../sass/main.scss";
import logo from "../img/favicon.png";

const Header = () => {
    return (
        <div className={css}>
            <img src={logo} alt="Logo" className="logo" />
            <nav className="navbar">
                <div className="navbar__item">
                    <a href="#about" className="navbar__item-link">
                        About Me
                    </a>
                </div>
                <div className="navbar__item">
                    <a href="#portfolio" className="navbar__item-link">
                        Work
                    </a>
                </div>
                <div className="navbar__item">
                    <a href="#contact" className="navbar__item-link">
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
};
export default Header;
