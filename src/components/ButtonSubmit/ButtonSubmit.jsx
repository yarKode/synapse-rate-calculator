import React from "react";

export default function ButtonSubmit() {
  const clickHandler = () => {};

  return (
    <div className="calculate-btn-container">
      <button form="cal-form" className="calculate-btn" onClick={clickHandler}>
        RESULT
      </button>
    </div>
  );
}
