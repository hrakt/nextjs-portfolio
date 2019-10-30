import button from '../common/Button.scss';
import Link from 'next/link';

const Button = ({ title, type, href, id }) => {
    switch (type) {
        case 'internal':
            return (
                <div className={button['container']}>
                    <Link href={href && 'projects/[id]'} as={`/projects/${id}`}>
                        <button className={button['btn']} type={type}>
                            {title}
                        </button>
                    </Link>
                </div>
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
