import React from 'react';
import './PortfolioLink.css';
import { Link } from 'react-router-dom';

function PortfolioLink({ name, link }) {
  return (
    <li className='portfolio-item'>
      <Link className='portfolio-item__link' to={link} target='_blank'>
        <p className='portfolio-item__text'>{name}</p>
        <p className='portfolio-item__text_arrow'>↗</p>
      </Link>
    </li>
  );
}

export default PortfolioLink;
