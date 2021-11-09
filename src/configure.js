import * as yup from "yup";

export const formSchema = yup.object().shape({
  price: yup.number().positive().required(),
  time: yup.string().required(),
  currency: yup.string().required().oneOf(["USD", "UAH", "RUB", "EUR"]),
});

export const errorsMessages = {
  price: "Rate should be a positive number",
  time: "Time should be in format hours:minutes. Example: 160:47",
  currency:
    "Currency should be chosen from following values: USD, RUB, EUR, UAH",
};

export const buttonText = "RESULT";

export const initStateForRates = {
  allCurrencies: [
    { name: "USD", rate: 1, symbol: "$", isoCode: "840" },
    { name: "EUR", rate: 1, symbol: "€", isoCode: "978" },
    { name: "UAH", rate: 1, symbol: "₴", isoCode: "980" },
    { name: "RUB", rate: 1, symbol: "₽", isoCode: "810" },
  ],
  updatedAt: "",
};

export const initStateMain = {
  fields: {
    price: "",
    time: "",
    currency: "",
  },
  isLoading: false,
  ratesRequestErr: false,
};

//limit frame for updating rates using API. If user made new request within specified timeframe (in seconds) data will requested from state, state not updated using API/
export const ratesUpdatingTimeFrame = 60 * 3;
