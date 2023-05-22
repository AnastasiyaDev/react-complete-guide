import { useRef, useState } from 'react';

import classes from './Checkout.module.css';


const isEmpty = value => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;


const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const street = streetInputRef.current.value;
        const postal = postalInputRef.current.value;
        const city = cityInputRef.current.value;

        const nameIsValid = !isEmpty(name);
        const streetIsValid = !isEmpty(street);
        const cityIsValid = !isEmpty(city);
        const postalCodeIsValid = isFiveChars(postal);

        setFormInputsValidity({
            name: nameIsValid,
            street: streetIsValid,
            city: cityIsValid,
            postalCode: postalCodeIsValid,
        });

        const formIsValid =
            nameIsValid &&
            streetIsValid &&
            cityIsValid &&
            postalCodeIsValid;

        if (!formIsValid) {
            return;
        }

        props.onSubmit({
            name,
            street,
            city,
            postal,
        });
    };

    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
    }`;
    const streetControlClasses = `${classes.control} ${
        formInputsValidity.street ? '' : classes.invalid
    }`;
    const postalCodeControlClasses = `${classes.control} ${
        formInputsValidity.postalCode ? '' : classes.invalid
    }`;
    const cityControlClasses = `${classes.control} ${
        formInputsValidity.city ? '' : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={onFormSubmit}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputsValidity.postalCode && (
                    <p>Please enter a valid postal code (5 characters long)!</p>
                )}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;