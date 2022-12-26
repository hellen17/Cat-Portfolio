export function Navbar() {
    const styles = {
        nav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 2rem',
            backgroundColor: 'black',
            color: 'white',
            height: '4rem',
            
        },
        a: {
            textDecoration: 'none',
            color: 'white',
            margin: '0 1rem',
        },

        logoContainer: {
            display: 'flex',
            alignItems: 'center'
        }
    }

    return (
        <nav style={styles.nav}>
            <div style={styles.logoContainer}> 
                <img src="/path/to/logo.png" style={{width: '3rem', height: '3rem'}} /> 
            </div>
            <div style={{ display: 'flex' }}>
                <a style={styles.a} href="/">Home</a>
                <a style={styles.a} href="">Images</a>
                <a style={styles.a} href="">Sign Up</a>
            </div>
        
        </nav>
    )
}