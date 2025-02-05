export default function RadioButtonSmallScreen({
  options,
  setFilterItem,
  filterItem,
  selectedItem,
}) {
  return options.map((item) => {
    
    return (
      <span key={item.value} className="flex gap-x-4 items-center">
        <input
          type="radio"
          name={filterItem}
          value={item.value}
          onChange={(e) => {
            setFilterItem(e.target.value);
          }}
          checked={selectedItem == item.value}
        />
        <label>{item.label}</label>
      </span>
    );
  });
}
