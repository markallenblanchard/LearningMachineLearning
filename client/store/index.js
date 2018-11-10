import {createStore, applyMiddleware} from 'redux';
import testReducer from './testReducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(testReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
