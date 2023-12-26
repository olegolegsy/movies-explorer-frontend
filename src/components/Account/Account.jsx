import React from 'react';
import './Account.css';
import { Link } from 'react-router-dom';

function Account() {
  // =========== Appearance ===============================================================
  return (
    <Link className='account hover-btn' to='/profile'>
      <div className='account__container hover-btn'>
        Аккаунт <div className='account__img'></div>
      </div>
    </Link>
  );
}

export default Account;
