import button from "../common/Button.scss";

const Button = props => {
    return (
        <div>
            <button className={button["btn"]}>{props.title}</button>
        </div>
    );
};

export default Button;
