import useCategories from "../../../hooks/useCategories";
import FilterButton from "../../../ui/FilterButton";
import FilterDropdown from "../../../ui/FilterDropdown";
import Loader from "../../../ui/Loader";
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
  const { isLoading, transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex items-center gap-x-8 flex-row-reverse">
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
      )}
    </div>
  );
}
