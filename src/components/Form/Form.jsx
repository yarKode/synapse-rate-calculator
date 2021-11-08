import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import uniqid from "uniqid";

import { submitFieldsData } from "../../store/mainReducer";
import { formSchema, errorsMessages } from "../../configure";
import {
  convertStrTimeToNum,
  handleTimeChange,
  handlePriceChange,
} from "../../utils";

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
  const allCurrenciesNames = allCurrencies.map((el) => el.name);

  const dispatch = useDispatch();

  function resetForm() {
    resetField("price");
    resetField("time");
    //  resetField("currency");
  }

  const onSubmit = ({ price, time: timeString, currency }) => {
    const time = convertStrTimeToNum(timeString);
    dispatch(submitFieldsData({ price, time, currency }));
    resetForm();
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
          <select {...register("currency")}>
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
