import { useSelector, useDispatch  } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementCounterHandler = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const increaseCounterHandler = () => {
        dispatch({ type: 'INCREASE', amount: 5 });
    }

    const decrementCounterHandler = () => {
        dispatch({ type: 'DECREMENT' });
    }

    const toggleCounterHandler = () => {
    };

    return (
        <main className={ classes.counter }>
            <h1>Redux Counter</h1>
            <div className={ classes.value }> {counter} </div>
            <div>
                <button onClick={ incrementCounterHandler }>Increment</button>
                <button onClick={ increaseCounterHandler }>increase by 5</button>
                <button onClick={ decrementCounterHandler }>Decrement</button>
            </div>
            <button onClick={ toggleCounterHandler }>Toggle Counter</button>
        </main>
    );
};

export default Counter;
