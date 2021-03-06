import styles from '../About/About.module.scss';

const About = () => {
    return (
        <div className={styles['container-2']} id="about">
            <div className={styles['about-container']}>
                <h4 className={styles['about-container__heading']}>About me</h4>
                <h5 className={styles['about-container__heading2']}>
                    If you're interested who I am
                </h5>
                <div className={styles['about-container__text']}>
                    <p className={styles['about-container__content']}>
                        I'm{' '}
                        <div className={styles['about-container__word']}>
                            <span>Hrak</span>
                        </div>
                        , I'm a 22 years old Full-Stack Developer from{' '}
                        <div className={styles['about-container__word']}>
                            <span>Los Angeles.</span>
                        </div>
                    </p>
                    <p className={styles['about-container__content']}>
                        3 years ago I made a decision to move out to Los Angeles
                        and pursue my dreams. So far Ive had the oportunity to
                        study Computer Science at Pasadena City College.
                        Meanwhile, I tried to start a career working at Apple as
                        Specialist and also had the oportuinty to do an
                        internship at Techstars, a startup incubator program.
                    </p>
                    <p className={styles['about-container__content']}>
                        In 2018, I got introduced to Web Development through
                        CodeCademy and Reddit and I fell in love. The first time
                        I created a web site it made me realize my passion
                        toward building web applications.
                    </p>
                    <p className={styles['about-container__content']}>
                        In 2019, I decided that after completing my classes at
                        PCC, I want to put myself into an enviornment that will
                        get my Web Development career started. That was when I
                        discovered General Assembly and decided to take the
                        Software Engineering Immersive course.
                    </p>
                    <p className={styles['about-container__content']}>
                        Because the best way to learn something is just to
                        practice it, I built over 5 projects during my time at
                        GA expanding my knowledge on React, Node.js and
                        Javascript in general.
                    </p>
                    <p className={styles['about-container__content']}>
                        I've always strived to do more, be more and{' '}
                        <div className={styles['about-container__word']}>
                            <span>never settle</span>
                        </div>
                        learning.
                    </p>
                    <p className={styles['about-container__content']}>
                        I’m hard working, super curious, passionate, committed,
                        and also a fast learner!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
