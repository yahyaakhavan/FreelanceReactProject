import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsAPI } from "../../services/projectServices";

export function useOwnerProjects() {
  //This custom hook is really similar to useUser but it has some diffrences
  //Look at the return object
  //And see how destructurin the result of useQuery
  //Next destructure data result and if it does not have value return an empty object
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getOwnerProjectsAPI,
  });
  const { projects } = data || {};
  console.log(projects);
  return { projects, isLoading };
}
