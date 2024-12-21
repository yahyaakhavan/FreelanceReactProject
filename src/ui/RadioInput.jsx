/* eslint-disable react/prop-types */
export default function RadioInput({
  value,
  id,
  onChange,
  name,
  label,
  register,
  validationSchema,
  watch, //This function comes from react hook form and rerender based on the first argument
  errors,
}) {
  return (
    <div className="flex items-center gap-x-2">
      <input
        className="cursor-pointer w-4 h-4"
        type="radio"
        value={value}
        id={id}
        name={name}
        {...register(name, validationSchema)}
        //onChange={onChange}
        checked={watch(name) === value} //I think this line sepecifies role value
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
