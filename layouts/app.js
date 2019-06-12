import Head from 'next/head';
import { Fragment } from 'react';

export default ({ children }) => (
  <Fragment>
    <Head>
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css" />
    </Head>

    <style jsx global>{`
      body {
        font: 16px Nunito, menlo;
      }

      html,
      body,
      #__next {
        height: 100%;
        padding: 0;
        margin: 0;
      }

      #__next {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>

    {children}
  </Fragment>
)
