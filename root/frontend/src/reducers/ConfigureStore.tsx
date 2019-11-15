
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
 
import { InterfaceReducer } from './reducer_userinterface/UserInterfaceReducer';
import { AllAppActions } from "./actions/AllActionsTypes";
import { AuthorizationReducer } from './reducer_authorization/AuthorizationReducer';

import {DataReducer} from './reducer_data/DataReducer';
export const rootReducer = combineReducers({
    InterfaceReducer, AuthorizationReducer, DataReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AllAppActions>)
);


