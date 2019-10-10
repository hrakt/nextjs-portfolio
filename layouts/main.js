import '../sass/root.scss';

import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default ({ children }) => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>Hrak Torousan</title>
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
