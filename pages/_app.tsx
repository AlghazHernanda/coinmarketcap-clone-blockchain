import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
    serverUrl='https://vc3dsi3cyghd.usemoralis.com:2053/server'
    appId='V5XCyHfSwEvnwBHo6Px8RBXw4B7BsPdZlsV85MiU'
  >
    {/* <GunProvider> */}
      {/* <CoinMarketProvider> */}
        <Component {...pageProps} />
      {/* </CoinMarketProvider> */}
    {/* </GunProvider> */}
  </MoralisProvider>
  )
 
}

export default MyApp
