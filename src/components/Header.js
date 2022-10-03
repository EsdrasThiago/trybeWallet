import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  sumFunction = () => {
    const { props } = this;
    const { expenses } = props.wallet;
    return expenses.reduce((acc, cur) => {
      const moeda = cur.exchangeRates[cur.currency].ask;
      const value = Number(cur.value) * Number(moeda);
      return acc + value;
    }, 0);
  };

  render() {
    const { props } = this;
    const { email } = props.user;
    return (
      <div>
        <h3 data-testid="email-field">{email}</h3>
        <p data-testid="total-field">{this.sumFunction().toFixed(2)}</p>
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
