import { useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const {
        value: name,
        isValid: nameIsValid,
        hasError: inputNameHasError,
        onInputValueChange: onInputNameChange,
        onInputValueBlur: onInputNameBlur,
        reset: resetName,
    } = useInput(value => value.trim() !== '');

    const [email, setEmail] = useState('');
    const [emailIsTouched, setEmailIsTouched] = useState(false);

    const validateEmail = (email) => {
        const regexp = /\S+@\S+\.\S+/;
        return regexp.test(email);
    }

    const emailIsValid = validateEmail(email) && email.trim() !== '';
    const emailIsInvalid = !emailIsValid && emailIsTouched;

    let formIsValid = nameIsValid && emailIsValid;


    const onInputEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
        setEmailIsTouched(true);
    }

    const onInputEmailBlur = event => {
        setEmailIsTouched(true);
    }

    const onFormSubmit = event => {
        event.preventDefault();

        if (!nameIsValid) {
            return;
        }

        console.log(name, email); // send data
        resetName('');

        setEmail('');
        setEmailIsTouched(false);
    }


    return (
        <form onSubmit={onFormSubmit} className="form-control">
            <div className={ `form-control${inputNameHasError ? ' invalid' : '' }` }>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={onInputNameChange}
                    onBlur={onInputNameBlur}
                    value={name}
                />
                { inputNameHasError && <p className="error-text">Name is empty!</p>}
            </div>

            <div className={ `form-control${emailIsInvalid ? ' invalid' : '' }` }>
                <label htmlFor="name">Your Email</label>
                <input
                    type="text"
                    id="email"
                    onChange={onInputEmailChange}
                    onBlur={onInputEmailBlur}
                    value={email}
                />
                { emailIsInvalid && <p className="error-text">Email is not valid!</p>}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
