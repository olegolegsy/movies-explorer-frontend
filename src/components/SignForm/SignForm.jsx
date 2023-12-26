import React, { useEffect, useRef } from 'react';
import './SignForm.css';
import useForm from '../hooks/useForm';
import SignInput from '../SignInput/SignInput';

// собираем тут объект с данными юзера и отправляем на сервер и в Контекст

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
  //type === 'signup'
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
            name='name'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            minlength={2}
            maxlength={30}
            focus={firstInput}
          />
          <SignInput
            label='E-mail'
            type='email'
            name='email'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
          />
          <SignInput
            label='Пароль'
            type='password'
            name='password'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            minlength={3}
            maxlength={20}
          />
        </fieldset>
      ) : (
        <fieldset className='sign-form__fieldset'>
          <SignInput
            label='E-mail'
            type='email'
            name='email'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            focus={firstInput}
          />
          <SignInput
            label='Пароль'
            type='password'
            name='password'
            value={value}
            onChange={handleChange}
            error={error}
            isInputValid={isInputValid}
            minlength={3}
            maxlength={20}
          />
        </fieldset>
      )}
      <input
        type='submit'
        className='sign-form__submit-btn'
        value={buttonName}
      ></input>
    </form>
  );
}

export default SignForm;
