import React from "react";

export default function Display() {
  return (
    <div className="display">
      <h2 className="display-title">Total price</h2>
      <p className="display-sum">3296.06$</p>
      <div className="display-currencies-container">
        <div className="display-sep-currency">
          <div className="display-sep-currency-type">EUR</div>
          <div className="display-sep-currency-sum">2 841,84</div>
        </div>

        <div className="display-sep-currency">
          <div className="display-sep-currency-type">UAH</div>
          <div className="display-sep-currency-sum">86 695,59</div>
        </div>

        <div className="display-sep-currency">
          <div className="display-sep-currency-type">RUB</div>
          <div className="display-sep-currency-sum">236 467,44</div>
        </div>
      </div>
    </div>
  );
}
