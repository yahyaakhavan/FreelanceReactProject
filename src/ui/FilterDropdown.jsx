import { useSearchParams } from "react-router-dom";
import GeneralSelect from "./GeneralSelect";

/* eslint-disable react/prop-types */
export default function FilterDropdown({ options, filterfield }) {
  const [SearchParams, setSearchParams] = useSearchParams();
  const value = SearchParams.get(filterfield) || "";
  const handleChange = (e) => {
    SearchParams.set(filterfield, e.target.value);
    setSearchParams(SearchParams);
  };
  return (
    <GeneralSelect
      value={value}
      options={options}
      handleChange={handleChange}
    />
  );
}
