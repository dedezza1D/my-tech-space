import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to={{ pathname: '/' }}>Home</Link></li>
        <li><Link to={{ pathname: '/about' }}>About</Link></li>
        <li><Link to={{ pathname: '/blog' }}>Blog</Link></li>
        <li><Link to={{ pathname: '/contact' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
