import { useOwnerProjects } from "./useOwnerProjects";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
export default function ProjectsTable() {
  const { projects, isLoading } = useOwnerProjects();
  console.log(projects);
  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => {
            return (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.title}</td>
                <td>{project.category.title}</td>
                <td>{project.budget}</td>
                <td>{project.deadline}</td>
                <td>
                  <div className="flex flex-wrap items-center max-w-[200px] gap-2">
                    {project.tags.map((tag) => {
                      return (
                        <span className="badge badge--secondary" key={tag}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td>{project.freelancer?.name || "-"}</td>
                <td>
                  {project.status === "OPEN" ? (
                    <span className="badge badge--success">باز</span>
                  ) : (
                    <span className="badge badge--danger">بسته</span>
                  )}
                </td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
