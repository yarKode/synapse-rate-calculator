import React from "react";

export default function MainCurrencyDisplay({ sum, currency }) {
  return (
    <>
      <h2 className="display-title">Total price</h2>
      <p className="display-sum">{`${sum}${currency}`}</p>
    </>
  );
}
