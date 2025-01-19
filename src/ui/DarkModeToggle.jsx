import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { IsdarkMode, handleDarkmode } = useDarkMode();
  return (
    <button
      onClick={() => {
        handleDarkmode();
      }}
    >
      {IsdarkMode ? (
        <HiOutlineMoon className="w-5 h-5 text-primary-900" />
      ) : (
        <HiOutlineSun className="w-5 h-5 text-primary-900" />
      )}
    </button>
  );
}
