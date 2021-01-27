import '../styles/globals.css'

import { SWRConfig } from 'swr'
import fetch from '../lib/auth/fetchJson';

// import {setAxiosInstance} from './../lib/api.js'


function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp