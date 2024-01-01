import React from 'react';
import './Navigation.css';
import NavTab from '../NavTab/NavTab';
import Account from '../Account/Account';

function Navigation() {
  return (
    <div className='navigation'>
      <div className='navigation__layout'></div>
      <div className='navigation__container'>
        <div className='navigation__navtab'>
          <NavTab />
          <Account />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
