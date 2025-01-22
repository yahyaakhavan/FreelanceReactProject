import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

/* eslint-disable react/prop-types */
export default function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const numOfAcceptedProposals = proposals.filter((proposal) => {
    return proposal.status === 2;
  });

  const balance = numOfAcceptedProposals.reduce((acc, curr) => {
    return curr.price + acc;
  }, 0);

  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-3 ">
      <Stat
        color="primary"
        title="پروژه ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-10 h-10 sm:w-20 sm:h-20" />}
      />
      <Stat
        color="green"
        title="درخواست های تایید شده"
        value={numOfAcceptedProposals.length}
        icon={<HiCurrencyDollar className="w-10 h-10 sm:w-20 sm:h-20" />}
      />
      <Stat
        color="orange"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCollection className="w-10 h-10 sm:w-20 sm:h-20" />}
      />
    </div>
  );
}
