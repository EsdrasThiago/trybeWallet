import React from 'react';
import store from '../redux/store';

class Wallet extends React.Component {
  render() {
    console.log(store.getState());
    return <div>TrybeWallet</div>;
  }
}

export default Wallet;
