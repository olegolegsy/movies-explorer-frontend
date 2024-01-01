import React, { useState, useRef, useEffect, useContext } from 'react';
import './Movies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../hooks/useForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import widthContext from '../contexts/widthContext';
import apiBeatfilm from '../../utils/MoviesApi';

function Movies() {
  // =========== Data =====================================================================
  const width = useContext(widthContext);
  const [isShort, setIsShort] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [shownMovies, setShownMovies] = useState(calcInitialCardNumer());
  const firstInput = useRef(null);
  const allMovies = useRef(null);

  // =========== Logic ====================================================================
  const { handleChange, value } = useForm();

  // считаем какой список рисовать: из корометражек или все
  function showMovies() {
    if (!isShort) {
      return foundMovies.slice();
    } else {
      return foundMovies.slice().filter((movie) => movie.duration < 40);
    }
  }

  // на основании ширины считаем сколько карточек загузить при маунте
  function calcInitialCardNumer() {
    if (width > 1279) {
      return 16;
    } else if (width > 767) {
      return 8;
    } else {
      return 5;
    }
  }

  // на основании ширины считаем сколько карточек подгружать по кнопке Еще
  function calcRowCardNumer() {
    if (width > 1279) {
      return 4;
    } else {
      return 2;
    }
  }

  // обработчик кнопки Еще
  function pressMore() {
    setShownMovies((movies) => movies + calcRowCardNumer());
  }

  function onSubmit(evt) {
    evt.preventDefault();
    setFoundMovies(
      allMovies.current
        .slice()
        .filter((movie) =>
          `${movie.nameEN} ${movie.nameRU} ${movie.description}`
            .toLowerCase()
            .includes(value.movie.toLowerCase())
        )
    );
  }

  // загружаем фильмы с апи и делаем фокус на ипуте
  useEffect(() => {
    firstInput.current.focus();

    apiBeatfilm.getMoviesBeatfilm().then((res) => (allMovies.current = res));
  }, []);

  // =========== Appearance ===============================================================
  return (
    <main className='movies'>
      <div className='movies__search'>
        <SearchForm
          value={value}
          onChange={handleChange}
          focus={firstInput}
          onSubmit={onSubmit}
        />
        <FilterCheckbox isSort={isShort} onChange={setIsShort} />
      </div>
      <MoviesCardList>
        {showMovies()
          .slice(0, shownMovies)
          .map((movie) => (
            <MoviesCard key={movie.id} card={movie} />
          ))}
      </MoviesCardList>
      <div
        className={`movies__more-btn-container ${
          shownMovies < showMovies().length &&
          'movies__more-btn-container_active '
        }`}
      >
        {shownMovies < showMovies().length && (
          <div className='movies__more-btn hover-btn' onClick={pressMore}>
            Ещё
          </div>
        )}
      </div>
    </main>
  );
}

export default Movies;
