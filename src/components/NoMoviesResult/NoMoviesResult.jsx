import React from 'react';
import './NoMoviesResult.css';

function NoMoviesResult({ isError }) {
  return (
    <div className='no-movies-result'>
      {isError ? (
        <span className='no-movies-result__title'>
          «Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз»
        </span>
      ) : (
        <span className='no-movies-result__title'>«Ничего не найдено»</span>
      )}
    </div>
  );
}

export default NoMoviesResult;
