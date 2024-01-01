import React, { useContext } from 'react';
import './NavTab.css';
import { NavLink } from 'react-router-dom';
import widthContext from '../contexts/widthContext';

function NavTab() {
  const width = useContext(widthContext);
  // =========== Appearance ===============================================================
  return (
    <nav className='nav-tab'>
      {width < 1280 && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'nav-tab__link_active hover-link '
              : 'nav-tab__link hover-link '
          }
          to='/'
        >
          Главная
        </NavLink>
      )}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'nav-tab__link_active hover-link '
            : 'nav-tab__link hover-link '
        }
        to='/movies'
      >
        Фильмы
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'nav-tab__link_active hover-link '
            : 'nav-tab__link hover-link '
        }
        to='/saved-movies'
      >
        Сохранённые фильмы
      </NavLink>
    </nav>
  );
}

export default NavTab;
