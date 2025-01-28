/* eslint-disable react/prop-types */
export default function GeneralSelect({ value, handleChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        handleChange(e);
      }}
      className="textField__input py-2 text-xs bg-secondary-0"
    >
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}
