/* eslint-disable react/prop-types */
import RadioInput from "./RadioInput";

export default function RadioInputGroup({ register, errors, watch, configs }) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map((option) => {
          return (
            <RadioInput
              key={option.value}
              label={option.label}
              value={option.value}
              id={option.value}
              name={name}
              register={register}
              watch={watch}
              errors={errors}
              validationSchema={validationSchema}
            />
          );
        })}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
