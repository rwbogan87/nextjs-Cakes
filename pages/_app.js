import Layout from '../components/Layout'
import '../styles/globals.css'
import styles from '../styles/Layout.module.css';
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={styles.layout}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
