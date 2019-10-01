import button from "../common/Button.scss";

const Button = ({ title, type }) => {
    return (
        <div className={button["container"]}>
            <button className={button["btn"]} type={type}>
                {title}
            </button>
        </div>
    );
};

export default Button;
