import styles from '../common/Button.scss';
import Link from 'next/link';

const Button = ({ title, type, href, id }) => {
    switch (type) {
        case 'internal':
            return (

                <div className={styles['container']}>
                    <Link href={href && 'projects/[id]'} as={`/projects/${id}`}>
                        <button className={styles['btn']} type={type}>

                            {title}
                        </button>
                    </Link>
                </div>
            );

        case 'external':
            return (
                <div className={styles['container']}>
                    <a href={href}>
                        <button className={styles['btn']} type={type}>
                            {title}
                        </button>
                    </a>
                </div>
            );
        default:
            return (
                <React.Fragment>
                    <button className={styles['btn']} type={type}>
                        {title}
                    </button>
                </React.Fragment>
            );
    }
};

export default Button;
