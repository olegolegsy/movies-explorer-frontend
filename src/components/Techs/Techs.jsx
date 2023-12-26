import React from 'react';
import './Techs.css';
import TechItem from '../TechItem/TechItem';
import { techArray } from '../../utils/constants';

function Techs() {
  return (
    <div className='tech'>
      <h2 className='tech__title'>{techArray.length} технологий</h2>
      <p className='tech__subtitle'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='tech__list'>
        {techArray.map((li) => (
          <TechItem key={li} name={li} />
        ))}
      </ul>
    </div>
  );
}

export default Techs;
