// Type definitions for redux-thunk v2.0.1
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare namespace ReduxThunk {
    export interface Thunk extends Redux.Middleware {}
    export interface ThunkInterface<S, R> {
      (dispatch: Redux.Dispatch<S>, getState?: () => S): R;
    }
}

declare namespace Redux {
    export interface Dispatch<S> {
        <R>(asyncAction: ReduxThunk.ThunkInterface<S, R>): R;
    }
}

declare module "redux-thunk" {
    var thunk: ReduxThunk.Thunk;
    export default thunk;
}
