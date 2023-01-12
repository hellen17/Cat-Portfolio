import { BrowserRouter, Route, Link } from 'react-router-dom';


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
                    <img src="images/logo.png" style={{width: '3rem', height: '3rem'}} /> 
                </div>
                <div style={{ display: 'flex' }}>
                    <Link style={styles.a} to="/">Home</Link>
                    <Link style={styles.a} to="">Images</Link>
                    <Link style={styles.a} to="/signup">Sign Up</Link>
                </div>            
            </nav>
    )
}