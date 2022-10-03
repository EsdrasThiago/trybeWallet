import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expensivesEconomy } from '../redux/actions';

class WalletForm extends Component {
  state = {
    currenciesArray: [],
    id: 0,
    value: '',
    description: '',
    tag: 'Alimentação',
    method: 'Dinheiro',
    moeda: 'USD',
    exchangeRates: [],
  };

  componentDidMount() {
    const { currencies } = this.props;
    this.setState({
      exchangeRates: currencies,
    });
    const cambioArray = (Object.keys(currencies));
    this.setState({
      currenciesArray: [...cambioArray],
    });
  }

  expenseAdd = () => {
    const {
      id,
      tag,
      method,
      moeda,
      value,
      description,
      exchangeRates,
    } = this.state;
    const { dispatch } = this.props;
    let idNumber = id;
    const expensives = { id, value, method, tag, moeda, description, exchangeRates };
    dispatch(expensivesEconomy(expensives));
    this.setState({
      id: idNumber += 1,
    });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      currenciesArray,
      tag,
      method,
      moeda,
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
            name="moeda"
            value={ moeda }
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

function mapStateToProps(state) {
  return state.wallet;
}

WalletForm.propTypes = {
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
