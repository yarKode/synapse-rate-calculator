import React from "react";
import { useSelector } from "react-redux";

import SubCurrenciesDisplay from "./SubCurrenciesDisplay";
import MainCurrencyDisplay from "./MainCurrencyDisplay";

export default function Display() {
  const { rate, time, currency } = useSelector((state) => state.main.fields);

  const currenciesArr = useSelector((state) => state.rates);

  console.log("currenciesArr", currenciesArr);

  return (
    <div className="display">
      <MainCurrencyDisplay />
      <SubCurrenciesDisplay />
    </div>
  );
}
