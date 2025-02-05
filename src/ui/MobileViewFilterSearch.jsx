/* eslint-disable react/prop-types */
import { useState } from "react";
import RadioButtonSmallScreen from "./RadioButtonSmallScreen";
import { createSearchParams, useSearchParams } from "react-router-dom";

export default function MobileViewFilterSearch({
  transformedCategories,
  statusOptions,
  sortOptions,
  setIsOpen,
}) {
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState(params.get("category") || "");
  const [sort, setSort] = useState(params.get("sort") || "");
  const [status, setStatus] = useState(params.get("status") || "");
  const handleURLParamsInsmallScreen = () => {
    const qs = createSearchParams({
      category,
      sort,
      status,
    });
    setParams(`?${qs.toString()}`);
    setIsOpen(false);
  };
  return (
    <div className="space-y-8">
      <div>
        <p className="font-bold">بر اساس دسته بندی</p>
        <span className="mt-2 space-y-4">
          <RadioButtonSmallScreen
            options={transformedCategories}
            setFilterItem={setCategory}
            filterItem="category"
            selectedItem={category}
          />
        </span>
      </div>
      <div>
        <p className="font-bold">بر اساس نوع پروژه</p>
        <span className="mt-2 space-y-4">
          <RadioButtonSmallScreen
            options={statusOptions}
            setFilterItem={setStatus}
            filterItem="status"
            selectedItem={status}
          />
        </span>
      </div>
      <div>
        <p className="font-bold">بر اساس تارخ</p>
        <span className="mt-2 space-y-4">
          <RadioButtonSmallScreen
            options={sortOptions}
            setFilterItem={setSort}
            filterItem="sort"
            selectedItem={sort}
          />
        </span>
      </div>
      <button
        className="btn btn--primary w-full"
        onClick={() => {
          handleURLParamsInsmallScreen();
        }}
      >
        تایید
      </button>
    </div>
  );
}
