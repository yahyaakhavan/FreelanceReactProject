import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

export default function ProjectsTable() {
  const { projects, isLodaing } = useProjects();
  if (isLodaing) {
    return <Loader />;
  }
  if (!projects) {
    return <p>no db</p>;
  }
  if (!projects.length) {
    return <Empty resourceName="پروژه ای" />;
  }
  return (
    <Table>
      <Table.header>
        <Table.row>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.row>
      </Table.header>
      <Table.body>
        {projects.map((project, index) => {
          return (
            <ProjectRow key={project._id} project={project} index={index} />
          );
        })}
      </Table.body>
    </Table>
  );
}
