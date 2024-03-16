import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import walletReducer from './walletReducer.js';
import tokenReducer from './TokenReducer.js';

const rootReducer = combineReducers({
    wallet: walletReducer,
    token: tokenReducer
});

export const store = configureStore({
    reducer: rootReducer,
})