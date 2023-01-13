import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { auth } from '../firebase.config';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from '@chakra-ui/react'

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

    const [user,setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        }, []);

    async function logout(){
        await signOut(auth)
    }

    return (
        
            <nav style={styles.nav}>
                <div style={styles.logoContainer}> 
                    <img src="images/logo.png" style={{width: '3rem', height: '3rem'}} /> 
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link style={styles.a} to="/">Home</Link>
                    <Link style={styles.a} to="">Images</Link>
                    {user ? <span>{`Welcome ${auth.currentUser.displayName}`}<button className='bg-red-900 py-1 ml-2 rounded-lg'><Link style={styles.a} to="/signin" onClick={logout}>Logout</Link></button> </span>  : <Link style={styles.a} to="/signin">Sign In</Link>}
                </div>            
            </nav>
    )
}