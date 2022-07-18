/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
const KAKAOMAP_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {

    return (
        <Html>
          <Head>
          <meta charSet="utf-8"/>
          </Head>
          <body>
            <Main/>
            <NextScript />
            <script
              type="text/javascript"
              src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_KEY}&libraries=services,clusterer,drawing`}></script>
          </body>
      </Html>
    )  }
}

export default MyDocument