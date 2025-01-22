import { useQuery } from "@tanstack/react-query";
import { getProposalsAPI } from "../../services/proposalServices";

export default function Proposals() {
  const { data, isLoading } = useQuery({
    queryFn: getProposalsAPI,
    queryKey: ["proposals"],
  });
  const { proposals } = data || {};
  return { proposals, isLoading };
}
