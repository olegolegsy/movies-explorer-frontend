import React, { useState, useRef, useEffect } from 'react';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../hooks/useForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NoMoviesResult from '../NoMoviesResult/NoMoviesResult';

function SavedMovies({ handleDel, savedMovies }) {
  // =========== Data =====================================================================
  const [isShort, setIsShort] = useState(false);
  const [foundMovies, setFoundMovies] = useState(savedMovies);
  const firstInput = useRef(null);

  // =========== Logic ====================================================================
  const { handleChange, value } = useForm();

  // считаем какой список рисовать: из корометражек или все
  function showMovies() {
    if (!isShort) {
      return foundMovies;
    } else {
      return foundMovies.filter((movie) => movie.duration < 40);
    }
  }

  function showFoundMovies(savedMovies) {
    setFoundMovies(
      savedMovies.filter((movie) =>
        `${movie.nameEN} ${movie.nameRU}`
          .toLowerCase()
          .includes(value.movie.toLowerCase())
      )
    );
  }

  function removeDeletedCard(cardID) {
    setFoundMovies((list) => list.filter((movie) => movie.movieId !== cardID));
  }

  function onSubmit(evt) {
    evt.preventDefault();
    showFoundMovies(savedMovies);
  }

  // загружаем фильмы с апи и делаем фокус на ипуте
  useEffect(() => {
    firstInput.current.focus();
  }, []);

  // =========== Appearance ===============================================================
  return (
    <section className='movies'>
      <div className='movies__search'>
        <SearchForm
          value={value}
          onChange={handleChange}
          focus={firstInput}
          onSubmit={onSubmit}
        />
        <FilterCheckbox isSort={isShort} onChange={setIsShort} />
      </div>
      {showMovies().length === 0 ? (
        <NoMoviesResult />
      ) : (
        <MoviesCardList>
          {showMovies().map((movie) => (
            <MoviesCard
              key={movie.movieId}
              card={movie}
              handleDel={handleDel}
              savedMovies={savedMovies}
              fromSaved={true}
              removeDeletedCard={removeDeletedCard}
            />
          ))}
        </MoviesCardList>
      )}
    </section>
  );
}

export default SavedMovies;
