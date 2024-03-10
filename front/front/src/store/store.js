import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import walletReducer from './walletReducer.js';

const rootReducer = combineReducers({
    wallet: walletReducer
});

export const store = configureStore({
    reducer: rootReducer,
})