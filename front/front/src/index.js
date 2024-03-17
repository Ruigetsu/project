import React from 'react';
import ReactDOM from 'react-dom/client';
import WalletList from './components/WalletList/WalletList';

import {store} from './store/store.js';
import { Provider } from 'react-redux';
import "./index.css";
import AddWallet from './components/AddWallet/AddWallet.js';
import AddToken from './components/AddToken/AddToken.js';
import TokenTable from './components/TokenTable/TokenTable.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <WalletList/>
      <AddWallet/>
      <AddToken/>
      <TokenTable/>
  </Provider>
);