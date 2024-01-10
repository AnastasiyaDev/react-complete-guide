import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
};

const counterSlice =  createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        increase(state, action) {
            state.counter += action.payload
        },
        decrement(state) {
            state.counter--
        },
        toggle(state) {
            console.log(state.showCounter);
            state.showCounter = !state.showCounter
        },
    }
})

const store = configureStore({
    // для множества слайсов, но тогда будет state.counter.showCounter и state.counter.counter
    // reducer: {
    //     counter: counterSlice.reducer,
    // }
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
