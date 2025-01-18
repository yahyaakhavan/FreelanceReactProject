import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

export default function PageLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sideBarOptions = ["خانه", "پروژه ها"];

  return (
    <div
      className={`grid h-screen grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr]
         transition-[grid-template-columns] duration-300 ease-in-out ${
           isSideBarOpen ? "grid-cols-[10rem_1fr]" : "grid-cols-[auto_1fr]"
         }`}
    >
      <Header />
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={() => {
          setIsSideBarOpen((prev) => {
            console.log(isSideBarOpen);
            return !prev;
          });
        }}
        sideBarOptions={sideBarOptions}
      />
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
