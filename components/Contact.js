const Contact = () => {
    return (
        <div className="container-4" id="contact">
            <div className="contact-container">
                <h2 className="contact-container__header1">Contact Me</h2>
                <h4 className="contact-container__header2">
                    If you would like to talk, you can find me at:
                </h4>
                <div className="contact-container__icons">
                    <a href="https://www.github.com/hrakt/">
                        <img
                            src="/img/_ionicons_svg_logo-github.svg"
                            className="contact-container__icon"
                        ></img>
                    </a>
                    <a href="https://www.linkedin.com/in/hrakt/">
                        <img
                            src="/img/_ionicons_svg_logo-linkedin.svg"
                            className="contact-container__icon"
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Contact;
