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
        });
});

export default tokenReducer;