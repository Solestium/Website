import Head from 'next/head';
import { Fragment } from 'react';

export default ({ children }) => (
  <Fragment>
    <Head>
      <title>Solestium</title>

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

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
    `}</style>

    {children}
  </Fragment>
)
