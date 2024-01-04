import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import BurgerButton from '../BurgerButton/BurgerButton';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';
import SignPage from '../SignPage/SignPage';
import SignForm from '../SignForm/SignForm';
import ProfilePage from '../ProfilePage/ProfilePage';
import Movies from '../Movies/Movies';

import CurrentUserContext from '../contexts/CurrentUserContext';
import widthContext from '../contexts/widthContext';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  getUser,
  getSavedMovies,
  delMovie,
  addMovie,
} from '../../utils/MainApi';

function App() {
  // =========== Data =====================================================================
  const [width, setWidth] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.jwt);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  // =========== Logic ====================================================================

  const navigate = useNavigate();

  function handleDelSavedMovie(cardID, ref) {
    delMovie(ref._id).then(() => {
      setSavedMovies(savedMovies.filter((movie) => movie.movieId !== cardID));
    });
  }

  function handleAddSavedMovie(card, ref) {
    addMovie(card).then((res) => {
      ref.current = res;
      setSavedMovies((value) => [res, ...value]);
    });
  }

  function handlePopupOpen() {
    setIsPopupOpen((value) => !value);
  }

  function handleIsLoggedIn(value) {
    setIsLoggedIn(value);
  }

  function handleCurrentUser(value) {
    setCurrentUser(value);
  }
  // =========== Effects
  useEffect(() => {
    getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.error(`Ошибка при загрузке SavedMovies: ${err}`);
      });
  }, []);
  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [width]);

  useEffect(() => {
    if (isLoggedIn) {
      getUser()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.error(err));
    }
  }, [isLoggedIn]);

  // with dep (чтобы неразлогиниться)
  useEffect(() => {
    if (localStorage.jwt) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [navigate]);

  // =========== Appearance ===============================================================
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <widthContext.Provider value={width}>
        <div className='App'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  {isLoggedIn && (
                    <BurgerButton
                      isPopupOpen={isPopupOpen}
                      handlePopupOpen={handlePopupOpen}
                    />
                  )}

                  <Header isLoggedIn={isLoggedIn}></Header>
                  <Main />
                  <Footer />
                  {isPopupOpen && <Navigation />}
                </>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <BurgerButton
                      isPopupOpen={isPopupOpen}
                      handlePopupOpen={handlePopupOpen}
                    />
                    <Header
                      isPopupOpen={isPopupOpen}
                      isLoggedIn={isLoggedIn}
                    ></Header>
                    <ProfilePage
                      handleCurrentUser={handleCurrentUser}
                      handleIsLoggedIn={handleIsLoggedIn}
                    />
                    {isPopupOpen && <Navigation />}
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <BurgerButton
                      isPopupOpen={isPopupOpen}
                      handlePopupOpen={handlePopupOpen}
                    />
                    <Header
                      isPopupOpen={isPopupOpen}
                      isLoggedIn={isLoggedIn}
                    ></Header>
                    <Movies
                      handleDel={handleDelSavedMovie}
                      handleAdd={handleAddSavedMovie}
                      savedMovies={savedMovies}
                    />
                    <Footer />
                    {isPopupOpen && <Navigation />}
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <BurgerButton
                      isPopupOpen={isPopupOpen}
                      handlePopupOpen={handlePopupOpen}
                    />
                    <Header
                      isPopupOpen={isPopupOpen}
                      isLoggedIn={isLoggedIn}
                    ></Header>
                    <SavedMovies
                      handleDel={handleDelSavedMovie}
                      savedMovies={savedMovies}
                    />
                    <Footer />
                    {isPopupOpen && <Navigation />}
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path='/signup'
              element={
                isLoggedIn ? (
                  <Navigate to='/movies' />
                ) : (
                  <SignPage type='signup'>
                    <SignForm
                      key='signup'
                      type='signup'
                      handleIsLoggedIn={handleIsLoggedIn}
                    />
                  </SignPage>
                )
              }
            />
            <Route
              path='/signin'
              element={
                isLoggedIn ? (
                  <Navigate to='/movies' />
                ) : (
                  <SignPage type='signin'>
                    <SignForm
                      key='signin'
                      type='signin'
                      handleIsLoggedIn={handleIsLoggedIn}
                    />
                  </SignPage>
                )
              }
            />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </widthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

//Header - Logo, Account
//Navigation
//Footer

//Main r=/
//  Promo
//  NavTab - ?
//  AboutProject - MainSection + children
//  Techs - MainSection + children - TechCardsComponents
//  AboutMe - MainSection + children
//  Portfolio - LinkComponents

//Register r=/signup
//Login r=/signin
//Profile r=/profile

//Movies r=/movies
//  SearchForm
//  Preloader
//  MoviesCardList
//  MoviesCard

//SavedMovies r=/saved-movies
//  MoviesCardList
//  MoviesCard

//component
// =========== Data =====================================================================
// =========== Logic ====================================================================
// =========== Appearance ===============================================================
