import React, { useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useForm from '../hooks/useForm';

function Movies() {
  // =========== Data =====================================================================
  const [isShort, setIsShort] = useState(true);
  // =========== Logic ====================================================================
  const { handleChange, resetForm, setForm, value } = useForm();
  // =========== Appearance ===============================================================
  return (
    <section className='movies'>
      <form className='movies__search'>
        <SearchForm value={value} onChange={handleChange} />
        <FilterCheckbox isSort={isShort} onChange={setIsShort} />
      </form>
    </section>
  );
}

export default Movies;

// form
//fieldset text
//fieldset isShort
