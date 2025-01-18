import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authServices";

export default function useUser() {
  const { data, isLoading } = useQuery(
    {
      queryKey: ["get-user"],
      queryFn: getUser,
      retry: false,
    } /*we can add more property to customize our attempt*/
  );
  const { user } = data || {};
  return { user, isLoading };
}
