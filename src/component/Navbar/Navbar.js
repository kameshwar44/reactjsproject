import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);

  return (
    <nav className='navbar'>
      <h3 className='logo'>Portfolio</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >

        <Link to="/home" className="home" >
          <li>Home</li>
        </Link>
        <Link to="/about" className="about" >
          <li>About</li>
        </Link>
        <Link to="/signup" className="signup" >
          <li>Signup</li>
        </Link>
        <Link to="/login" className="login" >
          <li>Login</li>
        </Link>
      </ul>
      <button className='mobile-menu-icon'
        onClick={() => setMobile(!isMobile)}
      >
        {isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
      </button>

    </nav>
  )
}
export default Navbar