import React from 'react';
import banner from '../../images/promo__banner.svg';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img src={banner} alt='Баннер. Banner.' className='promo__img' />
    </section>
  );
}

export default Promo;
