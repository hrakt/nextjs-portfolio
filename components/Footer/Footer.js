import footer from "../Footer/Footer.scss";

const Footer = () => (
    <div className={footer["container-4"]} id="contact">
        <div className={footer["contact-container"]}>
            <h2 className={footer["contact-container__header1"]}>Contact Me</h2>
            <h4 className={footer["contact-container__header2"]}>
                If you would like to talk, you can find me at:
            </h4>
            <div className={footer["contact-container__icons"]}>
                <a href="https://www.github.com/hrakt/">
                    <img
                        src="/img/_ionicons_svg_logo-github.svg"
                        className={footer["contact-container__icon"]}
                    ></img>
                </a>
                <a href="https://www.linkedin.com/in/hrakt/">
                    <img
                        src="/img/_ionicons_svg_logo-linkedin.svg"
                        className={footer["contact-container__icon"]}
                    ></img>
                </a>
            </div>
        </div>
    </div>
);
export default Footer;
