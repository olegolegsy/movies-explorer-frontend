import React from 'react';
import './MainSection.css';

function MainSection({ title, modification = '', children }) {
  // =========== Appearance ===============================================================
  return (
    <section
      className={`main-section ${
        modification ? `main-section_${modification}` : ''
      }`}
    >
      <h2
        className={`main-section__title ${
          modification ? `main-section__title_${modification}` : ''
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default MainSection;
