import { useState } from 'react';

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [nameIsTouched, setNameIsTouched] = useState(false);
    const [email, setEmail] = useState('');
    const [emailIsTouched, setEmailIsTouched] = useState(false);

    const validateEmail = (email) => {
        const regexp = /\S+@\S+\.\S+/;
        return regexp.test(email);
    }

    const nameIsValid = name.trim() !== '';
    const nameIsInvalid = !nameIsValid && nameIsTouched;

    const emailIsValid = validateEmail(email) && email.trim() !== '';
    const emailIsInvalid = !emailIsValid && emailIsTouched;

    let formIsValid = nameIsValid && emailIsValid;


    const onInputNameChange = event => {
        const value = event.target.value;
        setName(value);
        setNameIsTouched(true);
    }

    const onInputEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
        setEmailIsTouched(true);
    }

    const onInputNameBlur = event => {
        setNameIsTouched(true);
    }

    const onInputEmailBlur = event => {
        setEmailIsTouched(true);
    }

    const onFormSubmit = event => {
        event.preventDefault();

        setNameIsTouched(true);

        if (!nameIsValid) {
            return;
        }

        console.log(name, email); // send data
        setName('');
        setEmail('');
        setNameIsTouched(false);
        setEmailIsTouched(false);
    }


    return (
        <form onSubmit={onFormSubmit} className="form-control">
            <div className={ `form-control${nameIsInvalid ? ' invalid' : '' }` }>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={onInputNameChange}
                    onBlur={onInputNameBlur}
                    value={name}
                />
                { nameIsInvalid && <p className="error-text">Name is empty!</p>}
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
