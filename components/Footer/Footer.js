import styles from '../Footer/Footer.module.scss';
import Text from '../common/Text';

const Footer = () => (
    <div className={styles['container-4']} id="contact">
        <Text
            type="paragraph"
            recievedStyle={styles['contact-container__fineprint']}
        >
            © Hrak Torousian. All rights reserved. 2019
        </Text>
    </div>
);

export default Footer;
