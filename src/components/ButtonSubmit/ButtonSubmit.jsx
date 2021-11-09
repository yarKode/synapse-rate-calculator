import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getNewRatesThunkCreator,
  setNewRates,
} from "../../store/currenciesReducer";

export default function ButtonSubmit() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(getNewRatesThunkCreator());
  };

  return (
    <div className="calculate-btn-container">
      <button form="calc-form" className="calculate-btn" onClick={clickHandler}>
        RESULT
      </button>
    </div>
  );
}
