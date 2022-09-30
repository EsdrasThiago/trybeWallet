export const SAVE_EMAIL = 'SAVE_EMAIL';
export const saveEmail = (payload) => ({ type: SAVE_EMAIL, payload });

export const ECONOMY_API = 'ECONOMY_API';
export const economyApi = (payload) => ({ type: ECONOMY_API, payload });

export const requestApi = () => async (dispatch) => {
  const endpoint = 'https://economia.awesomeapi.com.br/json/all';
  const data = await fetch(endpoint);
  const cambio = await data.json();
  const cambioArray = [...Object.keys(cambio)];
  const removeUSDT = cambioArray.filter((element) => (element !== 'USDT'
    ? element
    : null));
  dispatch(economyApi(removeUSDT));
};
