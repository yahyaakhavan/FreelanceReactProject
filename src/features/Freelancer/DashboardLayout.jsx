import Stats from "./Stats";
import useProposals from "../Proposal/useProposals";
import Loader from "../../ui/Loader";
import DashboardHeader from "../../ui/DashboardHeader";
export default function DashboardLayout() {
  const { proposals, isLoading } = useProposals();
  if (isLoading) {
    return <Loader />;
  }
  if (!proposals) {
    return <div>در حال حاضر سرور در دسترس نیست</div>;
  }
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}
