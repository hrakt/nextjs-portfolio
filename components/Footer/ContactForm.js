import Input from '../common/Input';
import Button from '../common/Button';
import Text from '../common/Text';
import contactform from '../Footer/ContactForm.scss';
import footer from '../Footer/Footer.scss';
import cx from 'classnames';

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
        <div className={contactform['container']}>
            <div className={contactform['text-container']}>
                <h1 className={contactform['text-container__heading']}>
                    Let's have a chat
                </h1>
                <p className={contactform['text-container__paragraph']}>
                    Always happy to hear from you whether inquiring about work
                    or just catching up.
                </p>
                <a
                    href="mailto:hello@hrak.to"
                    className={contactform['text-container__email']}
                >
                    Send me an email!
                </a>
            </div>
            {/* <div className={contactform['header']}>
                <Text
                    type="heading"
                    recievedStyle={footer['contact-container__header1']}
                >
                    Let's Talk
                </Text>
                <span className={contactform['textarea__emoji']}>
                    &#128071;
                </span>
            </div>
            <Input
                recievedStyle={contactform['textarea']}
                type="textarea"
                placeholder="Email Address"
            />
            <Input
                recievedStyle={contactform['select']}
                type="select"
                placeholder="What's this about?"
                options={options}
            />
            <Input
                type="textarea"
                placeholder="Enter your message here"
                recievedStyle={cx(
                    contactform['textarea'],
                    contactform['textarea__big']
                )}
            />
            <Button title="Send" /> */}
            <div className={footer['contact-container']}>
                <h2 className={footer['contact-container__header1']}>
                    Find me at
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
