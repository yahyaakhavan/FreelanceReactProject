import { useQuery } from "@tanstack/react-query";
import { getAllProjectsAPI } from "../services/projectServices";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();
  const queryObJ = queryString.parse(search);
  const { data, isLodaing } = useQuery({
    queryKey: ["projects", queryObJ],
    queryFn: () => getAllProjectsAPI(search),
  });
  const { projects } = data || {};
  return { projects, isLodaing };
}
