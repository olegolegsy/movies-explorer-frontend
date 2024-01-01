import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isSort, onChange }) {
  return (
    <div className='filter-checkbox'>
      <svg
        className='filter-checkbox__svg hover-btn'
        width='36'
        height='20'
        viewBox='0 0 36 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        onClick={() => onChange((value) => !value)}
      >
        <g id='smalltumb'>
          <rect
            className={`filter-checkbox__svg-rect ${
              !isSort && 'filter-checkbox__svg-rect_active'
            }`}
            id='tumb__COLOR:tumbler-on'
            width='36'
            height='20'
            rx='10'
            fill='#343434'
          />
          <circle
            className={`filter-checkbox__svg-circle ${
              !isSort && 'filter-checkbox__svg-circle_active'
            }`}
            id='tumb__COLOR:tumbler-on-2'
            cx='26'
            cy='10'
            r='8'
            fill='#2BE080'
          />
          <circle
            cx='26'
            cy='10'
            r='7.5'
            stroke='white'
            className={`filter-checkbox__svg-circle-border ${
              !isSort && 'filter-checkbox__svg-circle-border_active'
            }`}
          />
        </g>
      </svg>
      <span className='filter-checkbox__label'>Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
