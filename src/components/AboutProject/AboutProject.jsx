import React from 'react';
import './AboutProject.css';

function AboutProject() {
  // =========== Appearance ===============================================================
  return (
    <div className='about-project'>
      <div className='about-project__container'>
        <div className='about-project__container-text'>
          <p className='about-project__title'>
            Дипломный проект включал 5 этапов
          </p>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__container-text'>
          <p className='about-project__title'>
            На выполнение диплома ушло 5 недель
          </p>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__bar'>
        <p className='about-project__bar-item about-project__bar-item_back'>
          1 неделя
        </p>
        <p className='about-project__bar-item about-project__bar-item_front'>
          4 недели
        </p>
      </div>
      <div className='about-project__bar'>
        <p className='about-project__bar-item about-project__bar-item_back about-project__bar-item_down'>
          Back-end
        </p>
        <p className='about-project__bar-item about-project__bar-item_down about-project__bar-item_front'>
          Front-end
        </p>
      </div>
    </div>
  );
}

export default AboutProject;
