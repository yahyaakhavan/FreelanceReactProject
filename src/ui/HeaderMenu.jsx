/* eslint-disable react/prop-types */
import { HiOutlineUser } from "react-icons/hi";

import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LogOut from "../features/Authentication/LogOut";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import LngMode from "./LngMode";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const btnID = "btnControldiv";
  //I put this const to handle when user clicks on button close it if open and viceversa
  // when I click on button its child <BsThreeDotsVertical /> trigger and I need the id of button
  //because I have to sent to useOtsideClick

  return (
    <div className="flex items-center">
      <ul className="hidden sm:flex sm:items-center sm:visible sm:gap-x-4 ">
        <li className="flex items-center">
          <Link to={"dashboard"}>
            <HiOutlineUser className="w-5 h-5 text-primary-900" />
          </Link>
        </li>
        <li className="flex items-center">
          <DarkModeToggle />
        </li>
        <li className="flex items-center">
          <LogOut />
        </li>
        <li className="flex items-center">
          <LngMode />
        </li>
      </ul>
      <button
        id={btnID}
        className="flex items-center sm:invisible"
        onClick={() => {
          console.log(isOpen);
          setIsOpen((prev) => {
            return !prev;
          });
        }}
      >
        <BsThreeDotsVertical className="w-5 h-5 text-primary-900" />
      </button>
      {isOpen && (
        <HeaderMenuInSmallScreen
          onClose={() => {
            setIsOpen(false);
          }}
          btnID={btnID}
        />
      )}
    </div>
  );
}
function HeaderMenuInSmallScreen({ onClose, btnID }) {
  const ref = useOutsideClick(onClose, btnID);
  return (
    <div
      ref={ref}
      className="sm:hidden absolute left-0 top-[3.75rem] bg-secondary-0 p-4  rounded-sm w-1/2"
    >
      <ul className="flex flex-col gap-y-4 items-start ">
        <li>
          <Link
            className="flex justify-center items-center gap-x-2"
            to={"dashboard"}
          >
            <HiOutlineUser className="w-5 h-5 text-primary-900" />
            <span className="text-[rgb(var(--color-secondary-600))]">
              داشبورد
            </span>
          </Link>
        </li>
        <li className="flex justify-center gap-x-2 items-center">
          <DarkModeToggle />
          <button>
            <span className="text-[rgb(var(--color-secondary-600))]">
              تم روز/شب
            </span>
          </button>
        </li>
        <li>
          <LogOut>
            <span className="text-[rgb(var(--color-secondary-600))]">خروج</span>
          </LogOut>
        </li>
      </ul>
    </div>
  );
}
