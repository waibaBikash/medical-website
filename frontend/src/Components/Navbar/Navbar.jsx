import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    
    <div className='navbar'>
       <div className="nav-logo">
         <p className='name'>REAL HEALTH</p>
         <p>Medical Centre</p>
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