import styles from '../Footer/ContactForm.scss';
import footer from '../Footer/Footer.scss';

const ContactForm = () => {
    const options = [
        'Collaboration',
        'Inquiry',
        'Offer',
        'Suggestion',
        'Connect',
        'Other',
    ];
    return (
        <div className={styles['container']}>
            <div className={styles['text-container']}>
                <h1 className={styles['text-container__heading']}>
                    Let's Have a Chat!
                </h1>
                <p className={styles['text-container__paragraph']}>
                    Always happy to hear from you whether inquiring about work
                    or just catching up.
                </p>
                <a
                    href="mailto:hello@hrak.to"
                    className={styles['text-container__email']}
                >
                    Send me an email!
                </a>
            </div>

            <div className={footer['contact-container']}>
                <h2 className={footer['contact-container__header1']}>
                    Find Me At:
                </h2>

                <h4 className={footer['contact-container__header2']}>
                    If you would like to talk, you can find me at:
                </h4>
                <div className={footer['contact-container__icons']}>
                    <a href="https://www.github.com/hrakt/">
                        <img
                            src="/_ionicons_svg_logo-github.svg"
                            className={footer['contact-container__icon']}
                        ></img>
                    </a>
                    <a href="https://www.linkedin.com/in/hrakt/">
                        <img
                            src="/_ionicons_svg_logo-linkedin.svg"
                            className={footer['contact-container__icon']}
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
