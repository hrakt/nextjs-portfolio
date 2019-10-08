import button from '../common/Button.scss';
import Link from 'next/link';

const Button = ({ title, type, href }) => {
    const handleClick = e => {
        console.log(e.target);
    };
    return (
        <Link href={href}>
            <div className={button['container']}>
                <button
                    className={button['btn']}
                    type={type}
                    onClick={handleClick}
                >
                    {title}
                </button>
            </div>
        </Link>
    );
};

export default Button;
