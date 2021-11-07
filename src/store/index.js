import { createStore, combineReducers } from "redux";

import mainReducer from "./mainReducer";
import currenciesReducer from "./currenciesReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  rates: currenciesReducer,
});

export const store = createStore(rootReducer);
