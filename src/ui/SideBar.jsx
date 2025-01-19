/* eslint-disable react/prop-types */

export default function SideBar({ children }) {
  return (
    <div>
      <ul className=" flex-1 flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}
