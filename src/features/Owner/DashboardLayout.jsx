import { useOwnerProjects } from "../Projects/useOwnerProjects";
import Stats from "./Stats";
import Loader from "../../ui/Loader";
import DashboardHeader from "../../ui/DashboardHeader";
export default function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col">
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}
