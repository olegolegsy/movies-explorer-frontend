import { useCallback, useState } from 'react';

const useForm = () => {
  // =========== Data =====================================================================
  const [value, setValue] = useState({});
  const [error, setError] = useState({});
  const [isInputValid, setIsInputValid] = useState({});
  const [isValid, setIsValid] = useState(false);

  // =========== Logic ====================================================================
  const handleChange = (evt) => {
    const name = evt.target.name;

    setValue((prevValue) => {
      return { ...prevValue, [name]: evt.target.value };
    });

    setError((prevValue) => {
      return { ...prevValue, [name]: evt.target.validationMessage };
    });

    setIsInputValid((prevValue) => {
      return { ...prevValue, [name]: evt.target.validity.valid };
    });

    setIsValid(evt.target.form.checkValidity());
  };

  const resetForm = (data = {}) => {
    setValue(data);
    setError({});
    setIsValid(false);
    setIsInputValid({});
  };

  const setForm = useCallback((name, value) => {
    setValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }, []);

  // =========== Appearance ===============================================================
  return {
    handleChange,
    resetForm,
    setForm,
    value,
    error,
    isValid,
    isInputValid,
  };
};
export default useForm;
