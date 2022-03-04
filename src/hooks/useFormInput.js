import { useState } from 'react';

const useFormInput = ({ initialValue = '', invalidMessage = 'Lütfen geçerli bir değer giriniz' } = {}) => {
  const [value, setValue] = useState(initialValue);
  const [invalid, setInvalid] = useState(false);
  const [invalidMessageValue, setInvalidMessage] = useState(invalidMessage);

  const onChangeText = (e) => {
    const newValue = e;

    setValue(newValue);
  };

  return {
    value,
    onChangeText,
    invalid,
    setInvalid,
    invalidMessage: invalidMessageValue,
    setInvalidMessage
  };
};

export default useFormInput;
