import styles from "../../sass/main.scss";

const Main = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["main-container"]}>
                <h1 className={styles["main-container__heading1"]}>
                    Hi, I'm Hrak 👋
                </h1>
                <h2 className={styles["main-container__heading2"]}>
                    A passionate web developer
                </h2>
                <a href="#about">
                    <button className={styles["btn"]}>About Me</button>
                </a>
            </div>
        </div>
    );
};

export default Main;
