import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

function Auth() {
  // =========== Appearance ===============================================================
  return (
    <div className='auth'>
      <Link className='auth__signup'>Регистрация</Link>
      <Link className='auth__signin'>Войти</Link>
    </div>
  );
}

export default Auth;
