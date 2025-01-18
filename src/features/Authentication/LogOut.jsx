/* eslint-disable react/prop-types */
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loader from "../../ui/Loader";

export default function LogOut({ children }) {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loader />
  ) : (
    <button
      onClick={logout}
      className="flex justify-center items-center gap-x-2"
    >
      <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
      {children}
    </button>
  );
}
