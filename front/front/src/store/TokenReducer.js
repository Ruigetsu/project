import { createReducer } from "@reduxjs/toolkit";
import { fetchAllBalances } from "../requests/BalanceApi";

const tokenReducer = createReducer(await fetchAllBalances(), (builder) => {
    builder
        .addCase('ADD_TOKEN', (state, action) => {
            return [...state, action.payload];
        })
        .addCase('REMOVE_WALLET', (state, action) => {
            return state.filter(
                (token, i) => token.id !== action.payload
            );
        });
  });
export default tokenReducer;