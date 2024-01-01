import React from 'react';
import './AboutMe.css';
import avatar from '../../images/95f813539455a7ed0ea15fc7170ecd5b.jpg';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className='about-me'>
      <img className='about-me__img' src={avatar} alt='Студент. Student.' />

      <div className='about-me__container'>
        <h3 className='about-me__title'>Виталий</h3>
        <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <Link
          className='about-me__link hover-link '
          target='_blank'
          to='https://github.com/olegolegsy'
        >
          Github
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
