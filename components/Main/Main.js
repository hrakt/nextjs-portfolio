import main from "../Main/Main.scss";
import Button from "../common/Button";
import Link from "next/link";

const Main = () => {
    return (
        <div className={main["container"]}>
            <div className={main["main-container"]}>
                <h1 className={main["main-container__heading1"]}>
                    Hi, I'm Hrak 👋
                </h1>
                <h2 className={main["main-container__heading2"]}>
                    A passionate web developer
                </h2>
                <Link href="/about">
                    <Button title="About Me" />
                </Link>
            </div>
        </div>
    );
};

export default Main;
