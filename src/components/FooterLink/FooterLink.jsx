import React from 'react';
import './FooterLink.css';
import { Link } from 'react-router-dom';

function FooterLink({ name, link }) {
  return (
    <li className='footer-link hover-link '>
      <Link className='footer-link__link' to={link} target='_blank'>
        {name}
      </Link>
    </li>
  );
}

export default FooterLink;
