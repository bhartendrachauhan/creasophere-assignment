import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-left-container'>
        <ul>
            <li>Home</li>
            <li>Our Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className='navbar-right-container'>
        <div className='navbar-login'>
            Log In
        </div>
      </div>
    </div>
  )
}

export default Navbar
