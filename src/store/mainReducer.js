import { initStateMain } from "../configure";

export const SUBMIT_FIELDS_DATA = "SUBMIT_FIELDS_DATA";

export default function mainReducer(state = initStateMain, action) {
  switch (action.type) {
    case SUBMIT_FIELDS_DATA:
      return {
        ...state,
        fields: {
          ...state.fields,
          price: action.payload.price,
          time: action.payload.time,
          currency: action.payload.currency,
        },
      };
    default:
      return {
        ...state,
      };
  }
}

export const submitFieldsData = (val) => {
  return {
    type: SUBMIT_FIELDS_DATA,
    payload: val,
  };
};
