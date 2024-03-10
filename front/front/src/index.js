import React from 'react';
import ReactDOM from 'react-dom/client';
import WalletList from './WalletList/WalletList';

import {store} from './store/store.js';
import { Provider } from 'react-redux';
import "./index.css";
import AddWallet from './AddWallet/AddWallet.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <WalletList/>
      <AddWallet/>
  </Provider>
);
