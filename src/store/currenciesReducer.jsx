const initState = [
  { name: "USD", rate: 1 },
  { name: "EUR", rate: 1.2 },
  { name: "UAH", rate: 26 },
  { name: "RUB", rate: 80 },
];

export default function currenciesReducer(state = initState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
