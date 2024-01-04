import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignForm.css';
import useForm from '../hooks/useForm';
import SignInput from '../SignInput/SignInput';
import { signin, signup } from '../../utils/MainApi';

// собираем тут объект с данными юзера и отправляем на сервер и в Контекст
// обработка api и state с serverError

function SignForm({ type, handleIsLoggedIn }) {
  // =========== Data =====================================================================
  const [textError, setTextError] = useState('');
  const firstInput = useRef(null);
  const buttonName = type === 'signup' ? 'Зарегистрироваться' : 'Войти';

  // =========== Logic ====================================================================
  const navigate = useNavigate();
  const {
    handleChange,
    resetForm,
    setForm,
    value,
    error,
    isValid,
    isInputValid,
  } = useForm();

  function handleErorr(err) {
    if (type === 'signup') {
      setTextError('При регистрации пользователя произошла ошибка.');
      // if (err === 'Ошибка: 409') {
      //   setTextError('Пользователь с таким email уже существует.');
      // } else {
      //   setTextError('При регистрации пользователя произошла ошибка.');
      // }
    } else {
      setTextError('При входе произошла ошибка.');
      // if (err === 'Ошибка: 409') {
      //   setTextError('Пользователь с таким email уже существует.');
      // } else {
      //   setTextError('При регистрации пользователя произошла ошибка.');
      // }
    }
  }

  function onSubmit(evt) {
    evt.preventDefault();
    if (type === 'signup') {
      handleSignup(value.nameSignUp, value.emailSignUp, value.passwordSignUp);
    } else {
      handleSignin(value.emailSignIn, value.passwordSignIn);
    }
  }

  function handleSignin(email, password) {
    signin(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        handleIsLoggedIn(true);
        //navigate('/movies');
      })
      .catch((err) => {
        setTextError(err);
        console.error(`${err}`);
      })
      .finally(setTextError(''));
  }

  function handleSignup(username, email, password) {
    signup(username, email, password)
      .then((res) => {
        if (res) {
          handleIsLoggedIn(false);
          handleSignin(email, password);
        }
      })
      .catch((err) => {
        handleErorr(err);
        console.error(`${err}`);
      })
      .finally(setTextError(''));
  }

  useEffect(() => {
    firstInput.current.focus();
  }, []);
  // =========== Appearance ===============================================================
  return (
    <form className='sign-form' noValidate='' onSubmit={onSubmit}>
      {type === 'signup' ? (
        <fieldset className='sign-form__fieldset'>
          <SignInput
            label='Имя'
            type='text'
            name='nameSignUp'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            minlength={2}
            maxlength={30}
            focus={firstInput}
            key={'signup-name'}
          />
          <SignInput
            label='E-mail'
            type='email'
            name='emailSignUp'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            key={'signup-email'}
          />
          <SignInput
            label='Пароль'
            type='password'
            name='passwordSignUp'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            minlength={3}
            maxlength={20}
            key={'signup-password'}
          />
        </fieldset>
      ) : (
        <fieldset className='sign-form__fieldset'>
          <SignInput
            label='E-mail'
            type='email'
            name='emailSignIn'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            focus={firstInput}
            key={'signin-email'}
          />
          <SignInput
            label='Пароль'
            type='password'
            name='passwordSignIn'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            minlength={3}
            maxlength={20}
            key={'signin-password'}
          />
        </fieldset>
      )}
      <fieldset className='sign-form__fieldset'>
        {/* ERROR HOLDER HERE */}
        <span className='sign-form__server-error'>{textError}</span>
        <input
          disabled={isValid ? false : true}
          type='submit'
          className={`sign-form__submit-btn hover-btn ${
            isValid ? '' : 'sign-form__submit-btn_dis '
          }`}
          value={buttonName}
        ></input>
      </fieldset>
    </form>
  );
}

export default SignForm;
