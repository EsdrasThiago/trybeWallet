import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  state = {
    currenciesArray: [],
  };

  componentDidMount() {
    const { currencies } = this.props;
    this.setState({
      currenciesArray: [...currencies],
    });
  }

  render() {
    const { currenciesArray } = this.state;
    return (
      <form>
        Despesas:
        <input type="text" data-testid="value-input" />
        Sobre:
        <input type="text" data-testid="description-input" />
        <label htmlFor="currency-input">
          Escolha:
          <select
            id="currency-input"
            data-testid="currency-input"
          >
            {currenciesArray.map((element) => (
              <option key={ element } value="moeda">{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Escolha:
          <select
            id="method-input"
            data-testid="method-input"
          >
            <option value="method">Dinheiro</option>
            <option value="method">Cartão de crédito</option>
            <option value="method">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Escolha:
          <select
            id="tag-input"
            data-testid="tag-input"
          >
            <option value="motivo">Alimentação</option>
            <option value="motivo">Lazer</option>
            <option value="motivo">Trabalho</option>
            <option value="motivo">Transporte</option>
            <option value="motivo">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return state.wallet;
}

WalletForm.propTypes = {
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
