import { useEffect } from "react";
import Loader from "./Loader";

/* eslint-disable react/prop-types */
export default function RHFSelect({
  lable,
  name,
  register,
  options,
  required,
  validationschema,
  errors,
  prevValue,
  defaultOptionLable,
}) {
  // const selectedItem = watch(name);
  // console.log(options);
  // console.log(selectedItem);
  // useEffect(() => {
  //   if (prevValue) {
  //     setValue(name, prevValue);
  //   }
  // }, [name, prevValue, setValue]);

  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {lable}
        {required && <span className="text-error">*</span>}
      </label>
      <select
        className="textField__input"
        {...register(name, validationschema)}
        id={name}
        defaultValue={prevValue || ""}
      >
        {defaultOptionLable ? (
          <option value="" disabled>
            {defaultOptionLable}
          </option>
        ) : (
          ""
        )}

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.lable}
            </option>
          );
        })}
      </select>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
