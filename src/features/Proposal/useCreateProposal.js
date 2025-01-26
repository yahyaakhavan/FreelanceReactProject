import { useMutation } from "@tanstack/react-query";
import { addProposalAPI } from "../../services/proposalServices";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const { mutate: createProposal, isPending: isCreating } = useMutation({
    mutationFn: addProposalAPI,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { createProposal, isCreating };
}
