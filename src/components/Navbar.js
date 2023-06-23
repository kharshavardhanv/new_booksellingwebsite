import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav1.css';

function Navbar() {
  
  return (
    <nav className='navcss'>
      <ul className='one'>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;