import React from 'react';
import './NavTab.css';
import { NavLink } from 'react-router-dom';

function NavTab() {
  // =========== Appearance ===============================================================
  return (
    <nav className='nav-tab'>
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
