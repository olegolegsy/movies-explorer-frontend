import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import Account from '../Account/Account';
import Auth from '../Auth/Auth';
import NavTab from '../NavTab/NavTab';

function Header({ isMobile, isLoggedIn, children }) {
  // =========== Appearance ===============================================================
  return isLoggedIn ? (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        {isMobile ? '' : <NavTab />}
      </div>
      <div className='header__container'>
        {isMobile ? children : <Account />}
      </div>
    </header>
  ) : (
    <header className='header'>
      <div className='header__container'>
        <Logo />
      </div>
      <div className='header__container'>
        <Auth />
      </div>
    </header>
  );
}

export default Header;
