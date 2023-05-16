import { useState} from 'react';

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [nameIsTouched, setNameIsTouched] = useState(false);

    const onInputNameChange = event => {
        setName(event.target.value);
        setNameIsTouched(true);
        setNameIsValid(true);
    }

    const onFormSubmit = event => {
        event.preventDefault();

        setNameIsTouched(true);

        if (name.trim() === '') {
            setNameIsValid(false);
            return;
        }

        setNameIsValid(true);
        console.log(name);
    }

    const nameIsInvalid = !nameIsValid && nameIsTouched;
    const formClass = nameIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={onFormSubmit} className={formClass}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" onChange={onInputNameChange}/>
                { nameIsInvalid && <p className="error-text">Name is empty!</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
