const Input = ({ type, placeholder, recievedStyle, options }) => {
    const returnOptions = arr => {
        let optionArr = [];
        arr.map(item => {
            optionArr.push(<option value={item}>{item}</option>);
        });
        return optionArr;
    };
    switch (type) {
        case "textarea":
            return (
                <textarea
                    type="text"
                    placeholder={placeholder}
                    className={recievedStyle}
                />
            );
        case "select":
            return (
                <select className={recievedStyle}>
                    <option value="" disabled selected hidden>
                        {placeholder}
                    </option>
                    {returnOptions(options)}
                </select>
            );
        default:
            return (
                <React.Fragment>
                    <input type="text" {...props} />
                </React.Fragment>
            );
    }
};

export default Input;
