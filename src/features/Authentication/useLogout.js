import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogoutAPI } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending, mutate: logout } = useMutation({
    mutationFn: LogoutAPI,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });
  return { isPending, logout };
}
