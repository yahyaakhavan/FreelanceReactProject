import { HiArrowRight } from "react-icons/hi";
import useBack from "../../hooks/useBake";

/* eslint-disable react/prop-types */
export default function ProjectHeader({ project }) {
  const back = useBack();
  return (
    <div className="flex gap-x-4 mb-8 items-center">
      <button onClick={back}>
        <HiArrowRight className="w-5 h-5 text-secondary-500" />
      </button>
      <h1 className="font-black text-secondary-700 text-xl">
        درخواست های مربوط به {project.title}
      </h1>
    </div>
  );
}
