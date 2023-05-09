import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

const Modal = (props) => {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onClickConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onClickConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    )
}

const ErrorModal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Modal onClickConfirm={props.onClickConfirm} title={props.title} message={props.message}/>,
                document.getElementById('modal-root')
            )}
        </>
    )
}

export default ErrorModal;
