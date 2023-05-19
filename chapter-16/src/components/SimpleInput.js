import { useState} from 'react';

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [nameIsTouched, setNameIsTouched] = useState(false);

    const nameIsValid = name.trim() !== '';
    const nameIsInvalid = !nameIsValid && nameIsTouched;

    const onInputNameChange = event => {
        const value = event.target.value;
        setName(value);
        setNameIsTouched(true);
    }

    const onInputBlur = event => {
        setNameIsTouched(true);
    }

    const onFormSubmit = event => {
        event.preventDefault();

        setNameIsTouched(true);

        if (!nameIsValid) {
            return;
        }

        console.log(name); // send data
        setName('');
        setNameIsTouched(false);
    }

    const formClass = nameIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={onFormSubmit} className={formClass}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={onInputNameChange}
                    onBlur={onInputBlur}
                    value={name}
                />
                { nameIsInvalid && <p className="error-text">Name is empty!</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
