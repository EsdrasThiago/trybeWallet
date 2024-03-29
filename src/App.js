import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

// import { economyApi } from './redux/actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </div>
    );
  }
}

export default connect()(App);
