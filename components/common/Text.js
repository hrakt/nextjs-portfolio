const Text = ({ type, children, recievedStyle }) => {
    switch (type) {
        case "heading":
            return <h1 className={recievedStyle}>{children}</h1>;
        case "paragraph":
            return <p className={recievedStyle}>{children}</p>;
        default:
            return <React.Fragment></React.Fragment>;
    }
};

export default Text;
