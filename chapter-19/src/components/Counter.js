import { useSelector, useDispatch  } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const showCounter = useSelector(state => state.showCounter);

    const incrementCounterHandler = () => {
        dispatch(counterActions.increment());
    }

    const increaseCounterHandler = () => {
        dispatch(counterActions.increase(5));
    }

    const decrementCounterHandler = () => {
        dispatch(counterActions.decrement());
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={ classes.counter }>
            <h1>Redux Counter</h1>
            { showCounter && <div className={ classes.value }> {counter} </div>}

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
