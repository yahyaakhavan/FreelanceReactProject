/* eslint-disable react/prop-types */
export default function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        className="textField__input"
        value={value}
        onChange={onChange}
        type="text"
        id={name}
        name={name}
        autoComplete="off"
      />
    </div>
  );
}
