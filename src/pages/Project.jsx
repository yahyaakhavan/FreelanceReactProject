import ProjectHeader from "../features/project/ProjectHeader";
import ProposalsTable from "../features/project/ProposalsTable";
import useGetProject from "../features/project/useGetProject";
import Loader from "../ui/Loader";

export default function Project() {
  const { isLoading, project } = useGetProject();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}
