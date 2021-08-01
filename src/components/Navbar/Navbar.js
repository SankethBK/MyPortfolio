import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // State to track opening and closing of hamburder menu
  const [menuOpen, setMenuOpem] = useState(false);

  return (
    <header className='header'>
      <nav>
        <div className='nav-container'>
          <div className='nav-logo'>Sanketh B.K</div>
          <ul className='nav-links'>
            <li className='nav-link'>
              <a href='#'>Home</a>
            </li>
            <li className='nav-link'>
              <a href='#'>About</a>
            </li>
            <li className='nav-link'>
              <a href='#'>Projects</a>
            </li>
            <li className='nav-link'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='menu-btn' onClick={() => setMenuOpem(!menuOpen)}>
          <span className={`btn-burger ${menuOpen ? 'open' : ''}`}></span>
        </div>

        <div className={`nav-menu-overlay ${menuOpen ? 'open' : ''}`}>
          <ul className='nav-links'>
            <li className='nav-link' style={{ '--order': 1 }}>
              <a href='#'>Home</a>
            </li>
            <li className='nav-link' style={{ '--order': 2 }}>
              <a href='#'>About</a>
            </li>
            <li className='nav-link' style={{ '--order': 3 }}>
              <a href='#'>Projects</a>
            </li>
            <li className='nav-link' style={{ '--order': 4 }}>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
