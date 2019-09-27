import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const Button = () => {
    return (
        <div>
            <button className={loadGetInitialProps.className}>
                {loadGetInitialProps.title}
            </button>
            ;
        </div>
    );
};

export default Button;
