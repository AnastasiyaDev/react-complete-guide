import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

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
            <ExpensesChart expenses={filterExpenses} />
            <ExpensesList items={filterExpenses} />
        </Card>
    );
}
export default Expenses;