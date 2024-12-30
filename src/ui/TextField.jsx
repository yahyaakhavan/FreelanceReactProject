import { toPersianNumbersWithComma } from "../utils/toPersianNumbers";

/* eslint-disable react/prop-types */
export default function TextField({
  label,
  name,
  register,
  type = "text",
  required,
  validationSchema,
  errors,

  setValue,
  /*value, onChange*/
}) {
  //console.log(register(name), errors);

  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      {name === "budget" ? (
        <input
          {...register("budget", {
            onChange: (e) => {
              const persianValue = toPersianNumbersWithComma(e.target.value);

              setValue("budget", persianValue, {
                shouldValidate: true,
              });
            },
            pattern: {
              value: validationSchema.pattern.value,
              message: validationSchema.pattern.message,
            },
            required: validationSchema.required,
          })}
          className="textField__input"
          // value={value}
          // onChange={onChange}
          //name={name}
          type={type}
          id="budget"
          autoComplete="off"
          placeholder="بودجه پروژه را مشخص نمایید."
        />
      ) : (
        <input
          {...register(name, validationSchema)}
          className="textField__input"
          // value={value}
          // onChange={onChange}
          //name={name}
          type={type}
          id={name}
          autoComplete="off"
        />
      )}

      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
