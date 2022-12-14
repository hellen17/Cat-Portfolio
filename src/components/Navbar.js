export function Navbar() {
    const styles = {
        nav: {
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            padding: '0 2rem',
            backgroundColor: 'black',
            color: 'white',
            height: '4rem'
        },
        a: {
            textDecoration: 'none',
            color: 'white',
            margin: '0 1rem',
        }
    }

    return (
        <nav style={styles.nav}>
            <a style={styles.a} href="/">Home</a>
            <a style={styles.a} href="">Images</a>
            <a style={styles.a} href="">Sign Up</a>
        </nav>
    )
}