import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    total: 0,
  };

  render() {
    const { props } = this;
    const { email } = props.user;
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
  return state;
}

Header.propTypes = {
}.isRequired;

export default connect(mapStateToProps)(Header);
