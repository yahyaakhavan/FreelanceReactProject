import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleProjectAPI } from "../../services/projectServices";

export default function useGetProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => {
      return getSingleProjectAPI(id);
    },
    retry: false,
  });

  const { project } = data || {};
  return { project, isLoading };
}
