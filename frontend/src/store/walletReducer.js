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
        })
        .addCase('UPDATE_WALLET', (state, action) => {
            return state.map(element => {
                if (element.id === action.payload.id) 
                    return action.payload
                else
                    return  element;
            })
        })
});

export default walletReducer;