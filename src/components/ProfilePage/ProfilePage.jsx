import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import ProfileInput from '../ProfileInput/ProfileInput';
import useForm from '../hooks/useForm';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { editUser } from '../../utils/MainApi';

function ProfilePage({ handleCurrentUser, handleIsLoggedIn }) {
  const [isEdit, setIsEdit] = useState(false);
  const [errorText, setErrorText] = useState('');
  const firstInput = useRef(null);
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const { handleChange, resetForm, value, error, isValid, isInputValid } =
    useForm();

  function goBack() {
    handleIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  }

  function handleError(err) {
    if (err === 'Ошибка: 409') {
      setErrorText('Пользователь с таким email уже существует.');
    } else {
      setErrorText('При обновлении профиля произошла ошибка.');
    }
  }

  function verifyUserDataUpdated() {
    return currentUser.name === value.profileName &&
      currentUser.email === value.profileEmail
      ? false
      : true;
  }

  function omSubmit(evt) {
    evt.preventDefault();
    editUser(value.profileName, value.profileEmail)
      .then(() => {
        handleCurrentUser({
          name: value.profileName,
          email: value.profileEmail,
        });
        setIsEdit(false);
      })
      .catch((err) => {
        handleError(err);
      })
      .finally(setErrorText(''));
  }

  useEffect(() => {
    resetForm({
      profileName: currentUser.name,
      profileEmail: currentUser.email,
    });
  }, [currentUser, isEdit]);

  useEffect(() => {
    if (isEdit) {
      firstInput.current.focus();
    }
  }, [isEdit]);

  return (
    <main className='profile-page'>
      <h1 className='profile-page__title'>Привет, {currentUser.name}</h1>
      <form className='profile-page__form' onSubmit={omSubmit}>
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
            <span className='profile-page__server-error'>{errorText}</span>
            <input
              disabled={isValid && verifyUserDataUpdated() ? false : true}
              type='submit'
              className={`profile-page__submit-btn hover-btn ${
                isValid && verifyUserDataUpdated()
                  ? ''
                  : 'profile-page__submit-btn_dis '
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
