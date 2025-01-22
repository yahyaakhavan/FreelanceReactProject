import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

/* eslint-disable react/prop-types */
export default function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfInprogressProject = projects.map((project) => {
    return project.status === 2;
  }).length;

  const numOfProposals = projects.reduce((acc, curr) => {
    return curr.proposals.length + acc;
  }, 0);

  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-3 ">
      <Stat
        color="primary"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="پروژه های واگذار شده"
        value={numOfInprogressProject}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}
