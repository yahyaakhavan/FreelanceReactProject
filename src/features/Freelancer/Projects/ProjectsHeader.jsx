import { useState } from "react";
import useCategories from "../../../hooks/useCategories";
import FilterButton from "../../../ui/FilterButton";
import FilterDropdown from "../../../ui/FilterDropdown";
import Loader from "../../../ui/Loader";
import Modal from "../../../ui/Modal";
import useDetectMobileScreen from "../../../hooks/useDetectMobileScreenSize";
import MobileViewFilterSearch from "../../../ui/MobileViewFilterSearch";
const DESIRED_MOBILE_SIZE = 768;
const sortOptions = [
  { value: "latest", label: "مرتب سازی (جدید ترین)" },
  { value: "earliest", label: "مرتب سازی (قدیمی ترین)" },
];
const statusOptions = [
  { value: "ALL", label: "همه" },
  { value: "OPEN", label: "باز" },
  { value: "CLOSED", label: "بسته" },
];

export default function ProjectsHeader() {
  const { isMobileView } = useDetectMobileScreen(DESIRED_MOBILE_SIZE);

  const { isLoading, transformedCategories } = useCategories();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="bg-primary-900 rounded-md px-4 py-1 text-white xl:hidden"
          >
            فیلتر
          </button>
          {isMobileView ? (
            <Modal
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
              title="انتخاب فیلتر"
            >
              <MobileViewFilterSearch
                transformedCategories={transformedCategories}
                statusOptions={statusOptions}
                sortOptions={sortOptions}
                setIsOpen={setIsOpen}
              />
            </Modal>
          ) : null}

          <div className="hidden xl:flex xl:items-center xl:gap-x-8 xl:flex-row-reverse">
            <FilterDropdown
              options={[
                { value: "ALL", label: "دسته بندی (همه)" },
                ...transformedCategories,
              ]}
              filterfield="category"
            />
            <FilterDropdown options={sortOptions} filterfield="sort" />
            <FilterButton options={statusOptions} filterfield="status" />
          </div>
        </div>
      )}
    </div>
  );
}
