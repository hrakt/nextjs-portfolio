import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import Scroller from "../components/common/Scroller";

const index = () => (
    <div>
        <Scroller />
        <Header />
        <Main />
        <About />
        <Portfolio />
        <Footer />
        <style jsx global>{``}</style>
    </div>
);
export default index;
