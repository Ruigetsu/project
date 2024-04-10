function addWallet(wallet) {
    return {
      type: 'ADD_WALLET',
      payload: wallet,
    };
}

function removeWallet(id) {
    return {
      type: 'REMOVE_WALLET',
      payload: id,
    };
}

function addToken(token) {
    return {
      type: 'ADD_TOKEN',
      payload: token,
    };
}

function updateAllToken(tokens) {
  return {
    type: 'UPDATE_ALL_TOKEN',
    payload: tokens,
  };
}

function updateToken(token) {
  return {
    type: 'UPDATE_TOKEN',
    payload: token,
  };
}

function removeToken(id) {
    return {
      type: 'REMOVE_TOKEN',
      payload: id,
    };
}

function updateWallet(wallet) {
    return {
      type: 'UPDATE_WALLET',
      payload: wallet,
    }
}

export { addWallet, addToken, removeToken, removeWallet, updateAllToken, updateToken, updateWallet};