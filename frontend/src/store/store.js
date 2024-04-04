import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer.js';
import walletReducer from './walletReducer.js';

const rootReducer = combineReducers({
    wallet: walletReducer,
    token: tokenReducer
});

export const store = configureStore({
    reducer: rootReducer,
})