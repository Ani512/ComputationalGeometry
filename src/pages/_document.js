import { Children } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from '../utils/create-emotion-cache';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
								font-family: Postoni;
								font-weight: 700;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Bold.woff2);
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f3-f5, U+fa, U+2009, U+2013, U+2014,
								  U+2018, U+2019, U+201c, U+201d, U+2026;
							  }
							  @font-face {
								font-family: Postoni;
								font-weight: 300;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Regular.woff2);
							  }
							  @font-face {
								font-family: Franklin;
								font-weight: 700;
								font-display: fallback;
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f3-f5, U+fa, U+2009, U+2013, U+2014,
								  U+2018, U+2019, U+201c, U+201d, U+2026;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Bold.woff2);
							  }
							  @font-face {
								font-family: Franklin;
								font-weight: 300;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Light.woff2);
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f1, U+f3-f5, U+fa, U+2009, U+2013,
								  U+2014, U+2018, U+2019, U+201c, U+201d, U+2026;
							  }`,
            }}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            href="https://www.washingtonpost.com/wp-stat/assets/favicons/favicon.svg"
          />
          <meta name="theme-color" content="rgba(240,240,240,1)" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};

export default CustomDocument;
