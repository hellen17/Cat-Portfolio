import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SlClose } from 'react-icons/sl';
import './navBar.css';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase.config';
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const styles = {
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
    <nav className='nav shadow-md' style={{ backgroundColor: 'black' }}>
      <div style={styles.logoContainer}> 
        <img src="/images/logo.png" style={{width: '3rem', height: '3rem'}} /> 
      </div>
      
      <div className="main__navigation" id={open ? "showLinks" : ""}>
        <div className="close__icon__mobile" onClick={() => setOpen(!open)}>
          <SlClose className='text-3xl' />
        </div>
        <ul className='nav__links' onClick={() => setOpen(!open)}>
          
          <Link to="/">Home</Link>
          <Link to="/images">Images</Link>
          <Link to="/vets">Browse Vets</Link>

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
       
        </ul>
      </div>
      <div className="mobile__nav" onClick={() => setOpen(!open)}>
        <RxHamburgerMenu className='text-2xl text-white' />
      </div>
    </nav>
  )
}

export default Navbar;