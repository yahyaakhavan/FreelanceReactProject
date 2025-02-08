import DashboardHeader from "../../ui/DashboardHeader";
import useProjects from "../../hooks/useProjects";
import useProposals from "../Proposal/useProposals";
import useUsers from "./useUsers";
import Loader from "../../ui/Loader";
import Stats from "./Stats";

export default function DashboardLayout() {
  const { isLoading: isLoading1, users } = useUsers();
  const { isLodaing: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, proposals } = useProposals();
  {
    if (isLoading1 || isLoading2 || isLoading3) {
      return <Loader />;
    }
  }
  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}
