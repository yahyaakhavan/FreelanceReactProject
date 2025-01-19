/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "./Header";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function PageLayout({
  isSideBarOpen,
  setIsSideBarOpen,
  children,
}) {
  return (
    <div
      className={`grid h-screen grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr]
        transition-[grid-template-columns] duration-300 ease-in-out ${
          isSideBarOpen ? "grid-cols-[10rem_1fr]" : "grid-cols-[auto_1fr]"
        }`}
    >
      <Header />
      <div className="relative bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-2 sm:p-4">
        <button
          onClick={() => {
            setIsSideBarOpen();
          }}
          className="sm:hidden absolute top-1/2 left-0 
        transform -translate-x-1/2 w-8 h-8 rounded-full
         flex items-center justify-center bg-secondary-600  shadow-lg transition-all duration-300"
        >
          {isSideBarOpen ? (
            <FaAngleLeft className="w-3 h-3 text-secondary-100" />
          ) : (
            <FaAngleRight className="w-3 h-3 text-secondary-100" />
          )}
        </button>
        {children}
      </div>

      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
