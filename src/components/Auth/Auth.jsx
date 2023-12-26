import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

function Auth() {
  // =========== Appearance ===============================================================
  return (
    <div className='auth'>
      <Link to='/signup' className='auth__signup hover-link'>
        Регистрация
      </Link>
      <Link to='/signin' className='auth__signin hover-link'>
        Войти
      </Link>
    </div>
  );
}

export default Auth;
