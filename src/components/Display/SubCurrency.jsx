import React from "react";

export default function SubCurrency({ currency, value }) {
  return (
    <div className="display-sep-currency">
      <div className="display-sep-currency-type">{currency}</div>
      <div className="display-sep-currency-sum">{value}</div>
    </div>
  );
}
