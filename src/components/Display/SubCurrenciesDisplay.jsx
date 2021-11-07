import React from "react";

import SubCurrency from "./SubCurrency";

export default function SubCurrenciesDisplay() {
  return (
    <div className="display-currencies-container">
      <SubCurrency currency="EUR" value="234" />
      <SubCurrency currency="RUB" value="8392" />
      <SubCurrency currency="UAH" value="345" />
    </div>
  );
}
