import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD

=======
import WalletList from './components/WalletList/WalletList';
>>>>>>> 4ff35137447bb2887e8f51207021bf4d3d56d921

import {store} from './store/store.js';
import { Provider } from 'react-redux';
import "./index.css";
<<<<<<< HEAD

import App from './App/App.js'
=======
import AddWallet from './components/AddWallet/AddWallet.js';
import AddToken from './components/AddToken/AddToken.js';
import TokenTable from './components/TokenTable/TokenTable.js';
>>>>>>> 4ff35137447bb2887e8f51207021bf4d3d56d921

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<<<<<<< HEAD
      <App/>
=======
      <WalletList/>
      <AddWallet/>
      <AddToken/>
      <TokenTable/>
>>>>>>> 4ff35137447bb2887e8f51207021bf4d3d56d921
  </Provider>
);