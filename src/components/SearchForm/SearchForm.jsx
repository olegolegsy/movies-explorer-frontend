import React, { useContext } from 'react';
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import widthContext from '../contexts/widthContext';

function SearchForm({ value, onChange, focus, onSubmit }) {
  const width = useContext(widthContext);
  const isMobile = width > 768;
  return (
    <form className='search-form' onSubmit={onSubmit}>
      {isMobile ? (
        <img
          className='search-form__img'
          src={searchIcon}
          alt='Лупа. Search.'
        />
      ) : (
        ''
      )}
      <fieldset className='search-form__fieldset'>
        <input
          className='search-form__input'
          placeholder='Фильм'
          type='text'
          name='movie'
          value={value.movie ? value.movie : ''}
          onChange={onChange}
          ref={focus}
        ></input>
        <input
          className='search-form__submit hover-btn'
          type='submit'
          value='Найти'
        ></input>
      </fieldset>
    </form>
  );
}

export default SearchForm;
