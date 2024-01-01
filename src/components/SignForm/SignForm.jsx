import React, { useEffect, useRef } from 'react';
import './SignForm.css';
import useForm from '../hooks/useForm';
import useFocus from '../hooks/useFocus';
import SignInput from '../SignInput/SignInput';

// собираем тут объект с данными юзера и отправляем на сервер и в Контекст
// обработка api и state с serverError

function SignForm({ type }) {
  // =========== Data =====================================================================
  const firstInput = useRef(null);
  const buttonName = type === 'signup' ? 'Зарегистрироваться' : 'Войти';
  // =========== Logic ====================================================================

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
    firstInput.current.focus();
  }, []);
  // =========== Appearance ===============================================================
  return (
    <form className='sign-form' onSubmit={setForm} noValidate=''>
      {type === 'signup' ? (
        <fieldset className='sign-form__fieldset'>
          <SignInput
            label='Имя'
            type='text'
            name='nameSignIn'
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
            name='emailSignIn'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            key={'signup-email'}
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
            key={'signup-password'}
          />
        </fieldset>
      ) : (
        <fieldset className='sign-form__fieldset'>
          <SignInput
            label='E-mail'
            type='email'
            name='emailSignUp'
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
            name='passwordSignUp'
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
        <span className='sign-form__server-error'></span>
        <input
          disabled={isValid ? 'false' : 'true'}
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
