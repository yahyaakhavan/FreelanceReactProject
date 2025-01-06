import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { changeProjectStatusAPI } from "../../services/projectServices";
import toast from "react-hot-toast";
export default function () {
  const queryClient = useQueryClient();
  const { isPending: isChangingStatus, mutate: changeStatus } = useMutation({
    mutationFn: changeProjectStatusAPI,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isChangingStatus, changeStatus };
}
