import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { API } from '../helpers/api';
import '../styles/globals.sass';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap'
          rel='stylesheet'
        />
        <meta property='og:url' content={API.domain.main + router.asPath} />
        <meta property='og:locale' content='ru_RU' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
