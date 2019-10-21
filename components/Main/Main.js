import main from '../Main/Main.scss';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const Main = () => {
    return (
        <div className={main['container']}>
            <div className={main['main-container']}>
                <h1 className={main['main-container__heading1']}>
                    Hi, I'm Hrak{' '}
                    <motion.div
                        className={main['main-container__emoji']}
                        animate={{ rotate: [0, 0, 90, 90, 0] }}
                        transition={{ duration: 2 }}
                    >
                        👋
                    </motion.div>
                </h1>
                <h2 className={main['main-container__heading2']}>
                    I'm a
                    <div className={main['slidingVertical']}>
                        <span>self-taught</span>
                        <span>curious</span>
                        <span>creative</span>
                        <span>energetic</span>
                    </div>
                    web developer
                </h2>

                <Button type="internal" href="/about" title="About Me" />
            </div>
        </div>
    );
};

export default Main;
