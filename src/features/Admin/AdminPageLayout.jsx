import { HiHome, HiUser, HiCollection, HiDocument } from "react-icons/hi";

import CustomeNavLink from "../../ui/CustomeNavLink";
import PageLayout from "../../ui/PageLayout";
import SideBar from "../../ui/SideBar";
import { useSidebarStatus } from "../../context/SidebarStatusContext";

export default function AdminPageLayout() {
  const { sidebarStatus } = useSidebarStatus();

  return (
    <PageLayout>
      <SideBar>
        <CustomeNavLink to={"dashboard"}>
          <HiHome />
          <span
            className={`sm:opacity-100 sm:w-auto sm:flex transition-opacity duration-300 ease-in-out ${
              sidebarStatus
                ? "opacity-100 w-auto visible "
                : "opacity-0 w-0 hidden"
            }`}
          >
            داشبورد
          </span>
        </CustomeNavLink>

        <CustomeNavLink to={"users"}>
          <HiUser />
          <span
            className={`sm:opacity-100 sm:w-auto sm:flex transition-opacity duration-300 ease-in-out ${
              sidebarStatus
                ? "opacity-100 w-auto visible "
                : "opacity-0 w-0 hidden"
            }`}
          >
            کاربران
          </span>
        </CustomeNavLink>

        <CustomeNavLink to={"projects"}>
          <HiCollection />
          <span
            className={`sm:opacity-100 sm:w-auto sm:flex transition-opacity duration-300 ease-in-out ${
              sidebarStatus
                ? "opacity-100 w-auto visible "
                : "opacity-0 w-0 hidden"
            }`}
          >
            پروژه ها
          </span>
        </CustomeNavLink>
        <CustomeNavLink to={"proposals"}>
          <HiDocument />
          <span
            className={`sm:opacity-100 sm:w-auto sm:flex transition-opacity duration-300 ease-in-out ${
              sidebarStatus
                ? "opacity-100 w-auto visible "
                : "opacity-0 w-0 hidden"
            }`}
          >
            درخواست ها
          </span>
        </CustomeNavLink>
      </SideBar>
    </PageLayout>
  );
}
