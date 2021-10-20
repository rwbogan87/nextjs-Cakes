import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.logoContainer}>
            <img src="../assets/magiCakes_logos/MagiCakes-logos_transparent.png" className={layoutStyles.logo} />

            </div>

            <main className={layoutStyles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout