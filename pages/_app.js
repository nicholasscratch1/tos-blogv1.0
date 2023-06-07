import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import '../pages/Imp/Style.css'
import Head from 'next/dist/shared/lib/head';
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script id="Adsense-id" data-ad-client="ca-pub-1445111063878874"
  async strategy="afterInteractive"
  onError={ (e) => { console.error('Script failed to load', e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-KW76E00BDN"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KW76E00BDN', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
      <Head >
      <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" /> 
      <meta charset="UTF-8"/>
      <meta name="robots" content="index, follow" />
      <title>TOS-BLOG</title>
      <link rel='canonical' href="https://www.tos-blog.com/" />
      <meta name="description" content='TOS-BLOG is a Professional Blog Platform. Here we will provide you only interesting content, which you will like very much.'/>

      <meta property="og:title" content='TOS-BLOG' />
      <meta property="og:description" content="TOS-BLOG is a Professional Blog Platform. Here we will provide you only interesting content, which you will like very much." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.tos-blog.com/" />
      <meta property="og:image" content="https://ibb.co/gtW78hf" />

      <meta name="twitter:title" content="TOS-BLOG" />
      <meta name='twitter:type' content='Website' />
      <meta name="twitter:description" content="TOS-BLOG is a Professional Blog Platform. Here we will provide you only interesting content, which you will like very much." />
      <meta name="twitter:image" content="https://ibb.co/gtW78hf" />
      <meta property="twitter:url" content="https://www.tos-blog.com/" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
