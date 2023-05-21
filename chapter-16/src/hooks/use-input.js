import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false,
};
const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched: action.isTouched,
        }
    }

    if (action.type === 'TOUCH') {
        return {
            value: state.value,
            isTouched: true,
        }
    }

    if (action.type === 'RESET') {
        return {
            value: '',
            isTouched: false,
        }
    }


    return initialInputState;
};

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const onInputValueChange = event => {
        const value = event.target.value;

        dispatch({type: 'INPUT', value, isTouched: true});
    }

    const onInputValueBlur = () => {
        dispatch({type: 'TOUCH'});
    }

    const reset = () => {
        dispatch({type: 'RESET'});
    }

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        onInputValueChange,
        onInputValueBlur,
        reset,
    }
}

export default useInput;