import React from "react";
import uniqid from "uniqid";

import SubCurrency from "./SubCurrency";

export default function SubCurrenciesDisplay({ subCurrenciesArr }) {
  return (
    <div className="display-currencies-container">
      {subCurrenciesArr.map((el) => (
        <SubCurrency name={el.name} value={el.value || 0} key={uniqid()} />
      ))}
    </div>
  );
}
