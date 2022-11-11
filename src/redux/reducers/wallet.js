// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { INITIAL_STATE } from './user';

import { DELETE_ECONOMY, ECONOMY_API, EXPENSIVES_ECONOMY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
  case ECONOMY_API:
    return { ...state, currencies: payload };
  case EXPENSIVES_ECONOMY:
    return { ...state,
      expenses: [...state.expenses, payload],
    };
  case DELETE_ECONOMY:
    return { ...state,
      expenses: payload };
  default:
    return state;
  }
}

export default wallet;
