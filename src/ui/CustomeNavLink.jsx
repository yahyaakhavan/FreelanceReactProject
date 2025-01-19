/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function CustomeNavLink({ to, children }) {
  const navLinkClasses =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-1 sm:px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <li>
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
    </li>
  );
}
