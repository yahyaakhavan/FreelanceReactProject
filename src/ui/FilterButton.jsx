import { useSearchParams } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function FilterButton({ options, filterfield }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentFilter = searchParam.get(filterfield) || options.at(0).value;
  const handleclick = (item) => {
    searchParam.set(filterfield, item);
    setSearchParam(searchParam);
  };
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map((item) => {
          const isActive = item.value === currentFilter;
          return (
            <button
              key={item.value}
              disabled={isActive}
              onClick={() => {
                handleclick(item.value);
              }}
              className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300 ${
                isActive
                  ? "!bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
