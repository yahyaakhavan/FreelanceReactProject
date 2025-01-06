/* eslint-disable react/prop-types */
import { Switch } from "@headlessui/react";
import { useState } from "react";
import useChangeStatus from "./useChangeStatus";
import Loader from "../../ui/Loader";
import Toggle from "../../ui/toggle";

export default function ToggleProjectStatus({ project }) {
  const { _id: id, status } = project;
  const { isChangingStatus, changeStatus } = useChangeStatus();
  const toggleHandler = () => {
    const data = { status: status === "OPEN" ? "CLOSED" : "OPEN" };
    changeStatus({ id, data });
  };
  return (
    <div className="w-[5rem]">
      {isChangingStatus ? (
        <Loader height={20} width={50} />
      ) : (
        <div className="flex items-center gap-x-2">
          <Toggle
            onChange={toggleHandler}
            label={project.status === "OPEN" ? "باز" : "بسته"}
            enabled={status === "OPEN" ? true : false}
          />
        </div>
      )}
    </div>
  );
}
