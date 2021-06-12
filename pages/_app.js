import '../styles/index.css'
import Head from 'next/head';
import Header from '../components/header';
import { getSiteDetails } from '../lib/api';
import Footer from '../components/footer';

function App({ Component, pageProps, siteSettings }) {
  // const { siteName, landingPage: { title, content, isPasswordProtected } } = siteSettings[0]
  return <>
        <Head>
            <title />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default App
