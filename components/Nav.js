import navStyles from '../styles/Nav.module.css'
import Head from 'next/head'

const Nav = ({ children }) => {
    return (
        <>
            <div className={navStyles.navBar}>
                <Head>
                    <title>Cakes</title>
                </Head>
            </div>
        </>
    )
}

export default Nav
