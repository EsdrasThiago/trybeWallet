export const SAVE_EMAIL = 'SAVE_EMAIL';
export const saveEmail = (payload) => ({ type: SAVE_EMAIL, payload });

export const ECONOMY_API = 'ECONOMY_API';
export const economyApi = (payload) => ({ type: ECONOMY_API, payload });

export const EXPENSIVES_ECONOMY = 'EXPENSIVES_ECONOMY';
export const expensivesEconomy = (payload) => ({ type: EXPENSIVES_ECONOMY, payload });

export const requestApi = (local) => async (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const data = await fetch(endpoint);
  const cambio = await data.json();
  delete cambio.USDT;
  const cambioArray = (Object.keys(cambio));
  if (local === 'login') {
    dispatch(economyApi(cambioArray));
  } if (local === 'wallet') {
    return cambio;
  }
};
