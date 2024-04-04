import { createReducer } from "@reduxjs/toolkit";
import { fetchAllWallets } from "../requests/walletApi";

const walletReducer = createReducer(await fetchAllWallets(), (builder) => {
    builder
        .addCase('ADD_WALLET', (state, action) => {
            return [...state, action.payload];
        })
        .addCase('REMOVE_WALLET', (state, action) => {
            return state.filter(
                (wallet, i) => wallet.id !== action.payload
            );
        });
});

export default walletReducer;