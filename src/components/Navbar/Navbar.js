import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // State to track opening and closing of hamburder menu
  const [menuOpen, setMenuOpem] = useState(false);

  return (
    <header className='header'>
      <nav className='color-transition'>
        <div className='nav-container'>
          <div className='nav-logo'></div>
          <ul className='nav-links'>
            <li className='nav-link'>
              <a href='#home'>Home</a>
            </li>
            <li className='nav-link'>
              <a href='#about'>About</a>
            </li>
            <li className='nav-link'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='nav-link'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='menu-btn' onClick={() => setMenuOpem(!menuOpen)}>
          <span className={`btn-burger ${menuOpen ? 'open' : ''}`}></span>
        </div>

        <div className={`nav-menu-overlay ${menuOpen ? 'open' : ''}`}>
          <ul className='nav-links nav-links-mobile'>
            <li className='nav-link' style={{ '--order': 1 }}>
              <a href='#home'>Home</a>
            </li>
            <li className='nav-link' style={{ '--order': 2 }}>
              <a href='#about'>About</a>
            </li>
            <li className='nav-link' style={{ '--order': 3 }}>
              <a href='#projects'>Projects</a>
            </li>
            <li className='nav-link' style={{ '--order': 4 }}>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
