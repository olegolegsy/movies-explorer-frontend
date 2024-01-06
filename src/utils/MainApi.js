const BASE_URL = 'https://api.olegdiplom.nomoredomainsmonster.ru';

const isOk = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

// ========= auth ======================================================
export const signup = (username, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: username,
      email: email,
      password: password,
    }),
  }).then((res) => isOk(res));
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => isOk(res));
};

// ========= user ======================================================
export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${localStorage.jwt}` },
  }).then((res) => isOk(res));
};

export const editUser = (username, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify({
      name: username,
      email: email,
    }),
  }).then((res) => isOk(res));
};

// ========= movie =====================================================
export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: { Authorization: `Bearer ${localStorage.jwt}` },
  }).then((res) => isOk(res));
};

export const addMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      description: movie.description,
      year: movie.year,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then((res) => isOk(res));
};

export const delMovie = (movieID) => {
  return fetch(`${BASE_URL}/movies/${movieID}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${localStorage.jwt}` },
  }).then((res) => isOk(res));
};
