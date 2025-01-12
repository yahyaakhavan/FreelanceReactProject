/* eslint-disable react/prop-types */
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
export function ProposalRow({ index, proposal }) {
  const status = [
    { className: "badge--danger", lable: "رد شده" },
    { className: "badge--secondary", lable: "در انتظار تایید" },
    { className: "badge--success", lable: "تایید شده" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 20)}</p>
      </td>
      <td>{`${toPersianNumbers(proposal.duration)} روز`}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${status[proposal.status].className}`}>
          {status[proposal.status].lable}
        </span>
      </td>
      <td>
        <Modal
          open={isOpen}
          title={"تغییر وضعیت"}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <ChangeProposalStatus
            proposalID={proposal._id}
            proposalCurrentStatus={proposal.status}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        </Modal>
        <button onClick={() => setIsOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.row>
  );
}
