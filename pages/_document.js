import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css" />
          <style jsx global>{`
            body {
              margin: 0;
              font-family: Nunito, system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;