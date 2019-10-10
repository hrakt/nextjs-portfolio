import '../sass/root.scss';

import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default ({ children }) => (
    <div>
        <Head>
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Header />
        {children}
        <Footer />
    </div>
);
