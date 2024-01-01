import React from 'react';
import PortfolioLink from '../PortfolioLink/PortfolioLink';
import './Portfolio.css';

import { arrayPortfolioLinks } from '../../utils/constants';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        {arrayPortfolioLinks.map((link) => (
          <PortfolioLink key={link.name} name={link.name} link={link.link} />
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
