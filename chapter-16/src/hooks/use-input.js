import { useState } from 'react';

const useInput = (validateValue) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(value);
    const hasError = !valueIsValid && isTouched;

    const onInputValueChange = event => {
        const value = event.target.value;
        setValue(value);
        setIsTouched(true);
    }

    const onInputValueBlur = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setValue('');
        setIsTouched(false);
    }

    return {
        value,
        isValid: valueIsValid,
        hasError,
        onInputValueChange,
        onInputValueBlur,
        reset,
    }
}

export default useInput;