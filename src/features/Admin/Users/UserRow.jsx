/* eslint-disable react/prop-types */
import { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ChangeUserState from "./ChangeUserState";
const status = [
  { className: "badge--danger", label: "رد شده" },
  { className: "badge--secondary", label: "در انتظار تایید" },
  { className: "badge--success", label: "تایید شده" },
];

export default function UserRow({ index, user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${status[user.status].className}`}>
          {status[user.status].label}
        </span>
      </td>
      <td>
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserState
            onClose={() => {
              setIsOpen(false);
            }}
            userStatus={user.status}
            userID={user._id}
          />
        </Modal>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          تغییر وضعیت کاربر
        </button>
      </td>
    </Table.row>
  );
}
