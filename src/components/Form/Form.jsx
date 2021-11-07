import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { submitFieldsData } from "../../store/mainReducer";

const formSchema = yup.object().shape({
  rate: yup.number().required(),
  time: yup.string().required(),
  currency: yup
    .string()
    .min(2)
    .max(4)
    .required()
    .oneOf(["USD", "UAH", "RUB", "EUR"]),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const dispatch = useDispatch();

  function resetForm() {
    resetField("rate");
    resetField("time");
    resetField("currency");
  }

  const onSubmit = (data) => {
    dispatch(submitFieldsData(data));
    resetForm();
  };

  const { rate, time, currency } = useSelector((state) => state.main.fields);
  console.log({ rate, time, currency });

  return (
    <div className="form-container">
      <form id="cal-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Price:
          <input type="text" autoComplete="off" {...register("rate")} />
          {errors.rate && <p>Rate should be a number</p>}
        </label>
        <label>
          Time:
          <input type="text" autoComplete="off" {...register("time")} />
          {errors.time && (
            <p>Time should be in format hours:minutes. Example: 160:47</p>
          )}
        </label>
        <label>
          Currency:
          <input type="text" autoComplete="off" {...register("currency")} />
          {errors.currency && (
            <p>
              Currency should be chosen from following values: USD, RUB, EUR,
              UAH
            </p>
          )}
        </label>
      </form>
    </div>
  );
}
