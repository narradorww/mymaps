import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossOrigin=""
        />

        <meta name="theme-color" content="#06092B" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#F231A5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <Component {...pageProps} />
    </>
  )
}

export default App
