import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusAPI } from "../../services/proposalServices";
import toast from "react-hot-toast";
export function useChangeProposalStatus() {
  const { isPending, mutate: changeProjectStatus } = useMutation({
    mutationFn: changeProposalStatusAPI,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isPending, changeProjectStatus };
}
