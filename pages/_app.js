import '../styles/globals.css'
import styles from '../styles/Layout.module.css';
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
      <footer className={styles.footer}></footer>
    </>
  )
}

export default MyApp
