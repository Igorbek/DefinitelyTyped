/// <reference path="./redux.d.ts" />

function counter(state: any, action: any) {
    if (!state) {
        state = 0;
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function loggingMiddleware() {
    return <S>(next: Redux.Dispatch<S>) => (action: any) => {
        console.log(action.type);
        next(action);
    };
}

let store = Redux.createStore(counter, Redux.applyMiddleware(loggingMiddleware));

store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' });
