import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    
    const onChangeAmount = (event) => {
        setAmount(event.target.value);
    }
    
    const onChangeDate = (event) => {
        setDate(event.target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();

        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date),
        };

        props.onSaveExpenseData(expenseData);
        resetFormData();
        props.onCancelButtonClick();
    }
    
    const resetFormData = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form action="" onSubmit={onSubmitForm}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={onChangeTitle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={onChangeAmount} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={onChangeDate}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancelButtonClick}>Cancel</button>
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;