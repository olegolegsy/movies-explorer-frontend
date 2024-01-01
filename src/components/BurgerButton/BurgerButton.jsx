import React from 'react';
import './BurgerButton.css';
import open from '../../images/header-burger-btn.svg';
import close from '../../images/close-burger-btn-small.svg';

function BurgerButton({ isPopupOpen, handlePopupOpen }) {
  // =========== Appearance ===============================================================
  return (
    <img
      className={`burger-btn hover-btn ${isPopupOpen && 'burger-btn_active'}`}
      src={isPopupOpen ? close : open}
      alt={`${
        isPopupOpen
          ? 'Закрыть навигацию. Close Navigation'
          : 'Открыть навигацию. Open Navigation'
      }`}
      onClick={handlePopupOpen}
    />
  );
}

export default BurgerButton;
