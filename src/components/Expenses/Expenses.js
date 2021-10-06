import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2021');

    const filterExpensesHandler = (option) => {
        setYear(option);
    };

    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onFilterExpenses={filterExpensesHandler} />
            {filterExpenses.map((expense) => {
                return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
            })}
        </Card>
    );
}
export default Expenses;