import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html dir='rtl'>
        <Head>  
          {/* <link
            rel="shortcut icon"
            href="alarm-clock.png"
            type="image/x-icon"
          /> */}
          <link rel="manifest" href="/manifest.json" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

