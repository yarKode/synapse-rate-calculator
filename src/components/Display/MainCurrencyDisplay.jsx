import React from "react";
import Loader from "../Loader";

export default function MainCurrencyDisplay({ sum, currency, isLoading }) {
  return (
    <>
      <h2 className="display-title">
        {isLoading ? <Loader /> : "Total price"}
      </h2>
      <p className="display-sum">{`${sum}${currency}`}</p>
    </>
  );
}
