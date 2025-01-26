/* eslint-disable react/prop-types */

import Table from "../../../ui/Table";
import { MdAssignmentAdd } from "react-icons/md";
import truncateText from "../../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "../../Proposal/CreateProposalForm";
export default function ProjectRow({ project, index }) {
  const projectStatus = {
    OPEN: { label: "باز", CSSClass: "badge--success" },
    CLOSED: { label: "بسته", CSSClass: "badge--danger" },
  };
  const [isOpen, setIsOpen] = useState(false);
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
        {isOpen ? (
          <Modal
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            title={`ایجاد درخواست برای پروژه ${project.title}`}
          >
            <CreateProposalForm
              onClose={() => {
                setIsOpen(false);
              }}
              projectID={project._id}
            />
          </Modal>
        ) : (
          ""
        )}
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.row>
  );
}
