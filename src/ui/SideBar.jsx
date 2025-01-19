/* eslint-disable react/prop-types */

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function SideBar({ setIsSideBarOpen, isSideBarOpen }) {
  return (
    <div className="relative bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-2 sm:p-4">
      <button
        onClick={() => {
          setIsSideBarOpen();
        }}
        className=" sm:hidden absolute top-1/2 left-0 
        transform -translate-x-1/2 w-8 h-8 rounded-full
         flex items-center justify-center  shadow-lg transition-all duration-300"
      >
        {isSideBarOpen ? (
          <FaAngleLeft className="w-3 h-3" />
        ) : (
          <FaAngleRight className="w-3 h-3" />
        )}
      </button>
      <ul className=" flex-1 flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span
              className={`sm:opacity-100 sm:w-auto sm:flex transition-opacity duration-300 ease-in-out ${
                isSideBarOpen
                  ? "opacity-100 w-auto visible "
                  : "opacity-0 w-0 hidden"
              }`}
            >
              خانه
            </span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span
              className={`sm:opacity-100 sm:w-auto sm:flex transition-opacity duration-300 ease-in-out ${
                isSideBarOpen
                  ? "opacity-100 w-auto visible"
                  : "opacity-0 w-0 hidden"
              }`}
            >
              پروژه ها
            </span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}
function CustomNavLink({ to, children }) {
  const navLinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-1 sm:px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClasses} bg-primary-100/80 text-primary-900`
          : `${navLinkClasses} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
