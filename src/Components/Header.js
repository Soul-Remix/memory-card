import React from 'react';
import logo from '../images/pokemon-logo.png';
import '../styles/header.css';

function Header() {
  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="" aria-hidden={true} />
        </div>
      </header>
      <div className="black-line"></div>
    </div>
  );
}

export default Header;
