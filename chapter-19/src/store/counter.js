import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    value: 0,
    showCounter: true
};

const counterSlice =  createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.value++
        },
        increase(state, action) {
            state.value += action.payload
        },
        decrement(state) {
            state.value--
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;
