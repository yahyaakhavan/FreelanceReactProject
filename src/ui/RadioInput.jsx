export default function RadioInput({ value, id, onChange, name, label }) {
  return (
    <div className="flex items-center gap-x-2">
      <input
        className="cursor-pointer w-4 h-4"
        type="radio"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
