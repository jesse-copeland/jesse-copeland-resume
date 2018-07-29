import Document, { Head, Main, NextScript } from 'next/document';

export default class SiteDocument extends Document {
  render() {
    return(
      <html>
        <Head>
        <meta charSet="UTF-8" />
	        <title>Résumé of Jesse Copeland</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
        </Head>
        <body>
          <div className="contents">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
};