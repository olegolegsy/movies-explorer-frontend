import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  // =========== Appearance ===============================================================
  return (
    <Link to='/'>
      <img src={logo} alt='Логотип. Logo.' />
    </Link>
  );
}

export default Logo;
