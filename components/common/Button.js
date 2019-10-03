import button from "../common/Button.scss";

const Button = ({ title, type }) => {
    const handleClick = e => {
        console.log(e.target);
    };
    return (
        <div className={button["container"]}>
            <button className={button["btn"]} type={type} onClick={handleClick}>
                {title}
            </button>
        </div>
    );
};

export default Button;
