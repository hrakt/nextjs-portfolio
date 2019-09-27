import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";

const index = () => (
    <div>
        <Header />
        <Main />
        <About />
        <Portfolio />
        <Footer />
        <style jsx global>{`
            :root {
                --color-primary-light: #ff3366;
                --color-primary-dark: #ba265d;
            }
            * {
                margin: 0;
                padding: 0;
            }

            div {
                box-sizing: border-box;
                font-size: 40%; // 1rem = 10px
                scroll-behavior: smooth;
            }

            div {
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                line-height: 1.6;

                color: var(--color-grey-dark-2);
                background-size: cover;
                background-repeat: no-repeat;
            }
        `}</style>
    </div>
);
export default index;
