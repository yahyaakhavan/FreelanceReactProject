import { FaPlus } from "react-icons/fa";
import Modal from "../../ui/Modal";
import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";

export default function ProjectsHeader() {
  const [isAddProject, setIsAddProject] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-secondary-600">پروژهای شما</h1>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={isAddProject}
        onClose={() => {
          setIsAddProject(false);
        }}
      >
        <CreateProjectForm
          onClose={() => {
            setIsAddProject(false);
          }}
        />
      </Modal>
      <button
        className=" flex gap-x-2 items-center btn btn--primary"
        onClick={() => {
          setIsAddProject(true);
        }}
      >
        <FaPlus />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
}
