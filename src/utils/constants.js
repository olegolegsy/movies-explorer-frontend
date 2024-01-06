export const techArray = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

export const arrayPortfolioLinks = [
  {
    name: 'Статичный сайт',
    link: 'https://olegolegsy.github.io/how-to-learn/',
  },
  {
    name: 'Адаптивный сайт',
    link: 'https://olegolegsy.github.io/russian-travel/',
  },
  {
    name: 'Одностраничное приложение',
    link: 'https://olegolegsy.github.io/mesto/',
  },
];

export const arrayFooterLinks = [
  { name: 'Яндекс.Практикум', link: 'https://practicum.yandex.ru/' },
  { name: 'Github', link: 'https://github.com/olegolegsy' },
];

export const arrayTabs = [
  { name: 'Главная', to: '/' },
  { name: 'Фильмы', to: '/movies' },
  { name: 'Сохранённые фильмы', to: '/saved-movies' },
];

export const signupErrorsTexts = {
  409: 'Пользователь с таким email уже существует.',
  500: 'При регистрации произошла ошибка.',
};

export const emailReg = '^\\S+@\\S+\\.\\S+$';
