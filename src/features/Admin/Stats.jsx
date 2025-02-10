import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

/* eslint-disable react/prop-types */
export default function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-3 ">
      <Stat
        color="primary"
        title="کاربران"
        value={users}
        icon={<HiUser className="w-10 h-10 sm:w-20 sm:h-20" />}
      />
      <Stat
        color="green"
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-10 h-10 sm:w-20 sm:h-20" />}
      />
      <Stat
        color="orange"
        title="پروژه ها"
        value={toPersianNumbersWithComma(projects)}
        icon={<HiCollection className="w-10 h-10 sm:w-20 sm:h-20" />}
      />
    </div>
  );
}
