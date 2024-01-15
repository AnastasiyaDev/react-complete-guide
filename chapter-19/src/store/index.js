import { createSlice, configureStore } from '@reduxjs/toolkit';

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


const initialAuthState = {
    isAuthentication: false,
};

const authSlice =  createSlice({
    name: 'counter',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthentication = true;
        },
        logout(state) {
            state.isAuthentication = false;
        },
    }
});



const store = configureStore({
    // для множества слайсов, но тогда будет state.counter.showCounter и state.counter.counter
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
