import { useEffect, useState } from 'react';
import styles from '../common/Scroller.module.scss';
import cx from 'classnames';

const Scroller = () => {
    const [scrollHit, setScrollHit] = useState(false);

    const handleScroll = () => {
        console.log('handling scroll');
        if (!(window.scrollY < 10)) {
            setScrollHit(true);
        } else {
            setScrollHit(false);
        }
    };

    useEffect(() => window.addEventListener('scroll', handleScroll));

    return (
        <div className={styles['container']}>
            <img
                src="/_up_icon.svg"
                className={cx(styles['icon'], {
                    [styles['icon__visible']]: scrollHit,
                })}
            ></img>
        </div>
    );
};

export default Scroller;
