import React from 'react';
import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  // =========== Logic ====================================================================
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  // =========== Appearance ===============================================================
  return (
    <main className='error-page'>
      <div className='error-page__container'>
        <h1 className='error-page__title'>404</h1>
        <h2 className='error-page__subtitle'>Страница не найдена</h2>
        <span className='error-page__link-back' onClick={goBack}>
          Назад
        </span>
      </div>
    </main>
  );
}

export default ErrorPage;
