

import Layout from '../layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
 
  return (
    <Layout headerData={pageProps?.data}>
      <Component {...pageProps} />
    </Layout>
  )
}