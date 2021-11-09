import React from "react";
import uniqid from "uniqid";

import SubCurrency from "./SubCurrency";
import Loader from "../Loader";

export default function SubCurrenciesDisplay({ subCurrenciesArr, isLoading }) {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="display-currencies-container">
      {subCurrenciesArr.map((el) => (
        <SubCurrency name={el.name} value={el.value || 0} key={uniqid()} />
      ))}
    </div>
  );
}
