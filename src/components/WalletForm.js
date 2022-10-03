import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expensivesEconomy, requestApi } from '../redux/actions';

class WalletForm extends Component {
  state = {
    currenciesArray: [],
    id: 0,
    value: '',
    description: '',
    tag: 'Alimentação',
    method: 'Dinheiro',
    currency: 'USD',
  };

  async componentDidMount() {
    const { currencies } = this.props;
    this.setState({
      currenciesArray: [...currencies],
    });
  }

  expenseAdd = async () => {
    const {
      id,
      tag,
      method,
      currency,
      value,
      description,
    } = this.state;
    const { dispatch } = this.props;
    const exchangeRates = await dispatch(requestApi('wallet'));
    let idNumber = id;
    const expensives = { id, value, method, tag, currency, description, exchangeRates };
    dispatch(expensivesEconomy(expensives));
    this.setState({
      id: idNumber += 1,
      description: '',
      value: '',
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      currenciesArray,
      tag,
      method,
      currency,
      value,
      description,
    } = this.state;
    return (
      <form>
        Despesas:
        <input
          type="text"
          data-testid="value-input"
          name="value"
          value={ value }
          onChange={ this.onInputChange }
        />
        Sobre:
        <input
          type="text"
          data-testid="description-input"
          name="description"
          value={ description }
          onChange={ this.onInputChange }
        />
        <label htmlFor="currency-input">
          Escolha:
          <select
            id="currency-input"
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.onInputChange }
          >
            {currenciesArray.map((element) => (
              <option key={ element } value={ element }>{element}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Escolha:
          <select
            id="method-input"
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.onInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Escolha:
          <select
            id="tag-input"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.onInputChange }
            name="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.expenseAdd }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state.wallet;
}

export default connect(mapStateToProps)(WalletForm);
