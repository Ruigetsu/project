import { createAction, createReducer } from "@reduxjs/toolkit";
import { fetchAllBalances } from "../requests/WalletApi";

const walletReducer = createReducer(await fetchAllBalances(), (builder) => {
    builder
        .addCase('ADD_TOKEN', (state, action) => {
            return [...state, action.payload];
        })
  });
export default walletReducer;