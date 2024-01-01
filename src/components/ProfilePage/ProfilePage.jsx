import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import ProfileInput from '../ProfileInput/ProfileInput';
import useForm from '../hooks/useForm';

function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false);
  const firstInput = useRef(null);

  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  const {
    handleChange,
    resetForm,
    setForm,
    value,
    error,
    isValid,
    isInputValid,
  } = useForm();

  useEffect(() => {
    if (isEdit) {
      firstInput.current.focus();
    }
  }, [isEdit]);

  return (
    <main className='profile-page'>
      <h1 className='profile-page__title'>Привет,</h1>
      <form className='profile-page__form'>
        <fieldset className='profile-page__fieldset'>
          <ProfileInput
            label={'Имя'}
            type={'text'}
            name='profileName'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            minlength={2}
            maxlength={30}
            focus={firstInput}
            isEdit={isEdit}
          />
          <ProfileInput
            label={'E-mail'}
            type={'email'}
            name='profileEmail'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            isEdit={isEdit}
          />
        </fieldset>
        {isEdit ? (
          <fieldset className='profile-page__fieldset profile-page__fieldset_btn'>
            <span className='profile-page__server-error'></span>
            <input
              disabled={isValid ? 'false' : 'true'}
              type='submit'
              className={`profile-page__submit-btn hover-btn ${
                isValid ? '' : 'profile-page__submit-btn_dis '
              }`}
              value={'Сохранить'}
            />
          </fieldset>
        ) : (
          <div className='profile-page__container-links '>
            <span
              className='profile-page__link-edit hover-link'
              onClick={() => setIsEdit((value) => !value)}
            >
              Редактировать
            </span>
            <span
              className='profile-page__link-exit hover-link'
              onClick={goBack}
            >
              Выйти из аккаунта
            </span>
          </div>
        )}
      </form>
    </main>
  );
}

export default ProfilePage;
