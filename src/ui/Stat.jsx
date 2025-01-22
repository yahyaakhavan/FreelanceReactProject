import { toPersianNumbers } from "../utils/toPersianNumbers";

/* eslint-disable react/prop-types */
const colors = {
  primary: "bg-primary-100 text-primary-700",
  orange: "bg-orange-100 text-orange-700",
  green: "bg-green-100 text-green-700",
};
export default function Stat({ icon, title, value, color }) {
  return (
    <div className="flex flex-col items-center gap-y-2 sm:grid sm:grid-rows-2 sm:grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
      <div
        className={`max-w-12 sm:max-w-full sm:row-span-2 flex items-center justify-center p-1 aspect-square rounded-full ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-lg self-center">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}
