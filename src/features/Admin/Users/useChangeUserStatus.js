import { useMutation } from "@tanstack/react-query";
import { changeUserStatusAPI } from "../../../services/userServices";

export default function useChangeUserStatus() {
  const { mutate, isPending } = useMutation({
    mutationFn: changeUserStatusAPI,
  });
  return { mutate, isPending };
}
