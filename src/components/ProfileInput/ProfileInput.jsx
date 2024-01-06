import React from 'react';
import './ProfileInput.css';

function ProfileInput({
  label,
  type,
  name,
  value,
  onChange,
  error,
  minlength,
  maxlength,
  focus,
  isEdit,
  pattern,
}) {
  return (
    <>
      <label className='profile-input__label'>
        {label}
        <input
          className={`profile-input__input ${
            error[name] ? 'profile-input__input_error' : ''
          } ${isEdit ? 'profile-input__input_edit' : ''}`}
          type={type}
          name={name}
          value={value[name] ? value[name] : ''}
          onChange={onChange}
          required={true}
          minLength={minlength}
          maxLength={maxlength}
          ref={focus}
          pattern={pattern}
          disabled={isEdit ? false : true}
        ></input>
      </label>
    </>
  );
}

export default ProfileInput;
