import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import uniqid from "uniqid";

import { submitFieldsData, setRequestErr } from "../../store/mainReducer";
import { getNewRatesThunkCreator } from "../../store/currenciesReducer";
import { formSchema, errorsMessages } from "../../configure";
import {
  convertStrTimeToNum,
  handleTimeChange,
  handlePriceChange,
} from "../../utils";
import { ratesUpdatingTimeFrame } from "../../configure";

export default function Form() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const allCurrencies = useSelector((state) => state.rates.allCurrencies);
  const mainCurrency = useSelector((state) => state.main.currency);
  const timeStampCurrenciesUpdated = useSelector(
    (state) => state.rates.updatedAt
  );
  const allCurrenciesNames = allCurrencies.map((el) => el.name);

  const dispatch = useDispatch();

  const [chosenCurrency, setChosenCurrency] = useState(() => {
    if (mainCurrency) return mainCurrency;
    return "USD";
  });

  function resetForm() {
    resetField("price");
    resetField("time");
    //  resetField("currency");
  }

  function handleListChange(e) {
    setChosenCurrency((prev) => e.target.value);
  }

  function updateRatesIfCacheExpired() {
    const timeStampNow = new Date();
    const timePassAfterRatesUpdated =
      (timeStampNow - timeStampCurrenciesUpdated) / 1000;

    if (timePassAfterRatesUpdated >= ratesUpdatingTimeFrame) {
      console.log("rates data will be refreshed");
      dispatch(getNewRatesThunkCreator());
    }
  }

  const onSubmit = ({ price, time: timeString, currency }) => {
    dispatch(setRequestErr(false));

    const time = convertStrTimeToNum(timeString);

    updateRatesIfCacheExpired();
    dispatch(submitFieldsData({ price, time, currency }));
    //resetForm();
  };

  return (
    <div className="form-container">
      <form id="calc-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Price:
          <input
            type="text"
            placeholder="20.30"
            autoComplete="off"
            {...register("price")}
            onChange={handlePriceChange}
          />
          {errors.price && <p>{errorsMessages.price}</p>}
        </label>
        <label>
          Time:
          <input
            type="text"
            placeholder="HH:MM"
            autoComplete="off"
            {...register("time")}
            onChange={handleTimeChange}
          />
          {errors.time && <p>{errorsMessages.time}</p>}
        </label>
        <label>
          Currency:
          <select
            {...register("currency")}
            onChange={handleListChange}
            value={chosenCurrency}
          >
            {allCurrenciesNames &&
              allCurrenciesNames.map((name) => (
                <option key={uniqid()} value={name}>
                  {name}
                </option>
              ))}
          </select>
          {errors.currency && <p>{errorsMessages.currency}</p>}
        </label>
      </form>
    </div>
  );
}
