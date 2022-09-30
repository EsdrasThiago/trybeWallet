import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { MapStateToProps } from 'react-redux';

class Header extends Component {
  state = {
    total: 0,
  };

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <div>
        <h3 data-testid="email-field">{email}</h3>
        <p data-testid="total-field">{total}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

Header.propTypes = {
}.isRequired;

export default connect(mapStateToProps)(Header);
