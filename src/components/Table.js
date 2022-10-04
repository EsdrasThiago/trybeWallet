import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>

            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </thead>
        {expenses.map((e) => (
          <tbody key={ e.id }>
            <tr>
              <td>{e.description}</td>
              <td>{e.tag}</td>
              <td>{e.method}</td>
              <td>{Number(e.value).toFixed(2)}</td>
              <td>{e.exchangeRates[e.currency].name}</td>
              <td>{e.currency}</td>
              <td>
                {(Number(e.exchangeRates[e.currency].ask))
                  .toFixed(2)}
                /
                {(Number(e.value) * Number(e.exchangeRates[e.currency].ask))
                  .toFixed(2)}
              </td>
              <td>Real</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.string).isRequired,
};

function mapStateToProps(state) {
  return state.wallet;
}

export default connect(mapStateToProps)(Table);
