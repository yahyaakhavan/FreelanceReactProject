import { useOwnerProjects } from "./useOwnerProjects";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
export default function ProjectsTable() {
  const { projects, isLoading } = useOwnerProjects();
  console.log(projects);
  if (isLoading) return <Loader />;
  if (!projects) return <p>no db</p>;
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
                <td>{truncateText(project.title, 30)}</td>
                <td>{project.category.title}</td>
                <td>{toPersianNumbersWithComma(project.budget)}</td>
                <td>{toLocalDateShort(project.deadline)}</td>
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
