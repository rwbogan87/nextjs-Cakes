import styles from '../styles/Nav.module.css'


const Nav = ({children}) => {
    return (
        <>
        <div className={styles.navBar}>
            <h1>Nav</h1>
            <p>{children}</p>
        </div>
        </>
    )
}

export default Nav
