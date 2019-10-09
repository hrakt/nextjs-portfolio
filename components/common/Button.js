import button from '../common/Button.scss';
import Link from 'next/link';

const Button = ({ title, type, href }) => {
    switch (type) {
        case 'internal':
            return (
                <Link href={href}>
                    <div className={button['container']}>
                        <button className={button['btn']} type={type}>
                            {title}
                        </button>
                    </div>
                </Link>
            );
        case 'external':
            return (
                <div className={button['container']}>
                    <a href={href}>
                        <button className={button['btn']} type={type}>
                            {title}
                        </button>
                    </a>
                </div>
            );
        default:
            return (
                <React.Fragment>
                    <button className={button['btn']} type={type}>
                        {title}
                    </button>
                </React.Fragment>
            );
    }
};

export default Button;
