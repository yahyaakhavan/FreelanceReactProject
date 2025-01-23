/* eslint-disable react/prop-types */
import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

export default function ProposalRow({ proposal, index }) {
  const proposalstatusStyle = [
    { label: "بسته", CSSClass: "badge--danger" },
    { label: "در انتظار تایید", CSSClass: "badge--secondary" },
    { label: "تایید شده", CSSClass: "badge--success" },
  ];
  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description, 60)}</td>
      <td>{`${toPersianNumbers(proposal.duration)} روز`}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span
          className={`badge ${proposalstatusStyle[proposal.status].CSSClass}`}
        >
          {proposalstatusStyle[proposal.status].label}
        </span>
      </td>
    </Table.row>
  );
}
