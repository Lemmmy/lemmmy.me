import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  render(): JSX.Element {
    return <Html>
      <Head>
        <meta name="description" content="Lemmmy &middot; Musician / Programmer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}

export default MainDocument;
