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
    const [dropdown, setDropdown] = useState(false)

    function handleToggle(){
        setDropdown(!dropdown)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        }, []);

    

    async function logout(){
        await signOut(auth)
        localStorage.clear();

    }

    return (
        
            <nav style={styles.nav}>
                <div style={styles.logoContainer}> 
                    <img src="images/logo.png" style={{width: '3rem', height: '3rem'}} /> 
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link style={styles.a} to="/">Home</Link>
                    <Link style={styles.a} to="">Images</Link>
                    <Link style={styles.a} to="/vets">Browse Vets</Link>

                    {/* {user ? <span>{`Welcome ${auth.currentUser.displayName}`}<button className='bg-red-900 py-1 ml-2 rounded-lg'><Link style={styles.a} to="/signin" onClick={logout}>Logout</Link></button> </span>  : <Link style={styles.a} to="/signin">Sign In</Link>} */}

                    {user ? (
                        <div>
                            <span
                            onClick={handleToggle}
                            >
                            Welcome {auth.currentUser.displayName}
                            </span>
                            <div
                            className={`bg-white shadow-md absolute py-2 z-50 ${
                                dropdown ? "block" : "hidden"
                            }`}
                            >
                            <Link
                                to="/profile"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            >
                                View Profile
                            </Link>
                            <span
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                onClick={logout}
                            >
                                <Link to="/signin">Logout</Link>
                            </span>
                            </div>
                            </div>
                            ) : (
                            <Link to="/signin" style={styles.a}>
                                Sign In
                            </Link>
                            )}
   
                </div>            
            </nav>
    )
}