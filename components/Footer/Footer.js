import footer from '../Footer/Footer.scss';
// import githubLogo from "../../img/_ionicons_svg_logo-github.svg";
// import linkedinLogo from "../../img/_ionicons_svg_logo-linkedin.svg";
import Contact from '../Footer/ContactForm';
import Text from '../common/Text';

const Footer = () => (
    <div className={footer['container-4']} id="contact">
        <Text
            type="paragraph"
            recievedStyle={footer['contact-container__fineprint']}
        >
            © Hrak Torousian. All rights reserved. 2019
        </Text>
    </div>
);

export default Footer;
