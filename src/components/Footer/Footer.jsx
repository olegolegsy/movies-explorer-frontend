import React from 'react';
import './Footer.css';
import { arrayFooterLinks } from '../../utils/constants';
import FooterLink from '../FooterLink/FooterLink';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <ul className='footer__links'>
          {arrayFooterLinks.map((link) => (
            <FooterLink key={link.name} name={link.name} link={link.link} />
          ))}
        </ul>
        <p className='footer__copyrights'>©2024</p>
      </div>
    </footer>
  );
}

export default Footer;
