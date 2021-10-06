import React from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
    const filterExpensesHandler = (option) => {
        console.log(option)
    };

    return (
        <Card className="expenses">
            <ExpensesFilter defaultYear="2020" onFilterExpenses={filterExpensesHandler} />
            {props.items.map((expense) => {
                return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
            })}
        </Card>
    );
}
export default Expenses;