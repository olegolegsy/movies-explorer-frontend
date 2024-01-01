import React from 'react';
import './SignPage.css';

import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function SignPage({ children, type }) {
  const title = type === 'signup' ? 'Добро пожаловать!' : 'Рады видеть!';
  const text =
    type === 'signup' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?';
  const link = type === 'signup' ? 'Войти' : 'Регистрация';
  const to = type === 'signup' ? '/signin' : '/signup';

  return (
    <main className='sign-page'>
      <div className='sign-page__container'>
        <div className='sign-page__header'>
          <Logo />
          <h1 className='sign-page__title'>{title}</h1>
        </div>
        {children}
        <div className='sign-page__container-text'>
          <span className='sign-page__text'>{text}</span>
          <Link to={to} className='sign-page__link hover-link'>
            {link}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SignPage;
