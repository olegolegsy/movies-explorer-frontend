import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import Account from '../Account/Account';
import Auth from '../Auth/Auth';
import NavTab from '../NavTab/NavTab';
import widthContext from '../contexts/widthContext';

function Header({ isLoggedIn, isPopupOpen }) {
  const width = useContext(widthContext);
  const isMobile = width < 1280;
  // =========== Appearance ===============================================================
  return isLoggedIn ? (
    <header className='header'>
      <div className='header__container'>
        {isPopupOpen && width < 768 ? '' : <Logo />}
        {isMobile ? '' : <NavTab />}
      </div>
      <div className='header__container_rigth'>
        {isMobile ? '' : <Account />}
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
