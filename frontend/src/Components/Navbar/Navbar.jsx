import React from 'react';
import './Navbar.css';
import Logo from '../Assets/logo.svg';

const Navbar = () => {
  return (
    
    <div className='navbar'>
       <div className="nav-logo">
          <img src={Logo} alt="logo" />
       </div>
        <ul className='nav-menu'>
           <li className='color-red'>HOME</li>
           <li>SERVICES</li>
           <li>OUR DOCTORS</li>
           <li>ABOUT US</li>
           <li>CONTACT US</li>
        </ul>
    </div>
  )
}

export default Navbar;