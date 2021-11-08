const initState = {
  fields: {
    price: "",
    time: "",
    currency: "",
  },
  submitToggler: false,
};

export const SUBMIT_FIELDS_DATA = "SUBMIT_FIELDS_DATA";
export const CHANGE_SUBMIT_TOGGLER = "CHANGE_SUBMIT_TOGGLER";

export default function mainReducer(state = initState, action) {
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
    case CHANGE_SUBMIT_TOGGLER:
      console.log("should invoke toggler");
      return {
        ...state,
        submitToggler: !state.submitToggler,
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

export const changeSubmitToggler = () => {
  return {
    type: CHANGE_SUBMIT_TOGGLER,
  };
};
