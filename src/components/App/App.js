import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  // =========== Data =====================================================================
  const [width, setWidth] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // =========== Logic ====================================================================
  function handlePopupOpen() {
    setIsPopupOpen((value) => !value);
  }

  // =========== Effects
  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [width]);

  // temp for logg
  // useEffect(() => {
  //   window.addEventListener('keydown', (evt) => {
  //     if (evt.key === 'F8') {
  //       setIsLoggedIn(!isLoggedIn);
  //     }
  //   });
  // }, [isLoggedIn]);

  // =========== Appearance ===============================================================
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <widthContext.Provider value={width}>
        <div className='App'>
          <Routes>
            <Route
              path='/signup'
              element={
                <SignPage type='signup'>
                  <SignForm type='signup' />
                </SignPage>
              }
            />
            <Route
              path='/signin'
              element={
                <SignPage type='signin'>
                  <SignForm type='signin' />
                </SignPage>
              }
            />
            <Route
              path='/'
              element={
                <>
                  <BurgerButton
                    isPopupOpen={isPopupOpen}
                    handlePopupOpen={handlePopupOpen}
                  />
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
                <>
                  <BurgerButton
                    isPopupOpen={isPopupOpen}
                    handlePopupOpen={handlePopupOpen}
                  />
                  <Header
                    isPopupOpen={isPopupOpen}
                    isLoggedIn={isLoggedIn}
                  ></Header>
                  <ProfilePage />
                  {isPopupOpen && <Navigation />}
                </>
              }
            />
            <Route
              path='/movies'
              element={
                <>
                  <BurgerButton
                    isPopupOpen={isPopupOpen}
                    handlePopupOpen={handlePopupOpen}
                  />
                  <Header
                    isPopupOpen={isPopupOpen}
                    isLoggedIn={isLoggedIn}
                  ></Header>
                  <Movies />
                  <Footer />
                  {isPopupOpen && <Navigation />}
                </>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <>
                  <BurgerButton
                    isPopupOpen={isPopupOpen}
                    handlePopupOpen={handlePopupOpen}
                  />
                  <Header
                    isPopupOpen={isPopupOpen}
                    isLoggedIn={isLoggedIn}
                  ></Header>
                  <SavedMovies />
                  <Footer />
                  {isPopupOpen && <Navigation />}
                </>
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
