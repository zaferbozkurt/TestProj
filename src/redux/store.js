import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);

const middleware = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
