import { initStateForRates } from "../configure";
import { ratesDataAPI } from "../api/api";

export const SET_NEW_RATES = "SET_NEW_RATES";

export default function currenciesReducer(state = initStateForRates, action) {
  switch (action.type) {
    case SET_NEW_RATES:
      return {
        ...state,
        allCurrencies: state.allCurrencies.map((el) => ({
          ...el,
          rate: el.name === "USD" ? 1 : action.payload[el.name],
        })),
      };
    default:
      return {
        ...state,
      };
  }
}

export const setNewRates = (newRates) => {
  return { type: SET_NEW_RATES, payload: newRates };
};

export const getNewRatesThunkCreator = () => {
  return (dispatch) => {
    ratesDataAPI.getRates().then((newRatesObj) => {
      dispatch(setNewRates(newRatesObj));
    });
  };
};
