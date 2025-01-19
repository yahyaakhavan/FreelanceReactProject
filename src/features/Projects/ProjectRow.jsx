/* eslint-disable react/prop-types */
import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import Modal from "../../ui/Modal";
import DeleteConfirmation from "../../ui/DeleteConfirmation";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi2";
export default function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject, isPending } = useRemoveProject();
  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center max-w-[100px] gap-2">
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
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex gap-x-4 items-center">
          <button
            onClick={() => {
              setIsEditOpen(true);
            }}
          >
            <TbPencilMinus className="icon text-primary-900" />
          </button>
          <Modal
            open={isEditOpen}
            onClose={() => {
              setIsEditOpen(false);
            }}
            title={`ویرایش ${project.title}`}
          >
            <CreateProjectForm
              mustBeEdit={project}
              onClose={() => {
                setIsEditOpen(false);
              }}
            />
          </Modal>
          <button
            onClick={() => {
              setIsDeleteOpen(true);
            }}
          >
            <HiOutlineTrash className="icon text-error" />
          </button>
          <Modal
            open={isDeleteOpen}
            onClose={() => {
              setIsDeleteOpen(false);
            }}
            title={`حذف ${project.title}`}
          >
            <DeleteConfirmation
              projectName={project.title}
              onClose={() => {
                setIsDeleteOpen(false);
              }}
              disabled={false}
              onConfirm={() => {
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                });
              }}
            />
          </Modal>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-800" />
        </Link>
      </td>
    </Table.row>
  );
}
