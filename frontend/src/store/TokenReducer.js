import { createReducer } from "@reduxjs/toolkit";
import { fetchAllBalances } from "../requests/balanceApi";

const tokenReducer = createReducer(await fetchAllBalances(), (builder) => {
    builder
        .addCase('ADD_TOKEN', (state, action) => {
            return [...state, action.payload];
        })
        .addCase('REMOVE_TOKEN', (state, action) => {
            return state.filter(
                (token, i) => token.id !== action.payload
            );
        })
        .addCase('UPDATE_TOKEN', (state, action) => {
            return state.map(element => {
                if (element.id === action.payload.id) 
                    return element = action.payload;
                else 
                    return element;
            });
        })
});

export default tokenReducer;