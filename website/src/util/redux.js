import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function makeStore(reducers, ...otherMiddleware) {
    return createStore(
        combineReducers(reducers),
        composeEnhancers(applyMiddleware(thunk, ...otherMiddleware))
    );
}
