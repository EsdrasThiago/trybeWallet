// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { INITIAL_STATE } from './user';

import { ECONOMY_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ECONOMY_API:
    return { ...state, currencies: [...action.payload] };
  default:
    return state;
  }
}

export default wallet;
