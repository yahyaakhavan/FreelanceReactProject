/* eslint-disable react/prop-types */
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li>
      </ul>
    </div>
  );
}
function CustomNavLink({ to, children }) {
  const navLinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClasses} bg-primary-100/50 text-primary-900`
          : `${navLinkClasses} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
