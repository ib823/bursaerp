import React from 'react';
import '../styles/Header.css';
import abeamLogo from '../assets/images/abeam-logo.png';
import bursaLogo from '../assets/images/bursa-logo.png';

function Header() {
  return (
    <header className="app-header">
      <div className="header-title">BURSA Malaysia ERP Transformation</div>
      <div className="logo-container">
        <img src={abeamLogo} alt="ABeam Malaysia Logo" className="abeam-logo" />
        <img src={bursaLogo} alt="Bursa Malaysia Logo" className="bursa-logo" />
      </div>
    </header>
  );
}

export default Header;
