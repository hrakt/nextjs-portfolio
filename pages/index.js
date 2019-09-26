import css from "../sass/main.scss";
import Header from "../components/Header";

const index = () => (
    <div>
        <p className={css.example}>Hello World</p>
        <Header />
    </div>
);
export default index;
