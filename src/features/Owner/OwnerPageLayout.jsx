import { HiCollection, HiHome } from "react-icons/hi";
import CustomeNavLink from "../../ui/CustomeNavLink";
import PageLayout from "../../ui/PageLayout";
import SideBar from "../../ui/SideBar";
import { useState } from "react";

export default function OwnerPageLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <PageLayout
      isSideBarOpen={isSideBarOpen}
      setIsSideBarOpen={() => {
        setIsSideBarOpen((prev) => {
          return !prev;
        });
      }}
    >
      <SideBar>
        <CustomeNavLink to="/owner/dashboard">
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
        </CustomeNavLink>
        <CustomeNavLink to="/owner/projects">
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
        </CustomeNavLink>
      </SideBar>
    </PageLayout>
  );
}
