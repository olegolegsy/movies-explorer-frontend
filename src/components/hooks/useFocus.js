import { useRef, useEffect } from 'react';

const useFocus = () => {
  const firstInput = useRef(null);

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  return firstInput;
};

export default useFocus;
