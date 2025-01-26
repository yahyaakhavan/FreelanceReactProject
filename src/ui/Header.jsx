import UserAvatar from "../features/Authentication/UserAvatar";
import useUser from "../features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200 relative">
      <div
        className={`w-full flex justify-end items-center gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}
