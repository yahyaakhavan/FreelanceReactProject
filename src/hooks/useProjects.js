import { useQuery } from "@tanstack/react-query";
import { getAllProjectsAPI } from "../services/projectServices";

export default function useProjects() {
  const { data, isLodaing } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjectsAPI,
  });
  const { projects } = data || {};
  return { projects, isLodaing };
}
