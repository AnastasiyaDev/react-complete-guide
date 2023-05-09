import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormOpenFlag, setFormOpenFlag] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        
        props.onSaveExpense(expenseData);
    };

    const onAddNewExpenseButtonClick = () => {
        setFormOpenFlag(true);
    }

    const onCancelButtonClick = () => {
        setFormOpenFlag(false);
    }

    return (
        <div className="new-expense">
            {
                isFormOpenFlag ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButtonClick={onCancelButtonClick} /> :
                <button type="button" onClick={onAddNewExpenseButtonClick}>Add New Expense</button>
            }
        </div>
    );
}

export default NewExpense;