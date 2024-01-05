import React from 'react';
import './SignInput.css';

function SignInput({
  label,
  type,
  name,
  value,
  onChange,
  error,
  isInputValid,
  minlength,
  maxlength,
  focus,
}) {
  return (
    <>
      <label className='sign-input__label'>{label}</label>
      <input
        className={`sign-input__input ${
          error[name] ? 'sign-input__input_error' : ''
        }`}
        type={type}
        name={name}
        value={value[name] ? value[name] : ''}
        onChange={onChange}
        required={true}
        minLength={minlength}
        maxLength={maxlength}
        ref={focus}
      ></input>
      <span className={`sign-input__error`}>{error[name]}</span>
    </>
  );
}

export default SignInput;
