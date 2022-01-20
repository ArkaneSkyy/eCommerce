import React from 'react';
import '../index.css';

const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-dark'> 
        <a className="navbar-brand mx-4" href="/#">Cart <span className='badge bg-secondary'>{totalCounters}</span></a>
    </nav>
);
}

export default NavBar;