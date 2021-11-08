const initState = {
  allCurrencies: [
    { name: "USD", rate: 1, symbol: "$" },
    { name: "EUR", rate: 0.8, symbol: "€" },
    { name: "UAH", rate: 26, symbol: "₴" },
    { name: "RUB", rate: 80, symbol: "₽" },
  ],
};

export default function currenciesReducer(state = initState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
