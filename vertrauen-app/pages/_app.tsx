// pages/_app.tsx
import '../app/globals.css';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Vertrauen</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
