import React, { useState, useRef, useEffect, useContext } from 'react';
import './Movies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../hooks/useForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import widthContext from '../contexts/widthContext';
import apiBeatfilm from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import NoMoviesResult from '../NoMoviesResult/NoMoviesResult';

function Movies({ handleAdd, handleDel, savedMovies }) {
  // =========== Data =====================================================================
  const { handleChange, resetForm, value } = useForm();

  const width = useContext(widthContext);
  const [isShort, setIsShort] = useState(
    localStorage.isShort ? JSON.parse(localStorage.isShort) : false
  );
  const [foundMovies, setFoundMovies] = useState(
    localStorage.foundMovies ? JSON.parse(localStorage.foundMovies) : []
  );
  const [shownMovies, setShownMovies] = useState(calcInitialCardNumer());
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const firstInput = useRef(null);

  // =========== Logic ====================================================================

  // считаем какой список рисовать: из корометражек или все
  function showMovies() {
    localStorage.setItem('isShort', isShort);
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

  function setLocalStorageRequestData() {
    localStorage.setItem('searchRequest', JSON.stringify(value));
    localStorage.setItem('isShort', isShort);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);

    apiBeatfilm
      .getMoviesBeatfilm()
      .then((res) =>
        setFoundMovies(() => {
          const newMovies = res
            .slice()
            .filter((movie) =>
              `${movie.nameEN} ${movie.nameRU}`
                .toLowerCase()
                .includes(value.movie.toLowerCase())
            );

          localStorage.setItem('foundMovies', JSON.stringify(newMovies));
          setIsLoading(false);
          return newMovies;
        })
      )
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.error(`ошибка при  запросе фильмов:${err}`);
      });

    setLocalStorageRequestData();
  }

  // загружаем фильмы с апи и делаем фокус на ипуте
  useEffect(() => {
    firstInput.current.focus();
    resetForm(
      localStorage.searchRequest ? JSON.parse(localStorage.searchRequest) : {}
    );
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
      {isLoading ? (
        <Preloader />
      ) : showMovies().length === 0 ? (
        <NoMoviesResult isError={isError} />
      ) : (
        <>
          <MoviesCardList>
            {showMovies()
              .slice(0, shownMovies)
              .map((movie) => (
                <MoviesCard
                  key={movie.id}
                  card={movie}
                  handleAdd={handleAdd}
                  handleDel={handleDel}
                  savedMovies={savedMovies}
                />
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
        </>
      )}
    </main>
  );
}

export default Movies;
