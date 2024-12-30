import { useQuery } from "@tanstack/react-query";
import { getCategoriesAPI } from "../services/categoryServices";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesAPI,
  });

  const {
    categories:
      rawCategories = [] /**Change the name and set default value to protect from undefined value  */,
  } = data || {};

  const categories = rawCategories.map((item) => {
    return { label: item.title, value: item._id };
  });
  const transformedCategories = rawCategories.map((item) => {
    return { label: item.title, value: item.englishTitle };
  });
  return { categories, isLoading, transformedCategories };
}
