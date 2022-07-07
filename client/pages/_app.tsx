import "../styles/globals.scss";

import {AppProps} from "next/app";

import Head from "next/head";

import Layout from "../components/Layout";

import {UserProvider} from "../contexts/userContext";

const MyApp = ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>

    <main>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </main>
  </>
);

export default MyApp;
