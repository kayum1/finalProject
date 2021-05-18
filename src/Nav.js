import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white', 
  };

  return (
    <div className='nav'>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/list'>
          <li>List</li>
        </Link>
        <Link style={navStyle} to='/0'>
          <li>Details</li>
        </Link>
      </ul>
    </div>
  );
}
export default Nav;
