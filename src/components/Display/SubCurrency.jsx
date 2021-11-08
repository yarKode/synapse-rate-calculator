import React from "react";

export default function SubCurrency({ name, value }) {
  return (
    <div className="display-sep-currency">
      <div className="display-sep-currency-type">{name}</div>
      <div className="display-sep-currency-sum">{value}</div>
    </div>
  );
}
