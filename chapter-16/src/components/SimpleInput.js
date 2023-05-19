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

    const {
        value: email,
        isValid: emailIsValid,
        hasError: inputEmailHasError,
        onInputValueChange: onInputEmailChange,
        onInputValueBlur: onInputEmailBlur,
        reset: resetEmail,
    } = useInput(value => value.trim() !== '' && /\S+@\S+\.\S+/.test(value));

    let formIsValid = nameIsValid && emailIsValid;

    const onFormSubmit = event => {
        event.preventDefault();

        console.log(name, email); // send data
        resetName();
        resetEmail();
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

            <div className={ `form-control${inputEmailHasError ? ' invalid' : '' }` }>
                <label htmlFor="name">Your Email</label>
                <input
                    type="text"
                    id="email"
                    onChange={onInputEmailChange}
                    onBlur={onInputEmailBlur}
                    value={email}
                />
                { inputEmailHasError && <p className="error-text">Email is not valid!</p>}
            </div>

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
