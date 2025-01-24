/* eslint-disable react/prop-types */

import Table from "../../../ui/Table";
import { MdAssignmentAdd } from "react-icons/md";
import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";
export default function ProjectRow({ project, index }) {
  const projectStatus = {
    OPEN: { label: "باز", CSSClass: "badge--success" },
    CLOSED: { label: "بسته", CSSClass: "badge--danger" },
  };
  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[project.status].CSSClass}`}>
          {projectStatus[project.status].label}
        </span>
      </td>
      <td>
        <button>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.row>
  );
}
