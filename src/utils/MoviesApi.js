class Api {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _isOk(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getMoviesBeatfilm() {
    return fetch(this._url, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._isOk);
  }
}

const apiBeatfilm = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  //baseUrl: 'http://localhost:3001',
});

export default apiBeatfilm;
